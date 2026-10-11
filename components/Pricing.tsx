import React from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface PricingProps {
  language: Language;
}

const Pricing: React.FC<PricingProps> = ({ language }) => {
  const t = translations[language].pricing;

  return (
    <section id="cenik" className="py-24 px-4 sm:px-8 lg:px-16 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <Reveal direction="up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {language === 'sl' ? 'Transparentno & Prilagodljivo' : 'Transparent & Flexible'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-cyan-400">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Friendly Approach Main Card */}
        <Reveal direction="up" delay={150} className="mb-14">
          <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-black border-2 border-zinc-800 p-8 sm:p-12 rounded-sm relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-green to-cyan-400"></div>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">💬</span>
                  <span className="text-xs font-mono font-bold text-neon-green uppercase tracking-wider">
                    {t.introTitle}
                  </span>
                </div>
                <p className="text-zinc-200 text-base sm:text-lg leading-relaxed font-normal">
                  {t.introText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                <a
                  href="#kontakt"
                  className="px-8 py-4 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-wider text-xs sm:text-sm font-mono rounded-sm text-center transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:scale-105"
                >
                  {t.ctaButton} →
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {t.cards.map((card, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 100} className="h-full">
              <div className="h-full bg-zinc-900 border-2 border-zinc-800 hover:border-neon-green p-6 sm:p-8 flex flex-col justify-between rounded-sm transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-neon-green transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 bg-cyan-950/30 border border-cyan-800/40 rounded uppercase">
                      {card.perk}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2 group-hover:text-neon-green transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>{language === 'sl' ? 'Brez vezave' : 'No lock-in'}</span>
                  <span className="text-neon-green">✓</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Direct CTA */}
        <Reveal direction="up" delay={250} className="text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-neon-green hover:underline decoration-wavy underline-offset-4 py-2"
          >
            <span>{t.directContactCta}</span>
          </a>
        </Reveal>

      </div>
    </section>
  );
};

export default Pricing;
