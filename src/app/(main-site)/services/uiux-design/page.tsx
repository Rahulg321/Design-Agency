"use client";


import { UIUXCTA } from '@/components/new-sections/uiux/CTA';
import { UIUXHero } from '@/components/new-sections/uiux/Hero';
import { UIUXProcess } from '@/components/new-sections/uiux/Process';
import { UIUXServices } from '@/components/new-sections/uiux/Services';
import UIUXTools from '@/components/new-sections/uiux/Tools';
import { motion } from 'framer-motion';

export default function UIUXServicePage() {
    return (
        <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <UIUXHero />
            <UIUXServices />
            <UIUXProcess />
            <UIUXTools />
            <UIUXCTA />
        </motion.div>
    );
}
