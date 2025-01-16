import React from 'react'
import Image from 'next/image'
import ServicesSection from '@/components/sections/services'
import HowWeWork from '@/components/sections/how-we-work'
import Newsletter from '@/components/newsletter'

const ServicesPage = () => {
    return (
        <div>
            <ServicesHero />
        </div>
    )
}

export default ServicesPage


export function ServicesHero() {
    return (
        <div>
            <section className="min-h-screen bg-black text-white py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <p className="text-[#ADFF00] mb-4">Our Services</p>
                        <h1 className="text-5xl md:text-6xl font-medium mb-4">
                            Services We Offer
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Learn more about the services and the team behind it.
                        </p>
                    </div>

                    <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto">
                        <Image
                            src="https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="UI/UX design interface showcase with notification cards and design elements"
                            fill
                            className="object-cover rounded-3xl"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />

                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="w-16 h-16 bg-[#ADFF00] rounded-full flex items-center justify-center hover:bg-[#98E600] transition-colors"
                                aria-label="Play video"
                            >
                                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-black ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <ServicesSection />
            <HowWeWork />
            <Newsletter />
        </div>
    )
}
