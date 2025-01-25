import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Code2,
  Cpu,
  Sparkles,
  Zap,
  Bot,
  Braces,
  Database,
  Globe,
  Cloud,
  Timer,
  Rocket,
  GitBranch,
  Terminal,
  Server
} from 'lucide-react';

export function DevelopmentHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 left-10 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gradient-to-l from-purple-500/20 to-blue-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
              <Timer className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">Lightning Fast Development</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Full-Stack Development
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500"> Powered by AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Accelerate your development process with our AI-enhanced full-stack solutions. Get your product to market faster without compromising on quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90 text-white">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                View Development Process
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Interactive Development Visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Development Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Circle - Tech Stack */}
                <motion.div
                  className="relative w-[320px] h-[320px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  {[
                    { Icon: Code2, label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
                    { Icon: Database, label: 'Backend', color: 'from-green-500 to-emerald-500' },
                    { Icon: Cloud, label: 'Cloud', color: 'from-purple-500 to-pink-500' },
                    { Icon: Bot, label: 'AI/ML', color: 'from-orange-500 to-red-500' },
                    { Icon: Globe, label: 'APIs', color: 'from-indigo-500 to-violet-500' },
                    { Icon: Server, label: 'DevOps', color: 'from-teal-500 to-green-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${index * 60}deg) translateY(-140px)`,
                      }}
                    >
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} p-3 rounded-xl shadow-lg text-white flex items-center gap-2`}
                        animate={{ rotate: [-index * 60, (-index * 60) - 360] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      >
                        <item.Icon className="w-4 h-4" />
                        <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Middle Circle - Development Tools */}
                <motion.div
                  className="absolute w-[220px] h-[220px]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                >
                  {[Terminal, GitBranch, Braces, Cpu].map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${index * 90}deg) translateY(-90px)`,
                      }}
                    >
                      <motion.div
                        className="bg-white p-2 rounded-lg shadow-lg"
                        animate={{ rotate: [-index * 90, (-index * 90) - 360] }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="w-5 h-5 text-blue-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Center - AI Core */}
                <motion.div
                  className="absolute w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity }
                  }}
                >
                  <motion.div
                    className="w-20 h-20 bg-white rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-10 h-10 text-blue-500" />
                  </motion.div>
                </motion.div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="140"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="90"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}