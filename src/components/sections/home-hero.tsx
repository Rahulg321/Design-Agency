'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomeHero() {
    return (
        <section className="relative min-h-screen bg-black text-white overflow-hidden">
            {/* Background dots */}
            <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9fff3f]"></div>
                <div className="w-2 h-2 rounded-full bg-[#9fff3f]"></div>
            </div>

            <div className="container mx-auto px-4 pt-20">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8">
                        <h1 className="text-[5rem] leading-none font-bold tracking-wider" style={{ fontStretch: "expanded" }}>
                            CREATIVE
                            <br />
                            AGENCY
                        </h1>

                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="rounded-full border-zinc-800 text-zinc-400 hover:text-white">
                                World Class Agency
                            </Button>
                            <Button variant="outline" className="rounded-full border-zinc-800 text-zinc-400 hover:text-white">
                                2023 Best Agency
                            </Button>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="flex justify-end">
                            <Image
                                src="/about/about-hero.jpeg"
                                alt="Creative spiral visual"
                                width={500}
                                height={200}
                                className="object-contain"
                            />
                        </div>

                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-zinc-700"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.2L5.6 22L8 14.4L2 9.6H9.6L12 2Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            ))}
                        </div>

                        <p className="mt-6 text-zinc-400 max-w-md">
                            Lorem ipsum dolor sit amet consectetur. Molestie duis enim id nunc tempor feugiat a. Ultricies eget diam est lorem sit mauris morbi nunc tempor feugiat.
                        </p>
                    </div>
                </div>
            </div>

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-[#9fff3f]/10 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#9fff3f] flex items-center justify-center">
                        <svg
                            className="w-4 h-4 text-black ml-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
