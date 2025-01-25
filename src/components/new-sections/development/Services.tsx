"use client";


import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Cloud,
    Bot,
    Globe,
    Server,
    Zap,
    CheckCircle2,
    ArrowRight,
    Layout,
    Braces,
    FileJson,
    Terminal,
    GitBranch,
    Cpu,
    Lock,
    Settings,
    Layers,
    Network,
    MonitorSmartphone,
    Brain,
    Workflow,
    Boxes
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Illustration Components
function WebAppIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-blue-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Layout className="w-6 h-6 text-blue-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Globe className="w-6 h-6 text-blue-500" />
            </motion.div>
        </div>
    );
}

function BackendIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <Database className="w-12 h-12 text-green-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Server className="w-6 h-6 text-green-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Network className="w-6 h-6 text-green-500" />
            </motion.div>
        </div>
    );
}

function CloudIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <Cloud className="w-12 h-12 text-purple-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Settings className="w-6 h-6 text-purple-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Lock className="w-6 h-6 text-purple-500" />
            </motion.div>
        </div>
    );
}

function AIIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <Brain className="w-12 h-12 text-orange-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Bot className="w-6 h-6 text-orange-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Cpu className="w-6 h-6 text-orange-500" />
            </motion.div>
        </div>
    );
}

function MobileIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <MonitorSmartphone className="w-12 h-12 text-pink-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Layout className="w-6 h-6 text-pink-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Layers className="w-6 h-6 text-pink-500" />
            </motion.div>
        </div>
    );
}

function DevOpsIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
                className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                    <Workflow className="w-12 h-12 text-cyan-500" />
                </div>
            </motion.div>
            <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <GitBranch className="w-6 h-6 text-cyan-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Boxes className="w-6 h-6 text-cyan-500" />
            </motion.div>
        </div>
    );
}

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Modern web applications built with cutting-edge technologies',
        features: [
            'React & Next.js',
            'TypeScript',
            'Responsive Design',
            'Performance Optimization'
        ],
        gradient: 'from-blue-500 to-cyan-500',
        illustration: WebAppIllustration
    },
    {
        icon: Database,
        title: 'Backend Development',
        description: 'Scalable and secure backend solutions',
        features: [
            'Node.js & Express',
            'Database Design',
            'API Development',
            'Authentication & Security'
        ],
        gradient: 'from-green-500 to-emerald-500',
        illustration: BackendIllustration
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Cloud-native applications and infrastructure',
        features: [
            'AWS Services',
            'Serverless Architecture',
            'Cloud Migration',
            'Infrastructure as Code'
        ],
        gradient: 'from-purple-500 to-violet-500',
        illustration: CloudIllustration
    },
    {
        icon: Brain,
        title: 'AI Integration',
        description: 'Intelligent features powered by AI',
        features: [
            'Machine Learning',
            'Natural Language Processing',
            'Computer Vision',
            'AI-Powered Analytics'
        ],
        gradient: 'from-orange-500 to-red-500',
        illustration: AIIllustration
    },
    {
        icon: MonitorSmartphone,
        title: 'Mobile Development',
        description: 'Cross-platform mobile applications',
        features: [
            'React Native',
            'Native Features',
            'App Store Deployment',
            'Mobile UI/UX'
        ],
        gradient: 'from-pink-500 to-rose-500',
        illustration: MobileIllustration
    },
    {
        icon: Workflow,
        title: 'DevOps Services',
        description: 'Streamlined development operations',
        features: [
            'CI/CD Pipelines',
            'Container Orchestration',
            'Monitoring & Logging',
            'Infrastructure Management'
        ],
        gradient: 'from-cyan-500 to-teal-500',
        illustration: DevOpsIllustration
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

export function DevelopmentServices() {
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
                        <Zap className="w-5 h-5 text-blue-500" />
                        <span className="text-sm font-medium">Development Services</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive development solutions powered by cutting-edge technologies and AI-driven tools
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            className="group relative"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                rotateX: 5,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-90 blur-xl group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                {/* Service Illustration */}
                                <div className="relative h-48">
                                    <service.illustration />
                                </div>

                                {/* Service Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient}`}>
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, j) => (
                                            <motion.div
                                                key={j}
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 * j }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                                <span className="text-gray-700">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="p-6 pt-0">
                                    <Button
                                        className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:opacity-90 text-white group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white"
                    >
                        View All Services
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
