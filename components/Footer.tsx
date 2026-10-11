import React from 'react';
import { Language, translations } from '../translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-black py-10 border-t border-zinc-900 text-center px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-mono font-black text-white text-base tracking-wider">
            KEVIN <span className="text-neon-green">(KETI)</span>
          </span>
          <span className="hidden sm:inline text-zinc-700">•</span>
          <p className="text-zinc-500 font-mono text-xs sm:text-sm">
            © {new Date().getFullYear()} {t.builtWith}
          </p>
        </div>

        {/* Social Links with authentic colors and glowing hovers */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
          
          {/* TikTok */}
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all flex items-center gap-1.5 group p-1.5 rounded hover:scale-105 hover:shadow-[2px_2px_0px_#ff004f,-2px_-2px_0px_#00f2fe]"
          >
            <svg className="w-4 h-4 fill-current group-hover:fill-white" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.75a8.28 8.28 0 0 0 4.77 1.48v-3.54z"/>
            </svg>
            <span className="group-hover:text-white">TikTok</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all flex items-center gap-1.5 p-1.5 rounded hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-105 hover:shadow-[0_0_15px_rgba(220,39,67,0.7)]"
          >
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            </svg>
            <span>Instagram</span>
          </a>

          {/* Facebook */}
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-all flex items-center gap-1.5 p-1.5 rounded hover:bg-[#1877F2] hover:scale-105 hover:shadow-[0_0_15px_rgba(24,119,242,0.7)]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>

          {/* Email */}
          <a 
            href="mailto:kevinkralj44@gmail.com" 
            className="hover:text-neon-green transition-colors flex items-center gap-1 p-1.5"
          >
            <span>Email</span>
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
