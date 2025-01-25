"use client";

import { Zap, Users, Star, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    FastDeliveryIllustration,
    DedicatedTeamIllustration,
    QualityFirstIllustration,
    FullServiceIllustration
} from '@/components/illustrations/BenefitIllustrations';

export function Benefits() {
    const benefits = [
        {
            icon: Zap,
            title: 'Fast Delivery',
            desc: 'Quick turnaround times without compromising quality',
            illustration: FastDeliveryIllustration,
            color: 'text-[#F97B5C]',
            bgColor: 'bg-[#F97B5C]/10'
        },
        {
            icon: Users,
            title: 'Dedicated Team',
            desc: 'Work with experienced designers and developers',
            illustration: DedicatedTeamIllustration,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10'
        },
        {
            icon: Star,
            title: 'Quality First',
            desc: 'Premium design and development standards',
            illustration: QualityFirstIllustration,
            color: 'text-yellow-500',
            bgColor: 'bg-yellow-500/10'
        },
        {
            icon: Briefcase,
            title: 'Full Service',
            desc: 'End-to-end solution for your digital needs',
            illustration: FullServiceIllustration,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10'
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-xl text-gray-600">Experience the advantages of working with our expert team</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-6">
                                <div className={`mb-4 inline-flex p-3 ${item.bgColor} rounded-xl`}>
                                    <item.icon className={`h-6 w-6 ${item.color}`} />
                                </div>
                                <item.illustration />
                                <div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
