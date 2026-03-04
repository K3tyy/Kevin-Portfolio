import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="o-meni" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 relative bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Illustration / Image */}
        <Reveal direction="right" className="relative group">
          <div className="absolute inset-0 bg-neon-pink translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 rounded-2xl transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"></div>
          <div className="relative overflow-hidden rounded-2xl border-4 border-zinc-800 bg-zinc-900 aspect-square flex items-center justify-center">
            {/* Using a placeholder, but applying harsh filters to make it edgy */}
            <img 
              src="https://picsum.photos/seed/cyberpunk/800/800" 
              alt="My Avatar" 
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
            />
            {/* Overlay graphic */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
               <span className="font-mono text-neon-green font-bold text-xl drop-shadow-md">STATUS: Gaming & Coding</span>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-6 -right-6 md:-right-10 bg-zinc-900 border-2 border-neon-green p-4 rounded-full w-32 h-32 flex items-center justify-center animate-float">
            <p className="text-center text-xs font-mono font-bold leading-tight">
              Powered by<br/><span className="text-neon-green text-sm md:text-base leading-none block mt-1">Motivacija</span>
            </p>
          </div>
        </Reveal>

        {/* Right Side: Text */}
        <div className="flex flex-col gap-8">
          <Reveal direction="left">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
               Kdo <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-purple-500">Sem?</span>
             </h2>
          </Reveal>

          <Reveal direction="left" delay={200}>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Sem 20-letni web developer, ljubitelj nadzorovanega kaosa in perfekcionist za piksle. Programirati sem začel, ker rad rešujem probleme (in morda malo zaradi video iger), pristal pa sem v čudovitem svetu spleta.
            </p>
          </Reveal>

          <Reveal direction="left" delay={300}>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Čeprav obvladam dosti različnih programskih jezikov in tehnologij, sem s časom ugotovil, kaj deluje najbolje in najhitreje.
            </p>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mt-4">
              Spletne strani najraje gradim v <span className="text-neon-green">Reactu</span>, ker omogoča popolno svobodo in interaktivnost. Ko pa gre za spletne trgovine, prisegam na <span className="text-cyan-400">WordPress (WooCommerce)</span> – preverjena klasika, ki prodaja.
            </p>
          </Reveal>

          <Reveal direction="left" delay={400}>
            <div className="flex flex-col gap-4 border-l-2 border-zinc-800 pl-6 mt-4">
              <h3 className="font-bold text-xl uppercase tracking-wider text-white">Hitra dejstva:</h3>
              <ul className="flex flex-col gap-2 font-mono text-sm md:text-base text-zinc-400">
                <li><span className="text-neon-pink">✓</span> Pristop: "Pravo orodje za pravi problem"</li>
                <li><span className="text-neon-pink">✓</span> Fokus: React & WordPress</li>
                <li><span className="text-neon-pink">✓</span> Gorivo: 100% Motivacija (0% Kofein)</li>
              </ul>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default About;