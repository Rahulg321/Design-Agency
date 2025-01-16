import { ArrowRight } from 'lucide-react'
import { Card } from "@/components/ui/card"

export default function HowWeWork() {
    const steps = [
        {
            number: "01",
            title: "Research and Analyze",
            description: "Lorem ipsum dolor sit amet consectetur. Mole estie duis enim id nunc."
        },
        {
            number: "02",
            title: "Design Process",
            description: "Lorem ipsum dolor sit amet consectetur. Mole estie duis enim id nunc."
        },
        {
            number: "03",
            title: "Deliver & Payment",
            description: "Lorem ipsum dolor sit amet consectetur. Mole estie duis enim id nunc."
        }
    ]

    return (
        <section className="w-full bg-black px-4 py-16 md:py-24">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <p className="mb-4 text-sm font-medium text-[#ADFF00]">Our values</p>
                    <h2 className="mb-4 text-4xl font-medium text-white md:text-5xl">
                        How we work at Untitled
                    </h2>
                    <p className="text-gray-400">
                        Our shared values keep us connected and guide us as one team.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step) => (
                        <Card
                            key={step.number}
                            className="group relative flex h-[300px] flex-col justify-between overflow-hidden border-0 bg-[#111] p-6 transition-colors hover:bg-[#161616]"
                        >
                            <div>
                                <p className="mb-6 text-2xl font-medium text-gray-500">
                                    {step.number}
                                </p>
                                <h3 className="mb-4 text-3xl font-medium text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                            <div className="absolute bottom-[-12px] right-6">
                                <ArrowRight
                                    className="text-white transition-transform group-hover:translate-x-1"
                                    size={24}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
