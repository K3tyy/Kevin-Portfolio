import React from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-28 pb-16 overflow-hidden">
      
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] md:w-[45vw] md:h-[45vw] bg-neon-green/15 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-5 w-64 h-64 bg-neon-pink/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10">
        
        {/* Top Tagline Badge */}
        <Reveal direction="up" delay={100}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="h-[2px] w-8 sm:w-12 bg-neon-green inline-block"></span>
            <span className="text-neon-green font-mono uppercase tracking-widest text-xs sm:text-sm font-bold bg-zinc-900/80 px-3 py-1 border border-zinc-800 rounded">
              {t.badge}
            </span>
          </div>
        </Reveal>

        {/* Main Headline with generous letter spacing on tagline */}
        <Reveal direction="up" delay={250}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] sm:leading-[0.9] font-black uppercase text-white drop-shadow-xl">
            <span className="tracking-tighter">
              {t.greeting} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-cyan-400">
                {t.name}
              </span>
            </span>
            <br />
            <span className="italic font-light opacity-90 text-zinc-300 text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              {t.tagline1}
            </span>{' '}
            <span className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-black">
              {t.tagline2}
            </span>
          </h1>
        </Reveal>

        {/* Bio description */}
        <Reveal direction="up" delay={400} className="mt-6 md:mt-10 max-w-3xl">
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal border-l-4 border-neon-pink pl-4 sm:pl-6 leading-relaxed bg-zinc-950/40 py-2 backdrop-blur-sm">
            {t.bio}
          </p>
        </Reveal>

        {/* Stats & Capability Highlights */}
        <Reveal direction="up" delay={550} className="mt-8 md:mt-10 w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-sm">
            
            <div className="flex flex-col border-r border-zinc-800/80 pr-2">
              <span className="text-2xl sm:text-3xl font-black font-mono text-neon-green">{t.stats.age}</span>
              <span className="text-xs text-zinc-400 font-mono uppercase mt-0.5">{t.stats.ageLabel}</span>
            </div>

            <div className="flex flex-col sm:border-r border-zinc-800/80 sm:pr-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black font-mono text-cyan-400">{t.stats.skillsCount}</span>
              <span className="text-xs text-zinc-400 font-mono uppercase mt-0.5">{t.stats.skillsLabel}</span>
            </div>

            <div className="flex flex-col border-r border-zinc-800/80 pr-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-black font-mono text-neon-pink">{t.stats.approach}</span>
              <span className="text-xs text-zinc-400 font-mono uppercase mt-0.5">{t.stats.approachLabel}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-black font-mono text-yellow-400">{t.stats.ambition}</span>
              <span className="text-xs text-zinc-400 font-mono uppercase mt-0.5">{t.stats.ambitionLabel}</span>
            </div>

          </div>
        </Reveal>

        {/* Action CTAs */}
        <Reveal direction="up" delay={700} className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="#projekti"
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-neon-green text-black font-bold uppercase tracking-wider text-xs sm:text-sm overflow-hidden hover:scale-105 transition-transform duration-300 inline-block text-center shadow-[0_0_20px_rgba(204,255,0,0.3)]"
          >
            <span className="relative z-10">{t.exploreWork}</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
          
          <a
            href="#kontakt"
            className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-zinc-700 text-white font-bold uppercase tracking-wider text-xs sm:text-sm hover:border-neon-pink hover:text-neon-pink transition-colors duration-300 inline-block text-center bg-zinc-900/50"
          >
            {t.contactMe}
          </a>

          <a
            href="#storitve"
            className="text-xs sm:text-sm font-mono text-zinc-400 hover:text-white underline underline-offset-4 flex items-center gap-1.5 py-2"
          >
            <span>{language === 'sl' ? 'Razišči veščine & CV' : 'Explore skills & CV'}</span>
            <span>↓</span>
          </a>
        </Reveal>

        {/* Live Status indicator */}
        <Reveal direction="up" delay={850} className="mt-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-black/60 border border-zinc-800 rounded-full text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            <span>{t.status}</span>
          </div>
        </Reveal>

      </div>

      {/* Decorative spinning element on desktop */}
      <div className="absolute top-28 right-8 lg:right-20 animate-spin-slow opacity-15 pointer-events-none hidden md:block">
        <svg width="100" height="100" viewBox="0 0 100 100" className="fill-neon-pink">
          <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45Z" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;