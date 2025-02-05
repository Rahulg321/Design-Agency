import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";
import type React from "react"; // Import React

async function getSession(sessionId: string) {
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch (error) {
    console.error("Error retrieving session:", error);
    return null;
  }
}

async function getCustomer(customerId: string) {
  if (!customerId) return null;
  return await stripe.customers.retrieve(customerId);
}

interface PaymentStatus {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  bgColor: string;
  iconColor: string;
}

const statusConfig: Record<string, PaymentStatus> = {
  notFound: {
    icon: AlertCircle,
    title: "Session Not Found",
    description:
      "We couldn't retrieve your session information. Please try again or contact support.",
    buttonText: "Back to Home",
    buttonHref: "/",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  open: {
    icon: XCircle,
    title: "Payment Failed",
    description: "We couldn't process your payment. Please try again.",
    buttonText: "Try Again",
    buttonHref: "/pricing",
    bgColor: "bg-red-50",
    iconColor: "text-red-500",
  },
  complete: {
    icon: CheckCircle,
    title: "Payment Successful",
    description: "Welcome to HydraNode! Your account has been activated.",
    buttonText: "Explore the Product",
    buttonHref: "/services",
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
  },
  default: {
    icon: AlertCircle,
    title: "Something Went Wrong",
    description:
      "We apologize for the inconvenience. If the problem persists, please contact our support team.",
    buttonText: "Back to Home",
    buttonHref: "/",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-500",
  },
};

function PaymentStatusCard({ status }: { status: PaymentStatus }) {
  return (
    <div
      className={`flex min-h-screen items-center justify-center ${status.bgColor} dark:bg-gray-900 transition-colors duration-300`}
    >
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800 transition-colors duration-300">
        <status.icon className={`mx-auto mb-6 h-16 w-16 ${status.iconColor}`} />
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
          {status.title}
        </h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          {status.description}
        </p>
        <Button asChild className="w-full">
          <Link href={status.buttonHref}>{status.buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}

const PaymentConfirmationPage = async (props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParams = await props.searchParams;
  const currentAuthSession = await auth();
  const sessionId = searchParams.session_id || "";

  const currentCheckoutSession = await getSession(sessionId as string);

  if (!currentCheckoutSession) {
    return <PaymentStatusCard status={statusConfig.notFound} />;
  }

  const customer = await getCustomer(currentCheckoutSession.customer as string);

  if (currentCheckoutSession.status === "open") {
    return <PaymentStatusCard status={statusConfig.open} />;
  }

  if (currentCheckoutSession.status === "complete") {
    return <PaymentStatusCard status={statusConfig.complete} />;
  }

  return <PaymentStatusCard status={statusConfig.default} />;
};

export default PaymentConfirmationPage;
