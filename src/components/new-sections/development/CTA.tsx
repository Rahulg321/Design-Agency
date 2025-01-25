"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Timer, Bot, Code2, Sparkles } from 'lucide-react';

export function DevelopmentCTA() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="relative">
                    {/* Background Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                        {/* Features Grid */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { icon: Timer, text: "Fast Development" },
                                { icon: Bot, text: "AI-Powered" },
                                { icon: Code2, text: "Clean Code" },
                                { icon: Sparkles, text: "Best Practices" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Main Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Build Something Amazing?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Start your development journey today with our expert team and AI-powered tools
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    className="bg-white text-blue-600 hover:bg-gray-100 gap-2"
                                >
                                    <Rocket className="w-5 h-5" />
                                    Start Your Project
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                >
                                    Schedule a Demo
                                </Button>
                            </div>
                        </motion.div>

                        {/* Bottom Stats */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {[
                                { number: "100+", label: "Projects Delivered" },
                                { number: "24/7", label: "Support Available" },
                                { number: "99%", label: "Client Satisfaction" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-4xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
