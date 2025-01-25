"use client";
import { motion } from 'framer-motion';
import { Layout, Code2, Database, Braces, Globe } from 'lucide-react';

export function WebAppIllustration() {
    return (
        <div className="relative w-full h-64">
            {/* Browser Window */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    {/* Browser Bar */}
                    <div className="h-6 bg-gray-100 flex items-center px-2 space-x-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <div className="grid grid-cols-3 gap-2">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="h-3 bg-gray-200 rounded"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute -top-4 -right-4 p-3 bg-blue-500/10 rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Code2 className="w-6 h-6 text-blue-500" />
            </motion.div>

            <motion.div
                className="absolute -bottom-2 -left-2 p-3 bg-[#F97B5C]/10 rounded-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Layout className="w-6 h-6 text-[#F97B5C]" />
            </motion.div>

            {/* Tech Stack */}
            <motion.div
                className="absolute bottom-4 right-4 flex space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Database className="w-4 h-4 text-purple-500" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-green-500" />
                </div>
                <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Braces className="w-4 h-4 text-blue-500" />
                </div>
            </motion.div>
        </div>
    );
}
