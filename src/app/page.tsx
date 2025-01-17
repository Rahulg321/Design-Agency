import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from 'lucide-react'
import { Rocket, Paintbrush, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Infinity, Zap, Calendar, PenTool, Target, Crown, Settings, DollarSign, Users } from 'lucide-react'
import Testimonials from '@/components/sections/testimonials'
import HomeHero from "@/components/sections/home-hero"
import CTASection from "@/components/sections/cta-section"
import FAQSection from "@/components/sections/faq-section"




export default function HomePage() {
    return <div>
        <HomeHero />
        <HowWeWork />
        <Capabilities />
        <Testimonials />
        <Pricing />
        <Benefits />
        <FAQSection />
        <CTASection />
    </div>

}


function Pricing() {
    const plans = [
        {
            name: "Standard",
            badge: "Most Popular",
            price: "$2,995/m",
            description: "One request at a time. For companies who need on-going design support",
            priceNote: "Pause or cancel anytime",
            features: [
                "1x active task at a time",
                "Unlimited revisions",
                "Dedicated project manager",
                "Daily comms through Slack",
                "Work with senior designers",
                "2-3 days turn around time",
                "Top tier design"
            ]
        },
        {
            name: "Growth",
            badge: "Best value",
            price: "$4,795/m",
            description: "Double the requests. For companies with non-stop design needs. Limited spots.",
            priceNote: "Pause or cancel anytime",
            features: [
                "2x active task at a time",
                "Unlimited revisions",
                "Dedicated project manager",
                "Daily comms through Slack",
                "Work with senior designers",
                "2-3 days turn around time",
                "Top tier design"
            ]
        },
        {
            name: "Basic - Weekly",
            price: "$890/m",
            description: "Perfect if you want to try the subscription out or only have a few one-off tasks.",
            priceNote: "Paid per weekly",
            features: [
                "Fixed Scope of work",
                "2 rounds of revisions",
                "Dedicated project manager",
                "Daily comms through Slack",
                "1x designer",
                "2-5 days turn around time",
                "Top tier design"
            ]
        }
    ]

    return (
        <section className="w-full bg-[#0A0F0A] px-4 py-16 text-white md:py-24">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#CCFF00]">
                        CLEAR & SIMPLE PRICING
                    </p>
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                        Simple pricing to level up your brand.
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Card key={index} className="relative border-[#2A2D2A] bg-[#1A1D1A]">
                            <CardHeader className="space-y-2 pb-8 pt-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold">{plan.name}</h3>
                                    {plan.badge && (
                                        <Badge className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
                                            {plan.badge}
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-sm text-gray-300">{plan.description}</p>
                            </CardHeader>
                            <CardContent className="pb-8">
                                <div className="mb-6">
                                    <p className="text-4xl font-bold">{plan.price}</p>
                                    <p className="text-sm text-gray-400">{plan.priceNote}</p>
                                </div>
                                <ul className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center gap-2">
                                            <Plus className="h-4 w-4 text-[#CCFF00]" />
                                            <span className="text-gray-200">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-3 pb-8">
                                <Button
                                    variant="outline"
                                    className="w-full border-[#2A2D2A] text-white hover:bg-[#2A2D2A]"
                                >
                                    Book A Call
                                </Button>
                                <Button
                                    className="w-full bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90"
                                >
                                    Click to buy
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}




function HowWeWork() {
    return (
        <section className="w-full bg-[#0A0F0A] px-4 py-16 text-white md:py-24">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 grid gap-8 md:grid-cols-2 md:gap-16">
                    <div className="space-y-6">
                        <p className="text-sm font-medium uppercase tracking-wider text-[#CCFF00]">
                            HOW WE WORK
                        </p>
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            Get a dedicated design team at fraction of the cost.
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-lg text-gray-300">
                            Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.
                        </p>
                        <div>
                            <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
                                See Pricing
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Steps */}
                <div className="relative grid gap-8 md:grid-cols-3">
                    {/* Connecting Lines */}
                    <div className="absolute left-0 right-0 top-12 hidden md:block">
                        <div className="mx-auto flex justify-between px-24">
                            <div className="h-0.5 w-full bg-[#CCFF00]/20"></div>
                            <div className="h-0.5 w-full bg-[#CCFF00]/20"></div>
                        </div>
                    </div>

                    {/* Step 1 */}
                    <div className="relative space-y-4">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#CCFF00]">
                            <Rocket className="h-12 w-12 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold">Subscribe & get started</h3>
                        <p className="text-gray-400">
                            Submit as many design tasks as you need without worrying about individual project fees.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative space-y-4">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#CCFF00]">
                            <Paintbrush className="h-12 w-12 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold">Polished designs - on time</h3>
                        <p className="text-gray-400">
                            Our designers get to work to deliver your request. Receive your design within a few days.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative space-y-4">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#CCFF00]">
                            <RefreshCw className="h-12 w-12 text-black" />
                        </div>
                        <h3 className="text-xl font-semibold">Revisions made simple</h3>
                        <p className="text-gray-400">
                            Custom designs, prompt replies and as many revisions as you need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}



function Capabilities() {
    const capabilities = [
        ["Web design & UI", "Social media visuals", "Infographics", "Design system", "Email design", "Stationery", "Icons"],
        ["Packaging & merch", "Signage", "Brochures", "Logos & branding", "Digital ads", "Wireframes"]
    ]
    return (
        <section
            className="min-h-[400px] w-full py-16"
        >
            <div className="container px-4">
                <div className="text-center space-y-4 mb-12">
                    <p className="text-[#9eff00] text-sm font-medium tracking-wider uppercase">
                        Our Capabilities
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        We can help you with...
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto">
                    {capabilities.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {row.map((capability) => (
                                <Button
                                    key={capability}
                                    variant="ghost"
                                    className="bg-[#9eff00] hover:bg-[#8be400] text-black rounded-full px-6 py-2 h-auto text-sm font-medium transition-colors"
                                >
                                    {capability}
                                </Button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}



function Benefits() {
    const benefits = [
        {
            icon: <Infinity className="h-8 w-8" />,
            number: "1.",
            title: "On-demand requests",
            description: "Put all your requests in the design queue in Trello, and we'll knock them out 1 by 1."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            number: "2.",
            title: "Top-notch quality",
            description: "High-end work from a dedicated team of senior designers that's always available when you need it."
        },
        {
            icon: <PenTool className="h-8 w-8" />,
            number: "3.",
            title: "Powered by - Webflow",
            description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better."
        },
        {
            icon: <Target className="h-8 w-8" />,
            number: "4.",
            title: "Fast, Responsive, Reliable.",
            description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days."
        },
        {
            icon: <Calendar className="h-8 w-8" />,
            number: "5.",
            title: "No Lock in contracts",
            description: "Pay the same every month, no surprises. You can use it for as long as you want and cancel anytime."
        },
        {
            icon: <DollarSign className="h-8 w-8" />,
            number: "6.",
            title: "Great value for money",
            description: "Get the power of dedicated design team at fraction of the cost of full-time employee ($54k/yr vs. $112k/yr)."
        },
        {
            icon: <Settings className="h-8 w-8" />,
            number: "7.",
            title: "Customized for you",
            description: "We design and build custom for you. We're never starting from a template unless you want that? You don't, right?"
        },
        {
            icon: <Crown className="h-8 w-8" />,
            number: "8.",
            title: "Creative paying",
            description: "We're here when you need us and not on payroll when you don't."
        },
        {
            icon: <Users className="h-8 w-8" />,
            number: "9.",
            title: "Expert turnovers",
            description: "You're getting 30+ years of design experience with every request. No hand-holding required!"
        }
    ]

    return (
        <section className="w-full bg-[#0A0F0A] px-4 py-16 text-white md:py-24">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-20 grid gap-8 md:grid-cols-2 md:gap-16">
                    <div className="space-y-6">
                        <p className="text-sm font-medium uppercase tracking-wider text-[#CCFF00]">
                            BENEFITS
                        </p>
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            The design subscription that connects you to your dream team
                        </h2>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <p className="text-lg text-gray-300">
                            A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
                        </p>
                        <div>
                            <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
                                See Pricing
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="space-y-4">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#CCFF00] text-black">
                                {benefit.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="flex items-center gap-2 text-xl font-semibold">
                                    <span className="text-[#CCFF00]">{benefit.number}</span>
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
