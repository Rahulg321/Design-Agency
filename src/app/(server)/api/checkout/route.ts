import { auth } from "@/auth";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const { priceId, mode, userId, userEmail } =
      await req.json();

        if (!priceId) {
          console.log("price id was not present")
          return NextResponse.json(
            { error: "Price ID is required" },
            { status: 404 },
          );
        }


        console.log({mode, priceId, userId, userEmail})

      let session;
      const subscriptionData: Stripe.Checkout.SessionCreateParams = {
        ui_mode: "embedded",
        payment_method_types: ["card"],
        mode,
        customer_email: userEmail || undefined,

        metadata: {
          userId: userId as string,
          userEmail: userEmail as string,
        },
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        return_url: `${req.headers.get(
          "origin",
        )}/return?session_id={CHECKOUT_SESSION_ID}`,
      };

    session = await stripe.checkout.sessions.create(subscriptionData);

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });


  } catch (error: any) {
    console.error("An error occurred while creating session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}