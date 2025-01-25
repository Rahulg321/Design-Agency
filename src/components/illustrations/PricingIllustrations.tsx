"use client";
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, rotate: [0, -10, 10, 0] }
};

interface PlanFeatureProps {
  icon: typeof CheckCircle2;
  text: string;
  color: string;
  delay: number;
}

export function PlanFeature({ icon: Icon, text, color, delay }: PlanFeatureProps) {
  return (
    <motion.li
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
    >
      <Icon className={`h-5 w-5 ${color}`} />
      <span>{text}</span>
    </motion.li>
  );
}

interface PlanHeaderProps {
  icon: typeof Star;
  title: string;
  price: string;
  color: string;
  bgColor: string;
  isPopular?: boolean;
}

export function PlanHeader({ icon: Icon, title, price, color, bgColor, isPopular }: PlanHeaderProps) {
  return (
    <div className="relative">
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#F97B5C] text-white px-4 py-1 rounded-full text-sm font-medium"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Most Popular
        </motion.div>
      )}

      <motion.div
        className={`relative ${bgColor} rounded-2xl p-6 mb-6`}
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              `0 0 0 0px ${color}20`,
              `0 0 0 20px ${color}00`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.div
          variants={iconVariants}
          className="mb-4"
        >
          <Icon className={`h-10 w-10 ${color}`} />
        </motion.div>

        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
      </motion.div>
    </div>
  );
}
