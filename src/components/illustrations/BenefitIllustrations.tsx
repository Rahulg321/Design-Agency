"use client";


import { motion } from 'framer-motion';
import { Zap, Users, Star, Briefcase, Sparkles, Clock, Shield, Rocket } from 'lucide-react';

export function FastDeliveryIllustration() {
    return (
        <div className="relative w-full h-40">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Main Circle */}
                <motion.div
                    className="w-24 h-24 bg-[#F97B5C]/10 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Zap className="w-10 h-10 text-[#F97B5C]" />
                </motion.div>

                {/* Orbiting Elements */}
                <motion.div
                    className="absolute w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white shadow-lg p-2 rounded-full">
                        <Clock className="w-4 h-4 text-[#F97B5C]" />
                    </motion.div>
                    <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white shadow-lg p-2 rounded-full">
                        <Rocket className="w-4 h-4 text-[#F97B5C]" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export function DedicatedTeamIllustration() {
    return (
        <div className="relative w-full h-40">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Team Circle */}
                <div className="relative">
                    <motion.div
                        className="w-24 h-24 bg-purple-500/10 rounded-full flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Users className="w-10 h-10 text-purple-500" />
                    </motion.div>

                    {/* Floating Team Members */}
                    {[0, 72, 144, 216, 288].map((degree, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${degree}deg) translate(3rem) rotate(-${degree}deg)`,
                            }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                        >
                            <Users className="w-4 h-4 text-purple-500" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

export function QualityFirstIllustration() {
    return (
        <div className="relative w-full h-40">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Central Star */}
                <motion.div
                    className="w-24 h-24 bg-yellow-500/10 rounded-full flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <Star className="w-10 h-10 text-yellow-500" />
                </motion.div>

                {/* Orbiting Sparkles */}
                {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${degree}deg) translate(3rem)`,
                        }}
                        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                        transition={{
                            scale: { duration: 2, delay: index * 0.2, repeat: Infinity },
                            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                        }}
                    >
                        <div className="w-6 h-6 bg-white shadow-lg rounded-full flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-yellow-500" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export function FullServiceIllustration() {
    return (
        <div className="relative w-full h-40">
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Central Briefcase */}
                <motion.div
                    className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Briefcase className="w-10 h-10 text-blue-500" />
                </motion.div>

                {/* Service Icons Circle */}
                <motion.div
                    className="absolute w-32 h-32"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    {[Shield, Star, Rocket, Users].map((Icon, index) => (
                        <motion.div
                            key={index}
                            className="absolute bg-white shadow-lg p-2 rounded-full"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${index * 90}deg) translate(2.5rem) rotate(-${index * 90}deg)`,
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon className="w-4 h-4 text-blue-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
