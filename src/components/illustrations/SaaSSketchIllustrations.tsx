"use client";
import { motion } from 'framer-motion';
import { PenTool, Layout, Code2, Database, Figma, Brackets, Layers, Cpu } from 'lucide-react';

const drawVariants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1 }
};

export function DesignSketch() {
  return (
    <motion.div
      className="absolute bottom-8 left-8 w-48 h-48"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        {/* Paper Background */}
        <motion.div
          className="absolute inset-0 bg-white/90 rounded-xl shadow-lg transform -rotate-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Grid Pattern */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-2 p-2 opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="bg-gray-400 rounded-sm" />
            ))}
          </div>
        </motion.div>

        {/* Design Elements */}
        <div className="absolute inset-0 p-4">
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Figma className="w-6 h-6 text-[#F97B5C]" />
              <PenTool className="w-6 h-6 text-purple-500" />
            </motion.div>

            <motion.div
              className="space-y-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="h-2 w-3/4 bg-gray-300 rounded" />
              <div className="h-2 w-1/2 bg-gray-300 rounded" />
            </motion.div>

            <motion.div
              className="flex gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Layout className="w-6 h-6 text-blue-500" />
              <Layers className="w-6 h-6 text-[#F97B5C]" />
            </motion.div>
          </div>
        </div>

        {/* Pencil Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M10,20 C30,10 50,30 70,20"
            stroke="#F97B5C"
            strokeWidth="2"
            fill="none"
            variants={drawVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.path
            d="M20,40 C40,30 60,50 80,40"
            stroke="#F97B5C"
            strokeWidth="2"
            fill="none"
            variants={drawVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, delay: 0.8 }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function DevelopmentSketch() {
  return (
    <motion.div
      className="absolute bottom-8 right-8 w-48 h-48"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        {/* Code Editor Background */}
        <motion.div
          className="absolute inset-0 bg-gray-900/90 rounded-xl shadow-lg transform rotate-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Code Lines */}
          <div className="absolute inset-0 p-4">
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 bg-white/10 rounded"
                  style={{ width: `${Math.random() * 50 + 50}%` }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Development Icons */}
        <div className="absolute inset-0 p-4">
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-center gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Code2 className="w-6 h-6 text-blue-400" />
              <Brackets className="w-6 h-6 text-green-400" />
            </motion.div>

            <motion.div
              className="flex gap-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Database className="w-6 h-6 text-purple-400" />
              <Cpu className="w-6 h-6 text-[#F97B5C]" />
            </motion.div>
          </div>
        </div>

        {/* Animated Cursor */}
        <motion.div
          className="absolute w-2 h-4 bg-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ top: '40%', left: '30%' }}
        />
      </div>
    </motion.div>
  );
}
