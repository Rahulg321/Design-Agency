"use server";

import { Resend } from "resend";


import React from "react";
import SubscriptionStartEmail from "@/components/emails/subscription-success-email";
import SubscriptionEndEmail from "@/components/emails/subscription-end-email";
import PaymentSuccessfull from "@/components/emails/payment-successfull";
import ContactMessageEmail from "@/components/emails/contact-message-email";


const resend = new Resend(process.env.RESEND_API_KEY);

const domain =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_URL
    : process.env.NEXT_PUBLIC_APP_URL;


export const sendSubscriptionStartEmail = async (
  email: string,
  subscriptionPlan: string, // Matches productName in the SubscriptionStartEmail component
  dashboardLink: string,
  subscriptionStartDate: string,
  firstName: string | null,
  lastName: string | null,
) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: `🎉 You've Got Access to ${subscriptionPlan}! 🎉`, // Updated subject line dynamically based on productName
    react: SubscriptionStartEmail({
      firstName,
      lastName,
      email,
      subscriptionStartDate,
      subscriptionPlan, // Passed as productName to match the prop in the component
      dashboardLink,
    }),
  });

  if (error) {
    console.log(
      "Error sending subscription start email:",
      error.name,
      error.message,
    );
    return {
      error: `Could not send email -> ${error.message}}`,
    };
  }

  return { data };
};


export const sendSubscriptionEndedEmail = async (
  email: string,
  subscriptionPlan: string,
  renewalLink: string,
  subscriptionEndDate: string,
  firstName: string | null,
  lastName: string | null,
) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: "2 FA Verification",
    react: SubscriptionEndEmail({
      firstName,
      lastName,
      email,
      subscriptionEndDate,
      subscriptionPlan,
      renewalLink,
    }),
  });

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};

export const sendPaymentSuccessfulEmail = async (
  customerName: string,
  amount: string,
  currency: string,
  paymentDate: string,
  invoiceNumber: string,
  productName: string,
  invoiceLink: string,
  email: string,
) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: "Payment Successful",
    react: React.createElement(PaymentSuccessfull, {
      customerName,
      amount,
      currency,
      paymentDate,
      invoiceNumber,
      productName,
      invoiceLink,
    }),
  });

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}`,
    };
  }

  return { data };
};


export const sendContactFormEmail = async (
  email: string,
  firstName: string,
  lastName: string,
  message: string,
) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: ["contact@hydranode.ai"],
    replyTo: email,
    subject: `Contact Inquiry by ${firstName} ${lastName} from HydraNode`,
    react: ContactMessageEmail({
      firstName,
      lastName,
      email,
      message,
    }),
  });

  console.log("sending contact form email", data, error);

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};