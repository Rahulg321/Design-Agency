import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
      <html lang="en" className={cn(geistSans.variable)}>
        <body className={`antialiased`}>
          <main>
            <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
              <div className="relative">
                <Image
                  src={
                    "https://images.unsplash.com/photo-1494058303350-0bd5a9ecc5d3?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="blue background wavy for authentication pages"
                  className="object-cover"
                  fill
                />
              </div>
              <div>{children}</div>
            </section>
          </main>
          <Toaster />
        </body>
      </html>
    );
}
