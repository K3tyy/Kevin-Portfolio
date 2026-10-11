import React from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface ServicesProps {
  language: Language;
  onSelectCategory?: (category: string) => void;
}

const Services: React.FC<ServicesProps> = ({ language, onSelectCategory }) => {
  const t = translations[language].services;

  const handleCategoryClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const projectsSection = document.getElementById('projekti');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="storitve" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <Reveal direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-[2px] w-8 bg-neon-green inline-block"></span>
                <span className="text-neon-green font-mono uppercase tracking-widest text-xs font-bold">
                  {language === 'sl' ? 'Veščine & Storitve' : 'Skills & Services'}
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                {t.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-cyan-400">
                  {language === 'sl' ? 'Kaj Znam.' : 'What I Do.'}
                </span>
              </h2>
            </div>
            
            <p className="text-zinc-400 max-w-md text-sm sm:text-base border-l-2 border-neon-pink pl-4 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </Reveal>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, idx) => {
            const isDream = item.isDream;
            const accentBorder = isDream
              ? 'hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]'
              : idx === 0
              ? 'hover:border-neon-green hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]'
              : idx === 1
              ? 'hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
              : 'hover:border-neon-pink hover:shadow-[0_0_30px_rgba(255,0,255,0.15)]';

            const badgeColor = isDream
              ? 'text-yellow-400 border-yellow-500/40 bg-yellow-950/20'
              : idx === 0
              ? 'text-neon-green border-neon-green/40 bg-neon-green/5'
              : idx === 1
              ? 'text-cyan-400 border-cyan-400/40 bg-cyan-950/20'
              : 'text-neon-pink border-neon-pink/40 bg-pink-950/20';

            // Distinct button colors per service
            const buttonColorClass = idx === 0
              ? 'bg-neon-green text-black hover:bg-white shadow-[0_0_15px_rgba(204,255,0,0.2)]'
              : idx === 1
              ? 'bg-cyan-400 text-black hover:bg-white shadow-[0_0_15px_rgba(34,211,238,0.2)]'
              : idx === 2
              ? 'bg-neon-pink text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,0,255,0.2)]'
              : 'bg-yellow-400 text-black hover:bg-white shadow-[0_0_15px_rgba(250,204,21,0.2)]';

            return (
              <Reveal key={item.id} direction="up" delay={idx * 120} className="h-full">
                <div className={`h-full p-6 sm:p-8 bg-zinc-900 border-2 border-zinc-800 transition-all duration-300 rounded-sm flex flex-col justify-between group ${accentBorder}`}>
                  
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-zinc-500 group-hover:text-white transition-colors">
                        {item.number}
                      </span>
                      <span className={`text-[10px] sm:text-xs font-mono font-bold px-2.5 py-1 border rounded uppercase tracking-wider ${badgeColor}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Highlights bullet list */}
                    <ul className="space-y-2.5 mb-8">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                          <span className={`font-bold mt-0.5 ${isDream ? 'text-yellow-400' : idx === 1 ? 'text-cyan-400' : idx === 2 ? 'text-neon-pink' : 'text-neon-green'}`}>
                            {isDream ? '★' : '•'}
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons (Colored & no duplicate middle inquiry button) */}
                  <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => handleCategoryClick(item.categoryFilter)}
                      className={`px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 ${buttonColorClass}`}
                    >
                      <span>{item.ctaText}</span>
                      <span>→</span>
                    </button>

                    <a
                      href="#kontakt"
                      className="text-xs font-mono text-zinc-400 hover:text-white underline underline-offset-4 py-1"
                    >
                      {language === 'sl' ? 'Povpraševanje' : 'Inquire'} ↗
                    </a>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
