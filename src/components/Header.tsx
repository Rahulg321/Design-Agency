'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { menuItems } from '@/lib/utils'

export default function HeaderWithMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <header className="flex justify-between items-center p-4 shadow-md">
                <div className="text-2xl font-bold">Logo</div>
                <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                    <Menu className="h-6 w-6" />
                </Button>
            </header>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Left Section */}
                    <div className="w-1/2 bg-[#e2ff00] p-12 flex flex-col">
                        <div className="mb-16">
                            <Link
                                href="/"
                                className="text-black text-2xl font-medium"
                                onClick={toggleMenu}
                            >
                                Nucleus
                            </Link>
                        </div>

                        <nav className="flex-1">
                            <ul className="space-y-8">
                                {menuItems.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-black text-5xl hover:opacity-70 transition-opacity font-medium tracking-wide"
                                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                                            onClick={toggleMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex gap-6">
                            {menuItems.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-black text-sm hover:opacity-70 transition-opacity"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div
                        className="w-1/2 bg-black p-12 flex flex-col"
                    >
                        <button
                            onClick={toggleMenu}
                            className="self-end text-white hover:opacity-70 transition-opacity"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <div className="flex-1 flex flex-col justify-center">
                            <p className="text-[#e2ff00] mb-4">Got an idea?</p>
                            <h2
                                className="text-4xl text-[#e2ff00] mb-8 font-medium"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}
                            >
                                Let's craft<br />
                                brilliant together!
                            </h2>
                            <Link
                                href="/contact"
                                className="inline-flex px-6 py-3 border border-[#e2ff00] text-[#e2ff00] hover:bg-[#e2ff00] hover:text-black transition-colors w-fit"
                                onClick={toggleMenu}
                            >
                                Get in touch
                            </Link>
                        </div>

                        <div className="flex gap-6">
                            <Link
                                href="/terms"
                                className="text-[#e2ff00] text-sm hover:opacity-70 transition-opacity"
                            >
                                Terms & Conditions
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-[#e2ff00] text-sm hover:opacity-70 transition-opacity"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
