'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function FAQ() {
    const faqs = [
        {
            question: "Do you have specific pricing plans to show?",
            answer: ""
        },
        {
            question: "How many years of experience do you have?",
            answer: "Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget."
        },
        {
            question: "What companies have you worked with?",
            answer: ""
        },
        {
            question: "Am I safe leaving my company in your hands?",
            answer: ""
        }
    ]

    return (
        <section className="w-full bg-[#0A0F0A] px-4 py-16 text-white md:py-24">
            <div className="container mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">FAQ&apos;s</h2>
                    <p className="text-gray-400">
                        Providing answers to your questions
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="mb-12">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-[#2A2D2A]"
                        >
                            <AccordionTrigger className="text-left hover:no-underline [&[data-state=open]>div]:text-[#CCFF00]">
                                <div className="text-lg">{faq.question}</div>
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                {faq.answer || "Content coming soon..."}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Question Form */}
                <div className="space-y-4">
                    <Textarea
                        placeholder="Ask us what you want to know..."
                        className="min-h-[100px] border-[#2A2D2A] bg-[#1A1D1A] text-white placeholder:text-gray-500"
                    />
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <p>We will answer your questions via email within 48 hours.</p>
                        <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
