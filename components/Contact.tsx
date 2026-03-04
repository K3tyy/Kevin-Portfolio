import React, { useState } from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Sporočilo poslano v void! (Samo hec, oglasim se kmalu.)");
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <Reveal direction="right">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
              Narediva <br/> Nekaj <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500">Norega.</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={200}>
            <p className="text-xl text-zinc-400 mb-10 max-w-md">
              Imaš divjo idejo? Potrebuješ spletno stran, ki ne izgleda kot iz leta 2010? Ali pa mi hočeš samo poslati meme? Piši mi.
            </p>
          </Reveal>
          
          <Reveal direction="right" delay={300}>
            <div className="flex flex-col gap-6 font-mono text-lg">
              <a href="mailto:kevinkralj44@gmail.com" className="text-white hover:text-neon-green transition-colors flex items-center gap-4 group">
                <span className="w-10 h-10 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-neon-green transition-colors">@</span>
                kevinkralj44@gmail.com
              </a>
              <div className="flex gap-4">
                 <a href="#" className="h-12 px-6 bg-zinc-800 hover:bg-neon-pink hover:text-white text-zinc-300 font-bold uppercase tracking-wider flex items-center justify-center rounded transition-colors duration-300">
                   Instagram
                 </a>
                 <a href="#" className="h-12 px-6 bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-300 font-bold uppercase tracking-wider flex items-center justify-center rounded transition-colors duration-300">
                   Facebook
                 </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form Side */}
        <Reveal direction="left" delay={200} className="bg-background border-2 border-zinc-800 p-8 md:p-12 relative group">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-neon-green -translate-y-2 translate-x-2 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-neon-pink translate-y-2 -translate-x-2 transition-transform duration-300 group-hover:-translate-x-4 group-hover:translate-y-4"></div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-sm text-zinc-500 uppercase">01. Tvoje Ime</label>
              <input 
                type="text" 
                id="name" 
                required
                placeholder="Janez Novak" 
                className="w-full bg-transparent border-b-2 border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-neon-green transition-colors"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-sm text-zinc-500 uppercase">02. Tvoj Email</label>
              <input 
                type="email" 
                id="email" 
                required
                placeholder="janez@hud-startup.si" 
                className="w-full bg-transparent border-b-2 border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-neon-green transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm text-zinc-500 uppercase">03. Kaj imaš v mislih?</label>
              <textarea 
                id="message" 
                rows={4}
                required
                placeholder="Rabil bi spletno stran, ki..." 
                className="w-full bg-transparent border-b-2 border-zinc-700 py-4 text-white text-xl focus:outline-none focus:border-neon-green transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 py-5 px-8 font-black uppercase tracking-widest text-lg transition-all duration-300 border-2 ${isSubmitting ? 'bg-zinc-800 text-zinc-500 border-zinc-800 cursor-not-allowed' : 'bg-transparent border-white text-white hover:bg-white hover:text-black'}`}
            >
              {isSubmitting ? 'POŠILJAM...' : 'POŠLJI SPOROČILO'}
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;