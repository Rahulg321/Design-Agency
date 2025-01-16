'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function Newsletter() {
    const [email, setEmail] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Add your newsletter subscription logic here
        console.log('Subscribing email:', email)
    }

    return (
        <section className="py-16">
            <div className="container px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl bg-muted bg-gradient-to-b from-card/60 to-card p-8 md:p-12 dark:from-zinc-900 dark:to-black">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Content Side */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-medium mb-2">
                                    Join 2,000+ subscribers
                                </h2>
                                <p className="text-muted-foreground">
                                    Stay in the loop with everything you need to know.
                                </p>
                            </div>

                            {/* Form Side */}
                            <div className="space-y-4">
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-background/10 border-border text-foreground placeholder:text-muted-foreground"
                                        required
                                    />
                                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        Subscribe
                                    </Button>
                                </form>

                                <p className="text-sm text-muted-foreground">
                                    We care about your data in our{' '}
                                    <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                                        privacy policy
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
