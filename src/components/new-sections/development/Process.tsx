import { motion } from 'framer-motion';
import {
  Code2,
  GitBranch,
  Rocket,
  Bot,
  Zap,
  Terminal,
  Database,
  Globe,
  Server,
  CheckCircle2,
  ArrowRight,
  Timer,
  Users,
  Braces
} from 'lucide-react';

const steps = [
  {
    icon: Terminal,
    title: 'Planning & Architecture',
    description: 'Define architecture and tech stack with AI assistance',
    gradient: 'from-blue-500 via-cyan-500 to-sky-500',
    subIcons: [Bot, Database, Globe],
    features: [
      'System Design',
      'Tech Stack Selection',
      'AI-Powered Planning'
    ]
  },
  {
    icon: Code2,
    title: 'Rapid Development',
    description: 'Fast-paced development with AI pair programming',
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    subIcons: [Braces, GitBranch, Bot],
    features: [
      'AI Code Generation',
      'Real-time Collaboration',
      'Automated Testing'
    ]
  },
  {
    icon: Server,
    title: 'CI/CD Integration',
    description: 'Automated testing and deployment pipeline',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    subIcons: [GitBranch, Globe, Timer],
    features: [
      'Automated Testing',
      'Continuous Integration',
      'Deployment Automation'
    ]
  },
  {
    icon: Rocket,
    title: 'Launch & Scale',
    description: 'Production deployment and performance optimization',
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    subIcons: [Server, Zap, Users],
    features: [
      'Performance Monitoring',
      'Auto-scaling',
      'Security Hardening'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export function DevelopmentProcess() {
  return (
    <section className="py-20 overflow-hidden">
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
            <Rocket className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-medium">AI-Powered Development</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerated development lifecycle powered by AI and automation
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative mb-20 last:mb-0"
              variants={itemVariants}
            >
              <div className="flex items-center gap-8">
                {/* Step Number */}
                <div className="hidden md:block w-24 text-8xl font-bold text-gray-100">
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Process Circle */}
                <div className="relative">
                  <motion.div
                    className={`w-32 h-32 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute inset-0"
                    variants={orbitVariants}
                    animate="animate"
                  >
                    {step.subIcons.map((SubIcon, j) => (
                      <motion.div
                        key={j}
                        className="absolute"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${j * 120}deg) translateY(-48px)`,
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="bg-white p-2 rounded-lg shadow-lg">
                          <SubIcon className="w-4 h-4 text-blue-500" />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, j) => (
                        <motion.div
                          key={j}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * j }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-500" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Next Step Indicator */}
                    {i < steps.length - 1 && (
                      <div className="flex items-center gap-2 text-blue-500 mt-4">
                        <span className="text-sm font-medium">Next Step</span>
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {i < steps.length - 1 && (
                <motion.div
                  className="absolute left-[7.5rem] top-32 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}