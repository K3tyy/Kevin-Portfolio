import React from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;

  return (
    <section id="o-meni" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 relative bg-background border-t border-zinc-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-pink/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Header & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual / Portrait with Edgy Styling */}
          <div className="lg:col-span-5 relative group">
            <Reveal direction="right" className="relative">
              <div className="absolute inset-0 bg-neon-pink translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 rounded-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
              
              <div className="relative overflow-hidden rounded-2xl border-4 border-zinc-800 bg-zinc-900 aspect-square sm:aspect-[4/5] flex items-center justify-center">
                <img 
                  src="kevin_pic.jpg" 
                  alt="Kevin KETI Creator" 
                  className="w-full h-full object-cover grayscale contrast-115 brightness-95 opacity-90 hover:opacity-100 hover:grayscale-0 hover:brightness-105 hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay graphic bar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-neon-green animate-ping"></span>
                    <span className="font-mono text-neon-green font-bold text-sm sm:text-base">
                      KEVIN • {t.nicknameLabel}
                    </span>
                  </div>
                  <span className="text-zinc-300 text-xs sm:text-sm font-mono">
                    {language === 'sl' ? '21 let • Kreator & Razvijalec' : '21 y/o • Creator & Developer'}
                  </span>
                </div>
              </div>
              
             {/* Floating aesthetic badge with Logo */}
              <div className="absolute -top-5 -right-3 sm:-right-6 bg-zinc-900 border-2 border-neon-green p-3 sm:p-4 rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center animate-float shadow-xl group">
                <img
                  src="keti_logo_.png"
                  alt="Logo"
                  className="w-full h-full object-contain p-1.5 hover:scale-110 transition-transform"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Text / Story */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-[2px] w-8 bg-neon-green inline-block"></span>
                <span className="text-neon-green font-mono uppercase tracking-widest text-xs font-bold">
                  {language === 'sl' ? 'Zgodba & Osebni CV' : 'Story & Personal CV'}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
                {t.titlePrefix}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-purple-400 to-cyan-400">
                  {t.titleHighlight}
                </span>
              </h2>
            </Reveal>

            <Reveal direction="left" delay={150}>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {t.p1}
              </p>
            </Reveal>

            <Reveal direction="left" delay={250}>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {t.p2}
              </p>
            </Reveal>

            <Reveal direction="left" delay={350}>
              <div className="bg-zinc-900/60 border-l-4 border-cyan-400 p-4 sm:p-5 rounded-r">
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {t.p3}
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={450}>
              <div className="bg-zinc-900/60 border-l-4 border-yellow-400 p-4 sm:p-5 rounded-r">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-yellow-400 uppercase tracking-widest">
                    ★ {language === 'sl' ? 'Podjetniška Ambicija (KETI Brand)' : 'Entrepreneurial Ambition (KETI Brand)'}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {t.p4}
                </p>
              </div>
            </Reveal>

            {/* Quick Facts summary */}
            <Reveal direction="left" delay={550}>
              <div className="mt-2 pt-6 border-t border-zinc-800">
                <h3 className="font-bold text-base uppercase tracking-wider text-white mb-3">
                  {t.factsTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-zinc-400">
                  {t.facts.map((fact, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-neon-pink font-bold">✓</span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
