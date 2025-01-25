"use client";
import { motion } from 'framer-motion';
import { Cloud, Database, Users, Zap, Lock } from 'lucide-react';

export function SaaSIllustration() {
  return (
    <div className="relative w-full h-64">
      {/* Central Cloud Platform */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <motion.div
            className="w-32 h-32 bg-blue-500/10 rounded-full flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Cloud className="w-16 h-16 text-blue-500" />
          </motion.div>

          {/* Connecting Lines */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent"
              style={{
                top: '50%',
                left: '50%',
                transform: `rotate(${i * 60}deg)`,
                transformOrigin: '0 50%'
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-4 right-4 p-3 bg-purple-500/10 rounded-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Database className="w-6 h-6 text-purple-500" />
      </motion.div>

      <motion.div
        className="absolute bottom-4 left-4 p-3 bg-[#F97B5C]/10 rounded-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <Users className="w-6 h-6 text-[#F97B5C]" />
      </motion.div>

      {/* Additional Elements */}
      <motion.div
        className="absolute top-8 left-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-5 h-5 text-yellow-500" />
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Lock className="w-5 h-5 text-green-500" />
      </motion.div>
    </div>
  );
}
