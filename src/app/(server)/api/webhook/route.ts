import { getCurrentUserById } from "@/lib/data/current-user";
import db from "@/lib/db";
import { sendSubscriptionStartEmail } from "@/lib/mail";
import { stripe } from "@/lib/stripe";
import { User } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  let body: string;

  try {
    body = await req.text();
  } catch (error) {
    console.error("Error reading request body:", error);
    return NextResponse.json(
      { error: "Error reading request body" },
      { status: 400 }
    );
  }

  const signature = (await headers()).get("Stripe-Signature");
  if (!signature) {
    console.error("Missing Stripe-Signature header");
    return NextResponse.json(
      { error: "Missing Stripe-Signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Error verifying Stripe signature:", error);
    return NextResponse.json(
      { error: "Invalid Stripe webhook signature" },
      { status: 400 }
    );
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;
  const userEmail = session?.metadata?.userEmail;
  const userName = session?.customer_details?.name;

  if (!userId || !userEmail) {
    console.error("Missing userId or userEmail in session metadata:", session);
    return NextResponse.json(
      { error: "Missing userId or userEmail in session metadata" },
      { status: 400 }
    );
  }

  let currentUser: User | null;
  try {
    currentUser = await getCurrentUserById(userId);
  } catch (error) {
    console.error("Error retrieving user from DB:", error);
    return NextResponse.json(
      { error: "Error retrieving user from DB" },
      { status: 500 }
    );
  }

  if (!currentUser) {
    console.error(`User with ID ${userId} does not exist`);
    return NextResponse.json(
      { error: "User does not exist, bad request" },
      { status: 404 }
    );
  }

  if (event.type === "checkout.session.completed") {
    console.log("Checkout session completed. Attempting to retrieve subscription.");

    let subscription: Stripe.Subscription;
    try {
      subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      );
    } catch (error) {
      console.error("Error retrieving subscription from Stripe:", error);
      return NextResponse.json(
        { error: "Error retrieving subscription from Stripe" },
        { status: 500 }
      );
    }

    // The subscription might have multiple items; we typically check the first item
    const subscriptionItem = subscription.items.data[0];
    const price = subscriptionItem?.price;

    // We'll still use a fallback for the subscription title if needed
    const subscriptionTitle = price?.nickname || subscription.description || "Your Subscription Plan";

    try {
      // Retrieve the product to get its name and description
      let productTitle = subscriptionTitle; // fallback
      let productDescription = "N/A";

      if (price?.product) {
        try {
          const product = await stripe.products.retrieve(price.product as string);
          productTitle = product.name || productTitle;
          productDescription = product.description || productDescription;
        } catch (productError) {
          console.error("Error retrieving product:", productError);
          // Keep fallback values for title/description if the product fetch fails
        }
      }

      await updateUserWithSubscription(
        currentUser,
        subscription,
        productTitle,
        productDescription
      );

      await sendSubscriptionStartEmail(
        userEmail,
        productTitle,
        `https://hydranode.ai/profile/${currentUser.id}`,
        new Date().toLocaleDateString(),
        userName || "Valued Customer",
        userName || "Valued Customer"
      );
    } catch (error) {
      console.error("Error updating user or sending email:", error);
      return NextResponse.json(
        { error: "Error updating subscription info or sending email" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

/**
 * Helper function to handle subscription updates and
 * create a corresponding payment record.
 */
async function updateUserWithSubscription(
  user: User,
  subscription: Stripe.Subscription,
  productTitle: string,
  productDescription: string
) {
  const subscriptionItem = subscription.items.data[0];
  const price = subscriptionItem?.price;

  if (!price || price.unit_amount == null) {
    throw new Error(
      `Price or unit_amount is missing in the subscription for user ${user.id}`
    );
  }

  // 1. Update the user’s subscription details
  await db.user.update({
    where: { id: user.id },
    data: {
      stripeSubscriptionId: subscription.id,
      stripeCustomerId: subscription.customer as string,
      stripePriceId: price.id,
      stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
      hasActiveSubscription: true,
    },
  });

  // 2. Create a payment record with product title & description
  await db.payment.create({
    data: {
      userId: user.id,
      amount: price.unit_amount / 100,
      currency: price.currency,
      paymentType: "SUBSCRIPTION",
      title: productTitle,         // product.name or fallback
      description: productDescription, // product.description or fallback
      stripePaymentIntentId: subscription.latest_invoice as string,
      stripeSubscriptionId: subscription.id,
      status: "SUCCEEDED",
    },
  });
}
