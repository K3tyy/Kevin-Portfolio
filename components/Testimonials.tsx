import React from 'react';
import Reveal from './Reveal';

const testimonials = [
  {
    name: "Marko Z.",
    role: "Lastnik E-trgovine",
    quote: "Kevin je totalno raztural mojo spletno trgovino. Prehod na nov dizajn je dvignil prodajo za 200%. Brez kompliciranja, samo rezultati.",
    stars: 5,
    color: "text-neon-green"
  },
  {
    name: "Ana K.",
    role: "Kreativni Studio",
    quote: "Nisem vedela, kaj točno rabim, ampak je prebral moje misli. Stran je hitra, moderna in končno odraža mojo blagovno znamko.",
    stars: 5,
    color: "text-neon-pink"
  },
  {
    name: "Tech Startup d.o.o.",
    role: "CEO",
    quote: "Hitro, odzivno in tehnično brezhibno. Koda je čista, SEO optimizacija pa se že pozna na rezultatih iskanja.",
    stars: 5,
    color: "text-cyan-400"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-background relative overflow-hidden border-t border-zinc-900">
      
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" className="mb-16 flex flex-col items-start md:items-center md:text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-100">Feedback</span> Loop.
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl border-l-2 md:border-l-0 border-neon-green pl-4 md:pl-0">
            Ne verjemi samo meni na besedo. Tukaj je nekaj ljudi, ki so preživeli sodelovanje z mano (in bili nad rezultatom navdušeni).
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => {
            // Replace 'text-' with 'hover:border-' to map the color correctly
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
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-zinc-300 mb-8 relative z-10 font-medium leading-relaxed">
                    "{t.quote}"
                  </p>

                  <div className="mt-auto flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-lg ${t.color}`}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm">{t.name}</h4>
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