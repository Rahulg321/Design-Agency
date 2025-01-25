import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Cloud,
  Bot,
  Globe,
  Server,
  Braces,
  Terminal,
  GitBranch,
  Cpu,
  Layers,
  Sparkles,
  Laptop,
  Smartphone,
  FileJson,
  LayoutGrid,
  Wind,
  Boxes,
  Workflow,
  Infinity,
  Hammer,
  Wrench,
  Cog,
  Repeat,
  Rocket,
  Brain
} from 'lucide-react';

const tools = [
  {
    category: 'Frontend',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'React', icon: Infinity, description: 'UI Library' },
      { name: 'Next.js', icon: Rocket, description: 'React Framework' },
      { name: 'TypeScript', icon: FileJson, description: 'Type Safety' },
      { name: 'Tailwind', icon: Wind, description: 'Styling' }
    ]
  },
  {
    category: 'Backend',
    icon: Database,
    gradient: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'Node.js', icon: Workflow, description: 'Runtime' },
      { name: 'Express', icon: Globe, description: 'Framework' },
      { name: 'PostgreSQL', icon: Database, description: 'Database' },
      { name: 'Redis', icon: Boxes, description: 'Caching' }
    ]
  },
  {
    category: 'DevOps',
    icon: Server,
    gradient: 'from-purple-500 to-violet-500',
    tools: [
      { name: 'Docker', icon: Boxes, description: 'Containers' },
      { name: 'GitHub', icon: GitBranch, description: 'Version Control' },
      { name: 'Jenkins', icon: Hammer, description: 'CI/CD' },
      { name: 'Kubernetes', icon: Cog, description: 'Orchestration' }
    ]
  },
  {
    category: 'AI Tools',
    icon: Bot,
    gradient: 'from-orange-500 to-red-500',
    tools: [
      { name: 'ChatGPT', icon: Brain, description: 'Code Assistant' },
      { name: 'GitHub Copilot', icon: Bot, description: 'AI Pair Programming' },
      { name: 'TensorFlow', icon: Workflow, description: 'ML Framework' },
      { name: 'PyTorch', icon: Repeat, description: 'Deep Learning' }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const floatingIconsVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function DevelopmentTools() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md mb-4">
            <Terminal className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">Development Stack</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and tools for building robust applications
          </p>
        </motion.div>

        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[GitBranch, Cpu, Layers, Laptop, Smartphone].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              variants={floatingIconsVariants}
              animate="animate"
              custom={i}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((category, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateX: 10,
                rotateY: 10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl opacity-80 blur-xl group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Card Content */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Category Icon */}
                <motion.div
                  className="relative w-16 h-16 mx-auto mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-gray-800 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </motion.div>

                {/* Category Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                </div>

                {/* Tools List */}
                <div className="space-y-3">
                  {category.tools.map((tool, j) => (
                    <motion.div
                      key={j}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * j }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <tool.icon className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{tool.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{tool.description}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}