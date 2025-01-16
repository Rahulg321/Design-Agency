'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function BlogHero() {
    return (
        <section className="relative min-h-[80vh] w-full bg-black px-4 py-12 text-white">
            <div className="container mx-auto max-w-6xl">
                {/* Hero Text */}
                <div className="mb-12 text-center">
                    <p className="mb-4 text-sm font-light tracking-wide text-gray-400">
                        Find your inspiration here
                    </p>
                    <h1 className="mx-auto max-w-3xl text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl">
                        Share your experience, cases and lessons with the design community
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="mx-auto mb-16 flex max-w-xl gap-2">
                    <Input
                        type="search"
                        placeholder="Search article"
                        className="h-12 border-gray-800 bg-gray-900/50 text-white placeholder:text-gray-500"
                    />
                    <Button
                        className="h-12 bg-[#CCFF00] px-8 font-medium text-black hover:bg-[#CCFF00]/90"
                    >
                        Explore
                    </Button>
                </div>

                {/* Featured Post Section */}
                <div className="relative mx-auto h-screen">
                    <Image
                        src="https://images.unsplash.com/photo-1645323927877-3de25b4f819c?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        fill
                        alt="Design resources grid"
                        className="w-full rounded-xl"
                    />
                    <Card className="absolute bg-muted -bottom-[4rem] left-[5%] right-[5%]  p-6 backdrop-blur">
                        <div className="mb-2 flex items-center gap-4">
                            <Badge variant="outline" className="rounded-full border-gray-700">
                                Popular
                            </Badge>
                            <span className="text-sm text-gray-400">April 23, 2024</span>
                        </div>
                        <h2 className="text-xl font-medium md:text-2xl">
                            10 Best Design Resources for 2024: After trying 100+ Here are My Top Picks
                        </h2>
                        <p className="mt-2 text-sm text-gray-400">
                            In the ever-evolving world of design, where innovation meets aesthetics, finding the perfect resources to fuel your creative journey can be a rewarding yet daunting...{" "}
                            <span className="text-[#CCFF00]">Continue reading</span>
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    )
}
