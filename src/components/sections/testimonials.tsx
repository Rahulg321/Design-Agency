'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        company: 'Gymstory',
        title: 'Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!',
        content: "I recently hired Ideapeel for a custom web development project and couldn't be happier with the results.The team was able to bring my unique ideas to life and create a website that truly stands out.",
        author: 'Diana Loreza',
        role: 'Director of GYMSTORY',
        image: 'https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        company: 'TechCorp',
        title: 'Outstanding Service and Exceptional Results!',
        content: 'Working with the team was an absolute pleasure. They understood our vision perfectly and delivered beyond our expectations. The attention to detail was impressive.',
        author: 'Michael Chen',
        role: 'CTO of TechCorp',
        image: 'https://images.unsplash.com/photo-1527736947477-2790e28f3443?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        company: 'StyleHub',
        title: 'Creative Solutions That Drive Results',
        content: 'The creativity and professionalism of the team is unmatched. They helped us transform our digital presence and increase our customer engagement significantly.',
        author: 'Sarah Williams',
        role: 'Marketing Director at StyleHub',
        image: 'https://images.unsplash.com/photo-1528496270866-6a09dd5ea86b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        )
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-sm font-medium tracking-wider uppercase">
                        Testimonial
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Customer is Our Top Priority
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We survey all of our clients, the results of which go directly to our CEO.
                    </p>
                </div>

                <div className="relative">
                    <div className=" rounded-3xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6">
                                <div className="h-8">
                                    <span className="text-xl font-semibold">
                                        {testimonials[currentIndex].company}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold">
                                    {testimonials[currentIndex].title}
                                </h3>

                                <p className="text-gray-600">
                                    {testimonials[currentIndex].content}
                                </p>

                                <div className="space-y-1">
                                    <div className="font-semibold">
                                        {testimonials[currentIndex].author}
                                    </div>
                                    <div className="text-gray-600 text-sm">
                                        {testimonials[currentIndex].role}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative w-64 h-64 rounded-full overflow-hidden bg-[#40bfff]">
                                    <Image
                                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                                        alt={testimonials[currentIndex].author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    )
}
