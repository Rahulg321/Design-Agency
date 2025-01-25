import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Layout,
  MousePointer,
  Layers,
  LineChart,
  Users,
  Smartphone,
  PenTool,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Eye,
    title: 'User Research',
    description: 'Deep understanding of user needs and behaviors through comprehensive research',
    features: [
      'User Interviews',
      'Usability Studies',
      'Market Research',
      'Competitor Analysis'
    ],
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Target,
    title: 'User Experience Design',
    description: 'Creating intuitive flows and interactions that delight users',
    features: [
      'User Flow Mapping',
      'Wireframing',
      'Prototyping',
      'Information Architecture'
    ],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Layout,
    title: 'Interface Design',
    description: 'Beautiful, modern interfaces that align with your brand',
    features: [
      'Visual Design',
      'Component Libraries',
      'Design Systems',
      'Brand Integration'
    ],
    gradient: 'from-[#F97B5C] via-orange-500 to-yellow-500',
    image: 'https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: MousePointer,
    title: 'Interaction Design',
    description: 'Engaging animations and micro-interactions',
    features: [
      'Motion Design',
      'Micro-interactions',
      'State Transitions',
      'Gesture Controls'
    ],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Layers,
    title: 'Design Systems',
    description: 'Scalable and consistent design language',
    features: [
      'Component Libraries',
      'Style Guides',
      'Documentation',
      'Design Tokens'
    ],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: LineChart,
    title: 'Usability Testing',
    description: 'Validation and iteration based on user feedback',
    features: [
      'A/B Testing',
      'User Feedback',
      'Analytics Integration',
      'Heatmap Analysis'
    ],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80'
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

export function UIUXServices() {
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
            <Zap className="w-5 h-5 text-[#F97B5C]" />
            <span className="text-sm font-medium">Expert Design Services</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Design Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive design solutions powered by the perfect blend of human creativity
            and AI-driven insights for exceptional digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid lg:grid-cols-3 gap-8 perspective-1000"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-90 blur-xl group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                  </div>
                  <div className="relative p-6">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} p-3 rounded-xl text-white shadow-lg`}>
                      <service.icon className="w-6 h-6" />
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, j) => (
                      <motion.div
                        key={j}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * j }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#F97B5C]" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#F97B5C] to-purple-600 hover:opacity-90 text-white"
          >
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}