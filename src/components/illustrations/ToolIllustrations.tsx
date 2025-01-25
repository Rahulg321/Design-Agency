"use client";
import { motion } from 'framer-motion';
import {
  Figma,
  Palette,
  PenTool,
  Layers,
  Code2,
  Database,
  Globe,
  Server,
  Box,
  Cpu,
  Smartphone,
  Monitor,
  Layout,
  FileJson,
  Brackets,
  Cloud
} from 'lucide-react';

const toolIconVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, y: -5 }
};

interface ToolCardProps {
  icon: typeof Figma;
  label: string;
  color: string;
  bgColor: string;
}

function ToolCard({ icon: Icon, label, color, bgColor }: ToolCardProps) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-4 ${bgColor} rounded-xl shadow-lg`}
      variants={toolIconVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      <Icon className={`w-8 h-8 ${color} mb-2`} />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </motion.div>
  );
}

export function DesignToolsGrid() {
  const tools = [
    { icon: Figma, label: 'Figma', color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { icon: Palette, label: 'Adobe XD', color: 'text-pink-500', bgColor: 'bg-pink-50' },
    { icon: PenTool, label: 'Illustrator', color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { icon: Layers, label: 'Photoshop', color: 'text-blue-500', bgColor: 'bg-blue-50' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
}

export function FrontendToolsGrid() {
  const tools = [
    { icon: Code2, label: 'React', color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
    { icon: Layout, label: 'Tailwind', color: 'text-sky-500', bgColor: 'bg-sky-50' },
    { icon: FileJson, label: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Brackets, label: 'Next.js', color: 'text-gray-800', bgColor: 'bg-gray-50' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
}

export function BackendToolsGrid() {
  const tools = [
    { icon: Server, label: 'Node.js', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Database, label: 'PostgreSQL', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Cloud, label: 'AWS', color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { icon: Globe, label: 'REST APIs', color: 'text-indigo-500', bgColor: 'bg-indigo-50' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
}

export function DevOpsToolsGrid() {
  const tools = [
    { icon: Box, label: 'Docker', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Cpu, label: 'CI/CD', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Smartphone, label: 'Mobile', color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { icon: Monitor, label: 'Testing', color: 'text-red-500', bgColor: 'bg-red-50' }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={index} {...tool} />
      ))}
    </div>
  );
}
