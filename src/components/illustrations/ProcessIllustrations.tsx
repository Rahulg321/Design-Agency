"use client";
import { motion } from 'framer-motion';
import {
  PhoneCall,
  CalendarCheck,
  Users,
  ClipboardList,
  Target,
  Rocket,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  FileSearch,
  Code2,
  Zap
} from 'lucide-react';

const iconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, rotate: [0, -10, 10, 0] }
};

const pathVariants = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 }
};

interface ProcessStepProps {
  mainIcon: typeof PhoneCall;
  subIcons: typeof PhoneCall[];
  title: string;
  desc: string;
  color: string;
  bgColor: string;
  index: number;
}

export function ProcessStep({ mainIcon: MainIcon, subIcons, title, desc, color, bgColor, index }: ProcessStepProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Main Process Circle */}
      <motion.div
        className={`relative z-10 w-32 h-32 ${bgColor} rounded-full mx-auto mb-6 flex items-center justify-center`}
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              `0 0 0 0px ${color}20`,
              `0 0 0 20px ${color}00`
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div variants={iconVariants}>
          <MainIcon className={`w-12 h-12 ${color}`} />
        </motion.div>
      </motion.div>

      {/* Orbiting Sub-Icons */}
      {subIcons.map((SubIcon, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            transform: `rotate(${i * (360 / subIcons.length)}deg) translate(70px) rotate(-${i * (360 / subIcons.length)}deg)`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + (i * 0.1) }}
        >
          <motion.div
            className="bg-white p-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            <SubIcon className={`w-4 h-4 ${color}`} />
          </motion.div>
        </motion.div>
      ))}

      {/* Step Number */}
      <div className={`text-6xl font-bold ${color}20 absolute -top-6 left-0`}>0{index + 1}</div>

      {/* Content */}
      <div className="text-center pt-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>

      {/* Connector Line (for non-last items) */}
      {index < 2 && (
        <div className="hidden md:block absolute top-16 left-[calc(100%_-_1rem)] w-full">
          <motion.div
            className="relative h-0.5 bg-gray-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute right-0 -top-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className={`w-5 h-5 ${color}`} />
            </motion.div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
