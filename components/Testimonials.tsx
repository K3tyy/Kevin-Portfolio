import React from 'react';
import Reveal from './Reveal';
import { Language } from '../translations';

interface TestimonialsProps {
  language: Language;
}

const getTestimonials = (lang: Language) => [
  {
    name: "Marko Z.",
    role: lang === 'sl' ? "Lastnik E-trgovine" : "E-Commerce Founder",
    quote: lang === 'sl' 
      ? "Kevin je totalno raztural mojo spletno trgovino. Prehod na nov dizajn je dvignil prodajo za 200%. Brez kompliciranja, samo rezultati."
      : "Kevin completely revolutionized my online store. The new redesign boosted conversions by 200%. Zero fluff, pure results.",
    stars: 5,
    color: "text-neon-green"
  },
  {
    name: "Ana K.",
    role: lang === 'sl' ? "Kreativni Studio" : "Creative Studio Lead",
    quote: lang === 'sl'
      ? "Nisem vedela, kaj točno rabim, ampak je prebral moje misli. Stran je hitra, moderna in končno odraža mojo blagovno znamko."
      : "I wasn't entirely sure of what I needed, but he read my mind. The website is blazing fast, sleek, and truly represents our brand.",
    stars: 5,
    color: "text-neon-pink"
  },
  {
    name: "Tech Startup d.o.o.",
    role: "CEO",
    quote: lang === 'sl'
      ? "Hitro, odzivno in tehnično brezhibno. Koda je čista, izjemno razumevanje vizualov in družbenih omrežij."
      : "Fast, responsive, and technically rock-solid. Clean code, sharp aesthetic eye, and deep social media understanding.",
    stars: 5,
    color: "text-cyan-400"
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const testimonials = getTestimonials(language);

  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-background relative overflow-hidden border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" className="mb-16 flex flex-col items-start md:items-center md:text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {language === 'sl' ? 'Zaupanje & Izkušnje' : 'Trust & Experience'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            {language === 'sl' ? (
              <>Mnenja & <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100">Odzivi Strank.</span></>
            ) : (
              <><span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100">Feedback</span> Loop.</>
            )}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl border-l-2 md:border-l-0 border-neon-green pl-4 md:pl-0">
            {language === 'sl'
              ? 'Ne verjemi samo meni na besedo. Tukaj je nekaj ljudi, ki so sodelovali z mano in bili nad rezultatom navdušeni.'
              : "Don't just take my word for it. Here is what people who teamed up with me have to say about the results."}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            const borderHoverClass = t.color.replace('text-', 'hover:border-');
            
            return (
              <Reveal key={index} direction="up" delay={index * 150} className="h-full">
                <div className={`h-full bg-zinc-900/50 border border-zinc-800 p-6 md:p-8 rounded-sm relative group transition-colors duration-300 ${borderHoverClass}`}>
                  
                  {/* Large Quote Icon */}
                  <div className={`absolute -top-6 right-8 text-8xl font-serif opacity-20 group-hover:opacity-40 transition-opacity ${t.color}`}>
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-yellow-500">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-zinc-300 mb-8 relative z-10 font-medium text-sm sm:text-base leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-lg ${t.color}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-xs sm:text-sm">{t.name}</h4>
                      <span className="text-zinc-500 text-xs font-mono">{t.role}</span>
                    </div>
                  </div>

                  {/* Edgy corner accent */}
                  <div className={`absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-current opacity-50 ${t.color}`}></div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
