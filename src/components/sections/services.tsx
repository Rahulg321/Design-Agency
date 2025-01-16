'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image'
import { Service } from '@/lib/types'

const categories = [
    { name: 'Design', active: true },
    { name: 'Development', active: false },
    { name: 'Digital Marketing', active: false },
    { name: 'SEO', active: false },
]

const services: Service[] = [
    {
        id: '01',
        name: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '02',
        name: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '03',
        name: 'Branding',
        image: 'https://images.unsplash.com/photo-1529419412599-7bb870e11810?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: '04',
        name: 'Motion Graphic',
        image: 'https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
]

export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    return (
        <div className="bg-black min-h-screen p-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-16">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm transition-colors",
                            category.active
                                ? "bg-[#CCFF00] text-black"
                                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                        )}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Services List and Preview */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group"
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="flex items-baseline gap-8 group-hover:opacity-100 opacity-40 transition-opacity">
                                <span className="text-zinc-600 font-light text-7xl tabular-nums">
                                    {service.id}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl text-white font-light tracking-wide">
                                            {service.name}
                                        </span>
                                        <ArrowUpRight
                                            className={cn(
                                                "ml-auto w-6 h-6 text-[#CCFF00] transition-all duration-300",
                                                hoveredService === index
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-4"
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                            {index !== services.length - 1 && (
                                <div className="h-px bg-zinc-800 mt-8" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Preview Image - Only shown on large screens */}
                <div className="hidden lg:block sticky top-8">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        {services.map((service, index) => (
                            <Image
                                key={index}
                                src={service.image || "/placeholder.svg"}
                                alt={service.name}
                                fill
                                className={cn(
                                    "absolute inset-0 w-full h-full object-cover transform rotate-6 hover:rotate-0 transition-all duration-500",
                                    hoveredService === index
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-8"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
