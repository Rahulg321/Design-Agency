'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Youtube, Instagram, Twitter } from 'lucide-react'

export default function ContactHero() {
    return (
        <section className="min-h-screen py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <p className="text-[#ADFF00] mb-4">Contact Us</p>
                    <h1 className="text-5xl md:text-6xl font-medium mb-4">Get in Touch</h1>
                    <p className="text-gray-400">
                        Have questions? We&apos;re here for you. Drop us a line, write us an email, or send us a text.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8  rounded-xl p-8">
                    {/* Left Column - Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                        <p className="text-gray-400">Say something to start a live chat!</p>

                        <div className="space-y-6 mt-8">
                            <div className="flex items-center gap-4">
                                <Phone className="h-5 w-5 text-gray-400" />
                                <a href="tel:(949) 880-6134" className="text-gray-300 hover:text-white">
                                    (949) 880-6134
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <Mail className="h-5 w-5 text-gray-400" />
                                <a href="mailto:team@nucleus.me" className="text-gray-300 hover:text-white">
                                    team@nucleus.me
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="h-5 w-5 text-gray-400" />
                                <span className="text-gray-300">
                                    132 Dartmouth Street Boston,<br />
                                    Massachusetts 02156 United States
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12">
                            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <Input
                                    type="text"
                                    placeholder="Your name"
                                    className="bg-transparent border-gray-800 focus:border-gray-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-transparent border-gray-800 focus:border-gray-700"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Phone Number</label>
                            <Input
                                type="tel"
                                placeholder="+1 012 3456 789"
                                className="bg-transparent border-gray-800 focus:border-gray-700"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Product Question</label>
                            <Select>
                                <SelectTrigger className="bg-transparent border-gray-800 focus:border-gray-700">
                                    <SelectValue placeholder="Select a product" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="product1">Product 1</SelectItem>
                                    <SelectItem value="product2">Product 2</SelectItem>
                                    <SelectItem value="product3">Product 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Message</label>
                            <Textarea
                                placeholder="Write your message..."
                                className="bg-transparent border-gray-800 focus:border-gray-700 min-h-[120px]"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="subscribe" className="border-gray-700" />
                            <label htmlFor="subscribe" className="text-sm text-gray-400">
                                Subscribe to receive the latest news and exclusive offers
                            </label>
                        </div>

                        <div className="pt-4">
                            <Button className="bg-[#ADFF00] text-black hover:bg-[#98E600] w-full md:w-auto px-8">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
