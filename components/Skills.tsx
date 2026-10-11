import React from 'react';
import Reveal from './Reveal';

const skillsData = [
  {
    title: "React Ekosistem",
    description: "Ko rabimo interaktivnost. React ni le ena stvar – je skupek HTML-ja, CSS-a in modernega JavaScripta/TypeScripta za vrhunske aplikacije.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    hoverClass: "hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]",
    iconClass: "group-hover:text-cyan-400",
  },
  {
    title: "WordPress / Woo",
    description: "Najboljša izbira za denarnico. Hiter zagon trgovine, enostavno urejanje zate in milijon možnosti razširitev. Ugodno in efektivno.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M4 13h16"></path>
        <path d="M12 4v16"></path>
      </svg>
    ),
    hoverClass: "hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    iconClass: "group-hover:text-blue-500",
  },
  {
    title: "Custom Code",
    description: "Čisti HTML, CSS, PHP in JS. Brez odvečne navlake. Ko rabiš spletno stran, ki se naloži v milisekundah in je popolnoma unikatna.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    hoverClass: "hover:border-neon-green hover:shadow-[0_0_30px_rgba(204,255,0,0.2)]",
    iconClass: "group-hover:text-neon-green",
  },
  {
    title: "AI Integracije",
    description: "Uporaba Google AI Studia in pametnih orodij za avtomatizacijo in izboljšanje uporabniške izkušnje. Prihodnost je zdaj.",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20"></path>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    hoverClass: "hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]",
    iconClass: "group-hover:text-neon-pink",
  }
];

const Skills: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
              Moj <br/> <span className="text-zinc-600">Arzenal.</span>
            </h2>
            <p className="text-zinc-400 max-w-sm text-lg border-l-2 border-neon-green pl-4">
              Ne kompliciram tam, kjer ni treba. Uporabim tehnologijo, ki najbolj ustreza tvojemu cilju in proračunu.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <Reveal 
              key={index} 
              direction="up" 
              delay={index * 150}
            >
              <div className={`group h-full bg-zinc-900 border-2 border-zinc-800 p-6 md:p-8 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-2 cursor-default ${skill.hoverClass}`}>
                <div className={`text-zinc-500 transition-colors duration-300 ${skill.iconClass}`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;