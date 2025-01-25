
"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Modern shopping experience with React and Node.js",
            image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&h=600",
            category: "Web Development"
        },
        {
            title: "Healthcare Dashboard",
            description: "Patient management system with real-time analytics",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&h=600",
            category: "UI/UX Design"
        },
        {
            title: "Mobile Banking App",
            description: "Secure and intuitive financial management",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&h=600",
            category: "Mobile App"
        },
        {
            title: "AI Content Platform",
            description: "Content generation and management with AI",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600",
            category: "AI/ML"
        },
        {
            title: "Social Network",
            description: "Community platform with real-time features",
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&h=600",
            category: "Web Development"
        },
        {
            title: "Fitness Tracker",
            description: "Health monitoring with wearable integration",
            image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&h=600",
            category: "Mobile App"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
                    <p className="text-xl text-gray-600">Showcasing our best work across various industries</p>
                </motion.div>

                <div className="relative">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#F97B5C]/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl" />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => {


                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="group relative overflow-hidden">
                                        {/* Project Image */}
                                        <motion.div
                                            className="relative h-64 overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </motion.div>

                                        {/* Project Info */}
                                        <motion.div
                                            className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ y: 20 }}
                                            whileHover={{ y: 0 }}
                                        >
                                            <span className="text-sm font-medium mb-2">{project.category}</span>
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm opacity-90">{project.description}</p>
                                        </motion.div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
