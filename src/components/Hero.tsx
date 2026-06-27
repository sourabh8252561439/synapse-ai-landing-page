import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Play, Shield, Cpu, RefreshCw } from 'lucide-react';

interface HeroProps {
  onOpenDemo: () => void;
  onOpenSignup: () => void;
  scrollToFeatures: () => void;
}

export default function Hero({ onOpenDemo, onOpenSignup, scrollToFeatures }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Dynamic Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Radial Gradient Glows (SaaS Modern Background) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      {/* Top Banner Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-lg backdrop-blur-md"
            id="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
            <span>Introducing Synapse 2.0 AI Engines</span>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            id="hero-heading"
          >
            AI Automation for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300">
              Modern Businesses
            </span>
          </motion.h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
            id="hero-subtext"
          >
            Accelerate your scaling. Unify manual workflows, unlock intelligent analytics, and automate mission-critical processes with our highly adaptive AI system.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            id="hero-ctas"
          >
            <button
              onClick={onOpenSignup}
              className="w-full sm:w-auto relative group px-8 py-4 rounded-full bg-white hover:bg-zinc-100 text-black font-bold tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
            >
              <span className="flex items-center justify-center gap-2 text-base font-bold">
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 hover:border-white/20 hover:-translate-y-0.5 backdrop-blur-md shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="h-4 w-4 text-indigo-400 fill-indigo-400" />
              <span>View Live Demo</span>
            </button>
          </motion.div>

          {/* Micro Telemetry Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto pt-6 border-t border-white/5 text-zinc-500 text-xs sm:text-sm"
          >
            <div className="flex items-center justify-center gap-1.5">
              <Shield className="h-4 w-4 text-indigo-400/80" />
              <span>Enterprise Grade</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Cpu className="h-4 w-4 text-cyan-400/80" />
              <span>99.9% AI Accuracy</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <RefreshCw className="h-4 w-4 text-purple-400/80" />
              <span>10x Speed Catalyst</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Slope Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
