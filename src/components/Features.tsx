import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, BarChart3, Layers, Cloud, LayoutDashboard, Shield, 
  ArrowRight, Sparkles 
} from 'lucide-react';

interface FeatureCardProps {
  key?: any;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
}

function FeatureCard({ title, description, icon, color, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-indigo-500/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Icon container */}
        <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-300 group-hover:scale-110 ${color}`}>
          {icon}
        </div>

        <h3 className="font-display text-lg md:text-xl font-bold text-gray-100 mb-3 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 gap-1 select-none">
        <span>Learn how it works</span>
        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const featuresList = [
    {
      title: 'AI Automation',
      description: 'Streamline execution using responsive AI nodes that learn from manual actions to handle incoming requests in seconds.',
      icon: <Cpu className="h-6 w-6 text-indigo-400" />,
      color: 'bg-indigo-500/10 border-indigo-500/20',
      delay: 0.1,
    },
    {
      title: 'Smart Analytics',
      description: 'Acquire granular clarity into operational bottlenecks, execution overheads, and automated ROI with self-explaining visualizations.',
      icon: <BarChart3 className="h-6 w-6 text-cyan-400" />,
      color: 'bg-cyan-500/10 border-cyan-500/20',
      delay: 0.2,
    },
    {
      title: 'Workflow Builder',
      description: 'Drag, drop, and construct highly visual pipeline sequences connecting databases, custom services, and standard APIs.',
      icon: <Layers className="h-6 w-6 text-purple-400" />,
      color: 'bg-purple-500/10 border-purple-500/20',
      delay: 0.3,
    },
    {
      title: 'Cloud Integration',
      description: 'Instantly sync and stream inputs from Salesforce, HubSpot, GitHub, Notion, AWS, and modern key SaaS connectors.',
      icon: <Cloud className="h-6 w-6 text-indigo-400" />,
      color: 'bg-indigo-500/10 border-indigo-500/20',
      delay: 0.4,
    },
    {
      title: 'Real-time Dashboard',
      description: 'Track ongoing workflow executions, model metrics, system speeds, and billing metrics on a beautiful unified grid.',
      icon: <LayoutDashboard className="h-6 w-6 text-cyan-400" />,
      color: 'bg-cyan-500/10 border-cyan-500/20',
      delay: 0.5,
    },
    {
      title: 'Security & Encryption',
      description: 'Enterprise security standards by default. Fully SOC-2 certified with End-to-End client encryption and isolated sandbox servers.',
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      color: 'bg-purple-500/10 border-purple-500/20',
      delay: 0.6,
    },
  ];

  return (
    <section id="features" className="py-24 bg-zinc-950 relative">
      {/* Background Decor */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-3 backdrop-blur-md">
            Operational Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Engineered for Modern Efficiency
          </h2>
          <p className="text-zinc-400 font-sans text-base sm:text-lg">
            Avoid messy brittle scripts. Connect your stack and execute workflows safely in minutes with high-fidelity system modules.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feat, idx) => (
            <FeatureCard
              key={idx}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
              color={feat.color}
              delay={feat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
