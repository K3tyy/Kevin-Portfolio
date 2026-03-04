import React from 'react';
import Reveal from './Reveal';

const projectsData = [
  {
    id: 1,
    title: "AI Osebni Asistent",
    category: "React",
    description: "Aplikacija, ki uporablja umetno inteligenco za avtomatizacijo dolgčasa. Pametno in hitro.",
    image: "https://picsum.photos/seed/crypto/800/600",
    link: "#",
    colSpan: "md:col-span-2 lg:col-span-2"
  },
  {
    id: 2,
    title: "Huda Trgovina",
    category: "React",
    description: "Spletna trgovina z noro hitrim checkoutom in custom dizajnom. Zelo dark mode.",
    image: "https://picsum.photos/seed/darkshop/600/600",
    link: "#",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    id: 3,
    title: "Gaming Dashboard",
    category: "React",
    description: "Nadzorna plošča za sledenje statistikam iger, zgrajena s strogo tipiziranim TypeScriptom.",
    image: "https://picsum.photos/seed/portfolio/600/800",
    link: "#",
    colSpan: "md:col-span-1 lg:col-span-1"
  },
  {
    id: 4,
    title: "Portfolio V1",
    category: "React",
    description: "Tisti dizajn, ki ga nikoli nisem objavil, ker ni bil dovolj cool. R.I.P.",
    image: "https://picsum.photos/seed/api/800/600",
    link: "#",
    colSpan: "md:col-span-2 lg:col-span-2"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projekti" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-background border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        <Reveal direction="down" className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            Zadnja <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-500">Dela.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            To so projekti, ki so nastali z mislijo na funkcionalnost in estetiko. Poglej si, kaj je mogoče.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {projectsData.map((project, index) => (
            <Reveal 
              key={project.id} 
              direction="up" 
              delay={index * 100} 
              className={`relative group overflow-hidden bg-zinc-900 border-2 border-transparent hover:border-neon-green transition-colors duration-300 ${project.colSpan}`}
            >
              <a href={project.link} className="block w-full h-full">
                {/* Background Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-neon-pink font-mono text-sm font-bold tracking-widest uppercase mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  
                  {/* View Project Button (Icon) */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;