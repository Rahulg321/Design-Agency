
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { getCurrentUserById } from "@/lib/data/current-user";
import { notFound } from "next/navigation";
import { getAllUsersIdWithUnstableCache, getAllUsersWithUnstableCache } from "@/lib/data/user";
import { unstable_cache } from "next/cache";
import db from "@/lib/db";
import { Metadata, ResolvingMetadata } from "next";

// Mock user data
const user = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  subscription: {
    active: true,
    plan: "Pro",
    renewalDate: "2023-12-31",
  },
  purchases: [
    { id: 1, item: "Premium Template", date: "2023-05-15", amount: "$49.99" },
    { id: 2, item: "Consulting Session", date: "2023-06-02", amount: "$99.99" },
    { id: 3, item: "E-book Bundle", date: "2023-06-20", amount: "$29.99" },
  ],
};

export async function generateStaticParams() {
  const users = await getAllUsersIdWithUnstableCache();
  return users.map((user) => ({
    id: String(user.id),
  }));
}


const getUserPaymentHistoryUnstableCache = unstable_cache(
  async (userId: string) => {
    return await db.payment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
  ["user_payment", "user"], // Dynamic cache key
  { revalidate: 3600, tags: ["user_payment", "user"] }
);

export async function generateMetadata(
  props: { params: Promise<{ userId: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const userId = params.userId;
  const user = await getCurrentUserById(userId);

  return {
    title: `${user?.name} - Profile`,
    description: `Profile page of ${user?.name} for Pixora Labs`,
    openGraph: {
      images: [user?.image || "/about_hero.png"],
    },
  };
}

export default async function UserProfilePage({ params }: { params: Promise<{ userId: string }> }) {

    let userId = (await params).userId


    const [
      existingLoggedInUser,
    //   userPaymentHistory,
    ] = await Promise.all([
      getCurrentUserById(userId),
    //   getUserPaymentHistoryUnstableCache(userId),
    ]);



    if (!existingLoggedInUser) {
      notFound();
    }

    const {name, email, image} = existingLoggedInUser
    let userPaymentHistory =await  db.payment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take:5
    });


    console.log("user payment history", userPaymentHistory)


  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={image || "/placeholder.svg"}
                alt={name || "headshot of user"}
                className="rounded-full"
                width={100}
                height={100}
              />
              <div>
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-500">{email}</p>
              </div>
            </div>
            <Separator />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Email Notifications</Label>
                <p className="text-sm text-gray-500">
                  Receive email updates about your account
                </p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select
                id="language"
                className="w-full p-2 border rounded"
                defaultValue="en"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <Button variant="outline" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Purchase History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Item</th>
                    <th className="text-left p-2">Date</th>
                    <th className="text-left p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {userPaymentHistory.map((purchase) => (
                    <tr key={purchase.id} className="border-b">
                      <td className="p-2">{purchase.title}</td>
                      <td className="p-2">{purchase.createdAt.toDateString()}</td>
                      <td className="p-2">{purchase.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
          </CardHeader>
          <CardContent>
            {user.subscription.active ? (
              <div className="space-y-4">
                <p>
                  You are currently subscribed to the{" "}
                  <strong>{user.subscription.plan}</strong> plan.
                </p>
                <p>
                  Your subscription will renew on{" "}
                  {user.subscription.renewalDate}.
                </p>
                <Button variant="destructive">Cancel Subscription</Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p>You don't have an active subscription.</p>
                <Button>Get a Subscription</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
