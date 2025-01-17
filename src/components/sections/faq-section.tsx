'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {
    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
            <div className="w-full max-w-2xl space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">FAQ'S</h1>
                    <p className="text-gray-400">Providing answers to your questions</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="bg-zinc-800/50 rounded-lg px-4 py-3 hover:no-underline hover:bg-zinc-800 [&[data-state=open]>div]:bg-[#ADFF00] [&[data-state=open]>div]:text-black">
                            <span>Do you have specific pricing plans to show?</span>
                        </AccordionTrigger>
                        <AccordionContent className="bg-zinc-800/50 mt-1 px-4 py-3 rounded-lg">
                            Our pricing plans are customized based on your specific needs and requirements.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-none">
                        <AccordionTrigger className="bg-zinc-800/50 rounded-lg px-4 py-3 hover:no-underline hover:bg-zinc-800 [&[data-state=open]>div]:bg-[#ADFF00] [&[data-state=open]>div]:text-black">
                            <span>How many years of experience do you have?</span>

                        </AccordionTrigger>
                        <AccordionContent className="bg-zinc-800/50 mt-1 px-4 py-3 rounded-lg">
                            Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien, id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis eget.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-none">
                        <AccordionTrigger className="bg-zinc-800/50 rounded-lg px-4 py-3 hover:no-underline hover:bg-zinc-800 [&[data-state=open]>div]:bg-[#ADFF00] [&[data-state=open]>div]:text-black">
                            <span>What companies have you worked with?</span>

                        </AccordionTrigger>
                        <AccordionContent className="bg-zinc-800/50 mt-1 px-4 py-3 rounded-lg">
                            We have collaborated with various companies across different industries.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-none">
                        <AccordionTrigger className="bg-zinc-800/50 rounded-lg px-4 py-3 hover:no-underline hover:bg-zinc-800 [&[data-state=open]>div]:bg-[#ADFF00] [&[data-state=open]>div]:text-black">
                            <span>Am I safe leaving my company in your hands?</span>

                        </AccordionTrigger>
                        <AccordionContent className="bg-zinc-800/50 mt-1 px-4 py-3 rounded-lg">
                            We prioritize security and confidentiality in all our client relationships.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex gap-4">
                    <Input
                        placeholder="Ask us what you want to know..."
                        className="bg-zinc-800/50 border-none text-white placeholder:text-gray-400"
                    />
                    <Button className="bg-[#ADFF00] text-black hover:bg-[#ADFF00]/90">
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
}
