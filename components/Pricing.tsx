import React from 'react';
import Reveal from './Reveal';

const devPackages = [
  {
    name: "OSNOVNA",
    type: "LANDING PAGE",
    price: "od 150€",
    features: [
      "Ena predstavitvena stran",
      "Kontaktni obrazec",
      "Mobilna prilagoditev",
      "Osnovna SEO optimizacija",
      "Hitra izdelava"
    ],
    highlight: false
  },
  {
    name: "STANDARD",
    type: "POSLOVNA STRAN",
    price: "od 400€",
    features: [
      "Do 5 podstrani",
      "Unikaten dizajn",
      "Mobilna prilagoditev",
      "Blog sistem",
      "Napredna SEO optimizacija"
    ],
    highlight: true
  },
  {
    name: "NAPREDNA",
    type: "NAPREDNA STRAN",
    price: "od 700€",
    features: [
      "Vse iz paketa Poslovna",
      "Uporabniški računi",
      "Podatkovne baze",
      "Backend sistem",
      "Custom funkcionalnosti"
    ],
    highlight: false
  },
  {
    name: "TRGOVINA",
    type: "SPLETNA TRGOVINA",
    price: "od 1.200€",
    features: [
      "WooCommerce sistem",
      "Do 50 izdelkov",
      "Plačilni sistemi",
      "Sistem rezervacij",
      "Večjezičnost"
    ],
    highlight: false
  },
  {
    name: "PO TVOJI MERI",
    type: "CUSTOM",
    price: "Po dogovoru",
    features: [
      "Popolnoma prilagojeno",
      "Kompleksne rešitve",
      "API integracije",
      "Spletne aplikacije",
      "Svetovanje in načrtovanje"
    ],
    highlight: false
  }
];

const maintenancePackages = [
  {
    name: "Osnovno",
    purpose: "Varnost & Update",
    price: "14.99€",
    period: "/ mesec",
    yearly: "179.88€ / leto",
    features: [
      "Posodobitve sistema in vtičnikov",
      "Mesečni varnostni backup",
      "Osnovni varnostni nadzor",
      "Hitra odzivnost ob napakah",
      "NE vključuje urejanja vsebin"
    ]
  },
  {
    name: "Napredno",
    purpose: "Brezskrbnost + Urejanje",
    price: "25.99€",
    period: "/ mesec",
    yearly: "311.88€ / leto",
    features: [
      "Vse iz paketa Osnovno",
      "1 ura mojega dela na mesec",
      "Urejanje vsebin in slik",
      "Prioritetna podpora",
      "Mesečno poročilo o stanju"
    ]
  },
  {
    name: "Custom",
    purpose: "Po tvoji meri",
    price: "Po dogovoru",
    period: "",
    yearly: "Glede na potrebe",
    features: [
      "Večje število ur dela",
      "Prioritetno reševanje težav",
      "Svetovanje za spletno rast",
      "Napredna analitika in poročila",
      "Popolna prilagodljivost željam"
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="cenik" className="py-24 px-4 sm:px-8 lg:px-16 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            Investicija
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Transparentne cene brez skritih stroškov. Plačaš za kvaliteto, dobiš pa mirne živce.
          </p>
        </Reveal>

        {/* WEB DEVELOPMENT SECTION */}
        <div className="mb-20">
          <Reveal direction="up" className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-8 bg-neon-pink inline-block"></span>
            <h3 className="text-2xl font-black uppercase tracking-widest text-white">Izdelava Spletnih Strani</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {devPackages.map((pkg, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100} className="h-full">
                <div className={`h-full p-8 flex flex-col border-2 transition-all duration-300 relative group ${pkg.highlight ? 'border-neon-green bg-zinc-900/80 shadow-[0_0_30px_rgba(204,255,0,0.1)]' : 'border-zinc-800 bg-zinc-900 hover:border-neon-green'}`}>
                  
                  {pkg.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-green text-black font-bold px-4 py-1 text-xs uppercase tracking-widest">
                      Najbolj Iskano
                    </div>
                  )}

                  <h4 className="text-zinc-500 font-mono uppercase text-sm mb-2">{pkg.name}</h4>
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.type}</h3>
                  <div className="text-3xl md:text-4xl font-black text-neon-green mb-8 font-mono">
                    {pkg.price}
                  </div>

                  <ul className="flex-grow space-y-3 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <span className="text-neon-pink font-bold mt-[2px]">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a href="#kontakt" className={`w-full py-3 px-4 text-center font-bold uppercase tracking-wider transition-colors border-2 ${pkg.highlight ? 'bg-neon-green text-black border-neon-green hover:bg-transparent hover:text-neon-green' : 'border-zinc-700 text-white hover:border-white'}`}>
                    Zanima me
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* MAINTENANCE SECTION */}
        <div className="mb-16">
          <Reveal direction="up" className="flex items-center gap-4 mb-8">
            <span className="h-[2px] w-8 bg-cyan-400 inline-block"></span>
            <h3 className="text-2xl font-black uppercase tracking-widest text-white">Mesečno Vzdrževanje</h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenancePackages.map((pkg, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 100} className="h-full">
                <div className="h-full p-8 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group relative">
                  <div className="flex flex-col justify-between items-start mb-6 gap-4">
                    <div>
                      <h4 className="text-white text-xl font-bold uppercase tracking-wider group-hover:text-cyan-400 transition-colors">{pkg.name}</h4>
                      <span className="text-xs text-zinc-500 font-mono uppercase">{pkg.purpose}</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-black text-cyan-400">{pkg.price}</span>
                      <span className="text-xs text-zinc-500 font-mono">{pkg.period}</span>
                      {pkg.yearly && <span className="block text-[10px] text-zinc-600 mt-1 uppercase tracking-tighter">{pkg.yearly}</span>}
                    </div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-zinc-800 mb-6 group-hover:bg-cyan-900/50"></div>

                  <ul className="space-y-3 flex-grow mb-4">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="text-zinc-400 text-sm md:text-base flex items-start gap-3">
                        <span className="text-cyan-400 font-bold">•</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* IMPORTANT INFO / TERMINAL STYLE */}
        <Reveal direction="up" delay={200}>
          <div className="bg-black border border-zinc-800 p-6 md:p-8 font-mono text-sm text-zinc-400 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-pink via-neon-green to-cyan-400"></div>
            <h4 className="text-white font-bold mb-4 uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
              Sistemsko Obvestilo / Pomembne Informacije
            </h4>
            <ul className="space-y-2 mb-6">
              <li><span className="text-zinc-600">{`>`}</span> Cena domene <span className="text-white">ni vključena</span> v ceno (svetujem pri nakupu).</li>
              <li><span className="text-zinc-600">{`>`}</span> Neizkoriščene ure vzdrževanja se ne prenašajo v naslednji mesec.</li>
              <li><span className="text-zinc-600">{`>`}</span> Cene so informativne in se prilagodijo glede na zahtevnost tvoje ideje.</li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="italic text-zinc-500">
                Potrebuješ točno ponudbo ali nekaj čisto "custom"?
              </p>
              <a href="#kontakt" className="text-neon-green hover:underline decoration-wavy underline-offset-4">
                Kontaktiraj me na katerem koli od socialnih medijov ali direkt na mail -&gt;
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
