import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import SignupModal from './components/SignupModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const openSignup = () => setIsSignupOpen(true);

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      {/* Glow ambient lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-indigo-500/[0.05] via-cyan-500/[0.02] to-transparent blur-[120px] pointer-events-none" />

      {/* Sticky header glassmorphism */}
      <Navbar onOpenDemo={openDemo} onOpenSignup={openSignup} />

      {/* Main layout contents */}
      <main>
        {/* HERO SECTION */}
        <Hero
          onOpenDemo={openDemo}
          onOpenSignup={openSignup}
          scrollToFeatures={scrollToFeatures}
        />

        {/* FEATURE HIGHLIGHTS */}
        <Features />

        {/* INTERACTIVE WORKSPACE PREVIEW */}
        <DashboardPreview />

        {/* PRICING SELECTOR */}
        <Pricing onOpenSignup={openSignup} onOpenDemo={openDemo} />

        {/* TRUST / TESTIMONIALS */}
        <Testimonials />

        {/* ACTIONS / FINAL CONVERSIONS */}
        <CTA onOpenSignup={openSignup} />
      </main>

      {/* MINIMALIST FOOTER */}
      <Footer />

      {/* POPUP MODALS */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <SignupModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
    </div>
  );
}
