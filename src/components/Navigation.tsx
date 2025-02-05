
"use client";

import { useState } from 'react';
import { Menu, Sparkles, X, Layout, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import Link from 'next/link';
import { Session } from 'next-auth';

export function Navigation({session}:{session:Session}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Sparkles className="h-8 w-8 text-[#F97B5C]" />
                        <span className="text-xl font-bold">DesignPulse</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 w-[400px]">
                                            <Link href="/services/uiux-design" className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                                                <Layout className="h-5 w-5" />
                                                <div>
                                                    <div className="font-medium">UI/UX Design</div>
                                                    <div className="text-sm text-gray-500">Beautiful, intuitive interfaces</div>
                                                </div>
                                            </Link>
                                            <Link href="/services/development" className="flex items-center gap-3 hover:bg-gray-100 p-3 rounded-lg transition-colors">
                                                <Code2 className="h-5 w-5" />
                                                <div>
                                                    <div className="font-medium">Development</div>
                                                    <div className="text-sm text-gray-500">Full-stack solutions</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link href={"/work"}>Work</Link>
                        <Link href={"about"}>About</Link>
                        <Link href={"/pricing"}>Pricing</Link>
                        <Button className="bg-[#F97B5C] hover:bg-[#e66a4d]">Get Started</Button>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
