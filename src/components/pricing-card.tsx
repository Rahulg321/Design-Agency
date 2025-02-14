import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { User } from "@prisma/client";
import CheckoutDialog from "./dialogs/CheckoutDialog";
import Link from "next/link";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  priceId: string;
  features: PricingFeature[];
  highlighted?: boolean;
  mainFeatures: {
    icon: string;
    text: string;
  }[];

  user: User | null

}

export function PricingCard({
  title,
  price,
  priceId,
  features,
  highlighted = false,
  mainFeatures,
  user
}: PricingCardProps) {

  let userId
  let userName
  let userEmail

  if(user){
    userId = user.id
    userName = user.name
    userEmail = user.email;
  }

  return (
    <Card
      className={`relative flex flex-col ${
        highlighted ? "bg-[#F15A2B]" : "bg-white"
      }`}
    >
      <CardContent className="flex-1 p-6">
        <h3
          className={`text-xl font-medium ${
            highlighted ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <div
          className={`mt-4 flex items-baseline ${
            highlighted ? "text-white" : "text-black"
          }`}
        >
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          <span className="ml-1 text-sm font-medium">/month</span>
        </div>

        <div className="mt-6 space-y-4">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                highlighted ? "text-white" : "text-black"
              }`}
            >
              <span className="text-xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                highlighted ? "text-white" : "text-black"
              }`}
            >
              <Check className="h-4 w-4" />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6">
        {user ? (
          <div>
            <CheckoutDialog priceId={priceId} userId={userId!} name={userName || "John DOE"} email={userEmail!}/>
          </div>
        ) : (
          <Button
            className={`w-full ${
              highlighted
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black border border-gray-200 hover:bg-gray-50"
            }`}
            asChild
          >
            <Link href={"/auth/login"}>
              Get Started
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
