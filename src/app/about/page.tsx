import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Instagram, Linkedin, X } from 'lucide-react'
import Newsletter from '@/components/newsletter'
import JobListings from '@/components/job-listings'

const AboutUsPage = () => {
    const jobs = [
        {
            title: "Product Designer",
            description: "We're looking for a mid-level product designer to join our team.",
            type: "Full-time",
            salary: "80k - 100k"
        },
        {
            title: "UX Designer",
            description: "We're looking for a mid-level UX designer to join our team.",
            type: "Full-time",
            salary: "80k - 100k"
        },
        {
            title: "Product Designer",
            description: "We're looking for a mid-level product designer to join our team.",
            type: "Full-time",
            salary: "80k - 100k"
        }
    ]


    return (
        <div>
            <AboutHeroSection />
            <AboutCompaniesSection />
            <AboutTeamSection />
            <CareersSection />
            <JobListings jobs={jobs} />
            <Newsletter />
        </div>
    )
}

export function CareersSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <div className="inline-block">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800">
                        Open positions
                    </span>
                </div>
                <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                    We&apos;re looking for talented people
                </h2>
                <p className="mt-4 text-lg leading-6">
                    We&apos;re a 100% remote team spread all across the world. Join us!
                </p>
            </div>
            <div className="relative w-full aspect-[16/7] overflow-hidden rounded-lg">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Team meeting in a modern office space"
                    fill
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}



function AboutHeroSection() {
    return <section className="bg-background text-foreground py-16">
        <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Content */}
                <div className="text-center mb-16">
                    <p className="text-primary text-sm mb-2">About us</p>
                    <h1 className="text-4xl md:text-5xl font-medium mb-4">About the company</h1>
                    <p className="text-muted-foreground">Learn more about the company and the team behind it.</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
                        <Image
                            src={"/about/about-hero.jpeg"}
                            alt="Modern office space with standing desk and plants"
                            className="object-cover w-full h-full"
                            fill
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <p className="text-primary text-sm">We&apos;ve helped hundreds of companies</p>
                        <h2 className="text-3xl md:text-4xl font-medium leading-tight">
                            We&apos;re only just getting started on our journey
                        </h2>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            {/* Stat 1 */}
                            <div>
                                <p className="text-primary text-4xl md:text-5xl font-bold mb-2">400+</p>
                                <p className="text-muted-foreground">Projects completed</p>
                            </div>
                            {/* Stat 2 */}
                            <div>
                                <p className="text-primary text-4xl md:text-5xl font-bold mb-2">600%</p>
                                <p className="text-muted-foreground">Return on investment</p>
                            </div>
                            {/* Stat 3 */}
                            <div>
                                <p className="text-primary text-4xl md:text-5xl font-bold mb-2">10k</p>
                                <p className="text-muted-foreground">Global downloads</p>
                            </div>
                            {/* Stat 4 */}
                            <div>
                                <p className="text-primary text-4xl md:text-5xl font-bold mb-2">200+</p>
                                <p className="text-muted-foreground">5-star reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default AboutUsPage


function AboutCompaniesSection() {
    const companies = [
        { name: "Layers", logo: "/logos/layers.png" },
        { name: "Sisyphus", logo: "/logos/sisyphus.png" },
        { name: "Circooles", logo: "/logos/circooles.png" },
        { name: "Catalog", logo: "/logos/catalog.png" },
        { name: "Quotient", logo: "/logos/quotient.png" },
    ]
    return (
        <section className="bg-background text-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-center text-primary mb-12">
                        From startups to the world&apos;s largest companies
                    </h2>

                    <div className="flex flex-wrap md:flex-nowrap gap-8 items-center justify-between">
                        {companies.map((company) => (
                            <div key={company.name} className="flex items-center gap-2">
                                <Image
                                    src={company.logo || "/placeholder.svg"}
                                    alt={`${company.name} logo`}
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

interface TeamMember {
    name: string
    role: string
    description: string
    image: string
    social: {
        twitter?: string
        linkedin?: string
        dribbble?: string
    }
}

const teamMembers: TeamMember[] = [
    {
        name: "Natali Craig",
        role: "Product Designer",
        description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        image: "/team/nat.jpeg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        }
    },
    {
        name: "Natali Craig",
        role: "Product Designer",
        description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        image: "/team/nat.jpeg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        }
    },
    {
        name: "Natali Craig",
        role: "Product Designer",
        description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        image: "/team/nat.jpeg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        }
    },
    {
        name: "Natali Craig",
        role: "Product Designer",
        description: "Founding design team at Figma. Former Pleo, Stripe, and Tile.",
        image: "/team/nat.jpeg",
        social: {
            twitter: "#",
            linkedin: "#",
            dribbble: "#"
        }
    }
]

export function AboutTeamSection() {
    return (
        <section className="bg-background text-foreground py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4">
                        <p className="text-primary">We&apos;re hiring!</p>
                        <h2 className="text-4xl md:text-5xl font-medium">Meet our team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our philosophy is simple — hire a team of diverse, passionate people and
                            foster a culture that empowers you to do you best work.
                        </p>

                        <div className="flex items-center justify-center gap-4 pt-4">
                            <Button variant="outline">About us</Button>
                            <Button className="bg-[#ADFF00] text-black hover:bg-[#ADFF00]/90">
                                Open positions
                            </Button>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="space-y-4">
                                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-medium">{member.name}</h3>
                                    <p className="text-primary">{member.role}</p>
                                    <p className="text-muted-foreground text-sm">{member.description}</p>
                                    <div className="flex gap-4 pt-2">
                                        {member.social.twitter && (
                                            <Link href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                                                <X className="h-5 w-5" />
                                            </Link>
                                        )}
                                        {member.social.linkedin && (
                                            <Link href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                                                <Linkedin className="h-5 w-5" />
                                            </Link>
                                        )}
                                        {member.social.dribbble && (
                                            <Link href={member.social.dribbble} className="text-muted-foreground hover:text-foreground">
                                                <Instagram className="h-5 w-5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
