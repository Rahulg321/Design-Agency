"use client";

import { motion } from 'framer-motion';
import {
    Palette,
    Code2,
    Database,
    Box
} from 'lucide-react';
import {
    DesignToolsGrid,
    FrontendToolsGrid,
    BackendToolsGrid,
    DevOpsToolsGrid
} from '@/components/illustrations/ToolIllustrations';

export function Tools() {
    const categories = [
        {
            title: 'Design',
            description: 'Industry-standard design tools',
            icon: Palette,
            color: 'text-purple-500',
            bgColor: 'bg-purple-500/10',
            grid: DesignToolsGrid
        },
        {
            title: 'Frontend',
            description: 'Modern web technologies',
            icon: Code2,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10',
            grid: FrontendToolsGrid
        },
        {
            title: 'Backend',
            description: 'Robust server solutions',
            icon: Database,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10',
            grid: BackendToolsGrid
        },
        {
            title: 'DevOps',
            description: 'Development operations',
            icon: Box,
            color: 'text-orange-500',
            bgColor: 'bg-orange-500/10',
            grid: DevOpsToolsGrid
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Tools We Use</h2>
                    <p className="text-xl text-gray-600">Cutting-edge technologies for exceptional results</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, i) => (
                        <motion.div
                            key={i}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className={`p-3 ${category.bgColor} rounded-xl`}>
                                        <category.icon className={`h-6 w-6 ${category.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">{category.title}</h3>
                                        <p className="text-sm text-gray-600">{category.description}</p>
                                    </div>
                                </div>
                                <category.grid />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
