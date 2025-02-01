"use client";


import { DevelopmentCTA } from '@/components/new-sections/development/CTA';
import { DevelopmentHero } from '@/components/new-sections/development/Hero';
import { DevelopmentProcess } from '@/components/new-sections/development/Process';
import { DevelopmentServices } from '@/components/new-sections/development/Services';
import { DevelopmentTools } from '@/components/new-sections/development/Tools';
import { motion } from 'framer-motion';


export default function DevelopmentServicePage() {
    return (
        <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <DevelopmentHero />
            <DevelopmentServices />
            <DevelopmentProcess />
            <DevelopmentTools />
            <DevelopmentCTA />
        </motion.div>
    );
}
