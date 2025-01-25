"use client";

import { motion } from 'framer-motion';
import {
    PhoneCall,
    CalendarCheck,
    Users,
    ClipboardList,
    Target,
    Rocket,
    CheckCircle,
    MessageSquare,
    FileSearch,
    Code2,
    Zap
} from 'lucide-react';
import { ProcessStep } from '@/components/illustrations/ProcessIllustrations';

export function HowItWorks() {
    const steps = [
        {
            mainIcon: PhoneCall,
            subIcons: [MessageSquare, CalendarCheck, Users],
            title: 'Discovery Call',
            desc: 'Discuss your project requirements and goals',
            color: 'text-[#F97B5C]',
            bgColor: 'bg-[#F97B5C]/10'
        },
        {
            mainIcon: Target,
            subIcons: [FileSearch, ClipboardList, Rocket],
            title: 'Project Planning',
            desc: 'Create detailed roadmap and milestones',
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10'
        },
        {
            mainIcon: Code2,
            subIcons: [Zap, CheckCircle, Rocket],
            title: 'Execution',
            desc: 'Design, develop, and deliver your solution',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10'
        }
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600">Simple, transparent process from start to finish</p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 relative">
                    {steps.map((step, i) => (
                        <ProcessStep key={i} {...step} index={i} />
                    ))}
                </div>

                {/* Background Decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-[#F97B5C]/5 to-transparent rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-l from-blue-500/5 to-transparent rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
                    />
                </div>
            </div>
        </section>
    );
}
