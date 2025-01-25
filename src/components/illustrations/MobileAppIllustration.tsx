
"use client";
import { motion } from 'framer-motion';
import { Smartphone, AppWindow, Wifi, Layers, Settings } from 'lucide-react';

export function MobileAppIllustration() {
    return (
        <div className="relative w-full h-64">
            {/* Phone Frame */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotateY: -30, scale: 0.8, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative w-36 h-64 bg-gray-900 rounded-[2rem] p-1">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full" />

                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[1.85rem] overflow-hidden">
                        {/* App Interface */}
                        <div className="p-4 space-y-3">
                            <motion.div
                                className="w-12 h-12 bg-[#F97B5C]/10 rounded-xl mx-auto"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="w-full h-full flex items-center justify-center">
                                    <AppWindow className="w-6 h-6 text-[#F97B5C]" />
                                </div>
                            </motion.div>

                            {/* UI Elements */}
                            {Array.from({ length: 3 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="h-2 bg-gray-200 rounded"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                className="absolute top-4 right-4 p-3 bg-green-500/10 rounded-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <Wifi className="w-6 h-6 text-green-500" />
            </motion.div>

            <motion.div
                className="absolute bottom-4 left-4 p-3 bg-purple-500/10 rounded-lg"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
                <Layers className="w-6 h-6 text-purple-500" />
            </motion.div>

            {/* Settings Gear */}
            <motion.div
                className="absolute -bottom-2 right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
                <Settings className="w-5 h-5 text-gray-600" />
            </motion.div>
        </div>
    );
}
