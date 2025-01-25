"use client"


import { motion } from 'framer-motion';
import {
    Figma,
    PenTool,
    Palette,
    Layout,
    Layers,
    Sparkles,
    Wand2,
    Shapes,
    Pencil,
    MousePointer2,
    Laptop,
    Smartphone
} from 'lucide-react';

const tools = [
    {
        icon: Figma,
        name: 'Figma',
        description: 'Collaborative interface design',
        gradient: 'from-purple-500 to-pink-500',
        features: ['Components', 'Auto-layout', 'Prototyping']
    },
    {
        icon: PenTool,
        name: 'Adobe XD',
        description: 'Powerful prototyping tool',
        gradient: 'from-[#F97B5C] to-red-500',
        features: ['Vectors', 'Responsive', 'Plugins']
    },
    {
        icon: Palette,
        name: 'Sketch',
        description: 'Professional vector design',
        gradient: 'from-blue-500 to-cyan-500',
        features: ['Symbols', 'Libraries', 'Export']
    },
    {
        icon: Layout,
        name: 'InVision',
        description: 'Design collaboration platform',
        gradient: 'from-green-500 to-emerald-500',
        features: ['Feedback', 'Handoff', 'Specs']
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -15 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const floatingIconsVariants = {
    animate: {
        y: [-5, 5, -5],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export default function UIUXTools() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
                        <Wand2 className="w-5 h-5 text-[#F97B5C]" />
                        <span className="text-sm font-medium">Professional Tools</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Tools We Master</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Industry-standard design tools for creating exceptional digital experiences
                    </p>
                </motion.div>

                {/* Floating Background Icons */}
                <div className="absolute inset-0 pointer-events-none">
                    {[Shapes, Pencil, MousePointer2, Laptop, Smartphone].map((Icon, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: 0.1
                            }}
                            variants={floatingIconsVariants}
                            animate="animate"
                            custom={i}
                        >
                            <Icon className="w-8 h-8" />
                        </motion.div>
                    ))}
                </div>

                {/* Tools Grid */}
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {tools.map((tool, i) => (
                        <motion.div
                            key={i}
                            className="group relative"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateX: 10,
                                rotateY: 10,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} rounded-2xl opacity-80 blur-xl group-hover:opacity-100 transition-opacity duration-300`} />

                            {/* Card Content */}
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                {/* Icon Container */}
                                <motion.div
                                    className="relative w-16 h-16 mx-auto mb-4"
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <tool.icon className="w-8 h-8 text-gray-800 group-hover:text-[#F97B5C] transition-colors duration-300" />
                                    </div>
                                </motion.div>

                                {/* Tool Info */}
                                <div className="text-center mb-4">
                                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                                    <p className="text-gray-600 text-sm">{tool.description}</p>
                                </div>

                                {/* Features */}
                                <div className="space-y-2">
                                    {tool.features.map((feature, j) => (
                                        <motion.div
                                            key={j}
                                            className="flex items-center justify-center gap-2"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * j }}
                                            viewport={{ once: true }}
                                        >
                                            <Sparkles className="w-4 h-4 text-[#F97B5C]" />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
