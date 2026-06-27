import { Terminal, Github, Twitter, Linkedin, Slack } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'AI Automation', href: '#features' },
        { label: 'Smart Analytics', href: '#features' },
        { label: 'Pricing Plans', href: '#pricing' },
        { label: 'Security Standards', href: '#features' },
        { label: 'Changelog', href: '#home' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#home' },
        { label: 'API Reference', href: '#home' },
        { label: 'Status Monitor', href: '#dashboard' },
        { label: 'Community Support', href: '#home' },
        { label: 'SaaS Templates', href: '#home' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#home' },
        { label: 'Platform Careers', href: '#home' },
        { label: 'Privacy Policy', href: '#home' },
        { label: 'Terms of Use', href: '#home' },
        { label: 'Contact Team', href: '#home' },
      ],
    },
  ];

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center space-x-2.5 group">
              <div className="h-9 w-9 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400 group-hover:bg-indigo-500/20 transition-all duration-300">
                <Terminal className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-50 to-gray-300">
                Synapse<span className="text-indigo-400 font-bold">.ai</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Accelerate corporate output. Unify your data ecosystems, build self-sustaining AI nodes, and optimize business processes in minutes.
            </p>
            {/* Socials */}
            <div className="flex items-center space-x-4">
              {[
                { icon: <Twitter className="h-4 w-4" />, href: 'https://twitter.com' },
                { icon: <Github className="h-4 w-4" />, href: 'https://github.com' },
                { icon: <Linkedin className="h-4 w-4" />, href: 'https://linkedin.com' },
                { icon: <Slack className="h-4 w-4" />, href: 'https://slack.com' },
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-400">
                {column.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={link.href}
                      className="text-zinc-500 hover:text-indigo-400 transition-colors duration-150 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Copyright bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Synapse AI Platform, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Security disclosure</a>
            <a href="#home" className="hover:text-indigo-400 transition-colors">Regional settings</a>
            <a href="#home" className="hover:text-indigo-400 transition-colors">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
