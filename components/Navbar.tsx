import React, { useState, useEffect } from 'react';
import { Language, translations } from '../translations';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#o-meni', label: t.about },
    { href: '#storitve', label: t.skills },
    { href: '#projekti', label: t.projects },
    { href: '#cenik', label: t.pricing },
    { href: '#kontakt', label: t.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 bg-neon-green text-black font-black flex items-center justify-center font-mono text-base rounded-sm group-hover:rotate-6 transition-transform">
            K
          </span>
          <div className="flex flex-col">
            <span className="text-white font-black tracking-tight text-lg leading-none group-hover:text-neon-green transition-colors">
              KEVIN
            </span>
            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
              KETI • CREATOR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase font-mono tracking-wider text-zinc-300 hover:text-neon-green transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-neon-green hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side controls: Language Switcher & CTA */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-zinc-900 border border-zinc-700/80 rounded-full p-1 text-xs font-mono">
            <button
              onClick={() => onLanguageChange('sl')}
              className={`px-2.5 py-1 rounded-full transition-all ${language === 'sl' ? 'bg-neon-green text-black font-bold shadow-sm' : 'text-zinc-400 hover:text-white'}`}
              title="Slovenščina"
            >
              SL
            </button>
            <span className="text-zinc-600 px-0.5">|</span>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-full transition-all ${language === 'en' ? 'bg-neon-green text-black font-bold shadow-sm' : 'text-zinc-400 hover:text-white'}`}
              title="English"
            >
              EN
            </button>
          </div>

          {/* Quick CTA button */}
          <a
            href="#kontakt"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-transparent hover:bg-neon-green text-white hover:text-black border border-zinc-700 hover:border-neon-green text-xs font-mono font-bold uppercase tracking-wider transition-all rounded-sm"
          >
            <span>{t.hireMe}</span>
            <span className="text-neon-pink group-hover:text-black">↗</span>
          </a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-zinc-200 border border-zinc-800 bg-zinc-900/80 rounded p-2 focus:outline-none focus:border-neon-green"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-5 h-[2px] bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2 bg-neon-green' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2 bg-neon-green' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-zinc-300 hover:text-neon-green py-2 border-b border-zinc-900/80 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">Jezik / Language:</span>
              <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-full p-1 text-xs font-mono">
                <button
                  onClick={() => onLanguageChange('sl')}
                  className={`px-3 py-1 rounded-full ${language === 'sl' ? 'bg-neon-green text-black font-bold' : 'text-zinc-400'}`}
                >
                  SL
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded-full ${language === 'en' ? 'bg-neon-green text-black font-bold' : 'text-zinc-400'}`}
                >
                  EN
                </button>
              </div>
            </div>
            <a
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center py-3 bg-neon-green text-black font-bold uppercase tracking-wider text-xs font-mono rounded-sm"
            >
              {t.hireMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
