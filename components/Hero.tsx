import React from 'react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-20 pb-10 overflow-hidden">
      
      {/* Background abstract shape / glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-neon-green/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col items-start justify-center relative z-10">
        
        <Reveal direction="up" delay={100} className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-neon-green inline-block"></span>
            <span className="text-neon-green font-mono uppercase tracking-widest text-sm md:text-base font-bold">
              Koda x Kreativnost
            </span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <h1 className="text-[12vw] md:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter text-white drop-shadow-lg">
            Živjo, sem <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-400">
              Kevin.
            </span>
            <br/>
            <span className="italic font-light opacity-90">Koda je moje</span>
            <br/>
            platno.
          </h1>
        </Reveal>

        <Reveal direction="up" delay={500} className="mt-8 md:mt-12 max-w-2xl">
          <p className="text-xl md:text-2xl text-zinc-400 font-medium border-l-4 border-neon-pink pl-6">
            Spreminjam surovo motivacijo v hude spletne aplikacije in e-trgovine. Včasih zlomim stvari, a jih potem vedno še bolje popravim.
          </p>
        </Reveal>

        <Reveal direction="up" delay={700} className="mt-12 flex flex-wrap gap-6">
          <a href="#projekti" className="group relative px-8 py-4 bg-neon-green text-black font-bold uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300 inline-block">
            <span className="relative z-10">Poglej moje delo</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
          </a>
          
          <a href="#kontakt" className="px-8 py-4 border-2 border-zinc-700 text-white font-bold uppercase tracking-wider hover:border-neon-pink hover:text-neon-pink transition-colors duration-300 inline-block">
            Zateži mi
          </a>
        </Reveal>
      </div>

      {/* Scroll Down Indicator */}
      <Reveal direction="none" delay={1000} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-mono text-xs tracking-widest uppercase rotate-90 mb-8">Scroll</span>
        <div className="w-[1px] h-16 bg-zinc-700 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-neon-green animate-[bounce_2s_infinite]"></div>
        </div>
      </Reveal>

      {/* Edgy decorative element */}
      <div className="absolute top-20 right-10 md:right-20 animate-spin-slow opacity-20 pointer-events-none hidden md:block">
        <svg width="120" height="120" viewBox="0 0 100 100" className="fill-neon-pink">
          <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45Z" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;