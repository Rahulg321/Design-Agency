"use client"


import { motion } from 'framer-motion';
import { Zap, Users, Star, Shield, Rocket, Crown, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PlanFeature, PlanHeader } from '@/components/illustrations/PricingIllustrations';

export function Pricing() {
    const plans = [
        {
            name: 'Starter',
            icon: Zap,
            price: '2,999',
            color: 'text-[#F97B5C]',
            bgColor: 'bg-[#F97B5C]/10',
            features: [
                { icon: CheckCircle2, text: '1 design request' },
                { icon: CheckCircle2, text: '2 revisions' },
                { icon: CheckCircle2, text: '5 day delivery' },
                { icon: CheckCircle2, text: 'Source files' }
            ]
        },
        {
            name: 'Pro',
            icon: Crown,
            price: '4,999',
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            isPopular: true,
            features: [
                { icon: CheckCircle2, text: '3 design requests' },
                { icon: CheckCircle2, text: 'Unlimited revisions' },
                { icon: CheckCircle2, text: '3 day delivery' },
                { icon: CheckCircle2, text: 'Source files' },
                { icon: CheckCircle2, text: 'Priority support' }
            ]
        },
        {
            name: 'Enterprise',
            icon: Rocket,
            price: 'Custom',
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            features: [
                { icon: CheckCircle2, text: 'Unlimited requests' },
                { icon: CheckCircle2, text: 'Dedicated team' },
                { icon: CheckCircle2, text: 'Custom delivery' },
                { icon: CheckCircle2, text: 'All assets included' },
                { icon: CheckCircle2, text: '24/7 support' }
            ]
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <motion.div
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#F97B5C]/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-transparent rounded-full blur-3xl" />
            </motion.div>

            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
                    <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`relative p-6 ${plan.isPopular ? 'border-[#F97B5C] border-2' : ''}`}>
                                <PlanHeader
                                    icon={plan.icon}
                                    title={plan.name}
                                    price={plan.price}
                                    color={plan.color}
                                    bgColor={plan.bgColor}
                                    isPopular={plan.isPopular}
                                />

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <PlanFeature
                                            key={j}
                                            icon={feature.icon}
                                            text={feature.text}
                                            color={plan.color}
                                            delay={0.2 + (j * 0.1)}
                                        />
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${plan.isPopular ? 'bg-[#F97B5C] hover:bg-[#e66a4d]' : 'bg-gray-900 hover:bg-gray-800'}`}
                                >
                                    Get Started
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
