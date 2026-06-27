import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';

interface TestimonialCardProps {
  key?: any;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  avatarLetter: string;
  avatarBg: string;
  delay: number;
}

function TestimonialCard({ quote, name, role, company, rating, avatarLetter, avatarBg, delay }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
    >
      <div>
        {/* Rating Stars */}
        <div className="flex items-center space-x-1 mb-5">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4.5 w-4.5 text-amber-400 fill-amber-400" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed mb-6 italic">
          "{quote}"
        </p>
      </div>

      {/* User profile */}
      <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-white text-sm select-none ${avatarBg}`}>
          {avatarLetter}
        </div>
        <div>
          <h4 className="font-semibold text-gray-200 text-sm font-sans">{name}</h4>
          <p className="text-xs text-zinc-400">
            {role} at <span className="text-indigo-400 font-medium">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Synapse transformed how we route user feedback. What used to take our support engineers hours of manual sorting now runs automatically in seconds with perfect context tagging.",
      name: "Marcus Vance",
      role: "VP of Engineering",
      company: "LinearFlow",
      rating: 5,
      avatarLetter: "M",
      avatarBg: "bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
      delay: 0.1,
    },
    {
      quote: "The interactive pipeline visualization let our marketing team construct custom HubSpot and Slack syncing without asking for engineering resource. Highly recommend this tool.",
      name: "Sophia Martinez",
      role: "Director of Operations",
      company: "AuraLabs",
      rating: 5,
      avatarLetter: "S",
      avatarBg: "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
      delay: 0.2,
    },
    {
      quote: "Security was our primary barrier when adopting AI tools. Synapse's fully isolated sandbox architecture and clean end-to-end encryption made compliance approval incredibly fast.",
      name: "David Chen",
      role: "Chief Information Security Officer",
      company: "VeloSec",
      rating: 5,
      avatarLetter: "D",
      avatarBg: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
      delay: 0.3,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative">
      {/* Background Ornaments */}
      <div className="absolute top-[30%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold text-indigo-400 tracking-wider uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 inline-block mb-3 backdrop-blur-md">
            Trusted Worldwide
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Validated by High-Growth Teams
          </h2>
          <p className="text-zinc-400 font-sans text-base sm:text-lg">
            Hear from engineering leaders, operation managers, and founders who have successfully streamlined their critical pipelines using our system.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test, idx) => (
            <TestimonialCard
              key={idx}
              quote={test.quote}
              name={test.name}
              role={test.role}
              company={test.company}
              rating={test.rating}
              avatarLetter={test.avatarLetter}
              avatarBg={test.avatarBg}
              delay={test.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
