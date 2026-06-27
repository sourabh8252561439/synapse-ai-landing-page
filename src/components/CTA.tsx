import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenSignup: () => void;
}

export default function CTA({ onOpenSignup }: CTAProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    // Simulate successful subscription
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-b border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] rounded-full bg-indigo-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative backdrop-blur-md">
          
          {/* Subtle top border illumination */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-6 backdrop-blur-md">
            Get Started Instantly
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Start Building with AI Today
          </h2>
          
          <p className="text-zinc-400 font-sans text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of modern engineering teams. Provision sandbox pipeline templates, trigger custom tasks, and see rapid efficiency growth within minutes.
          </p>

          <div className="max-w-md mx-auto">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 bg-zinc-950/80 p-2 rounded-xl border border-white/10 focus-within:border-indigo-500/50 transition-all shadow-lg"
                  id="cta-signup-form"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-sm font-sans text-gray-200 placeholder-zinc-500 outline-none focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-zinc-100 text-black font-bold rounded-lg text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 flex-shrink-0"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-indigo-500/15 border border-indigo-500/30 rounded-xl p-5 flex items-center justify-center gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="font-bold text-indigo-300 text-sm">Perfect! Check your inbox</h4>
                    <p className="text-xs text-indigo-400/80 font-sans mt-0.5">
                      We have dispatched a temporary sandbox configuration to {email}.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-zinc-500 text-xs font-sans mt-4">
              No credit card required. Includes 14-day premium access trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
