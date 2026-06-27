import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenSignup: () => void;
}

export default function Navbar({ onOpenDemo, onOpenSignup }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'features', 'dashboard', 'pricing', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Dashboard', href: '#dashboard', id: 'dashboard' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Reviews', href: '#testimonials', id: 'testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/40 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center space-x-2.5 group"
              id="navbar-logo"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400/80 transition-all duration-300">
                <Terminal className="h-5 w-5 text-indigo-400 group-hover:rotate-6 transition-transform" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                Synapse<span className="text-indigo-400">.ai</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-indigo-400 font-bold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={onOpenDemo}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all duration-200"
                id="btn-navbar-demo"
              >
                Book Demo
              </button>
              <button
                onClick={onOpenSignup}
                className="relative group px-5 py-2 text-sm font-bold text-black rounded-full bg-white hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200"
                id="btn-navbar-signup"
              >
                <span className="relative z-10 flex items-center gap-1.5 font-bold">
                  Start Free <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10"
                id="btn-mobile-menu-toggle"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-b border-white/5 bg-zinc-950/95 backdrop-blur-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-400'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenDemo();
                    }}
                    className="w-full py-2.5 text-center text-sm font-medium text-zinc-300 bg-white/5 rounded-lg border border-white/10"
                  >
                    Book Demo
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenSignup();
                    }}
                    className="w-full py-2.5 text-center text-sm font-bold text-black bg-white rounded-full shadow-lg shadow-white/10"
                  >
                    Start Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
