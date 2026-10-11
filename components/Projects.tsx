import React from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface ProjectsProps {
  language: Language;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

interface ProjectItem {
  id: string;
  titleSl: string;
  titleEn: string;
  category: 'web' | 'photo' | 'social' | 'keti';
  categoryLabelSl: string;
  categoryLabelEn: string;
  descriptionSl: string;
  descriptionEn: string;
  image: string;
  tagsSl: string[];
  tagsEn: string[];
  isPlaceholder?: boolean;
  badgeSl?: string;
  badgeEn?: string;
  colSpan?: string;
  cameraOverlay?: boolean;
}

const allProjects: ProjectItem[] = [
  // 1. WEB DEVELOPMENT
  {
    id: 'web-1',
    titleSl: 'AI Smart Studio Platforma',
    titleEn: 'AI Smart Studio Platform',
    category: 'web',
    categoryLabelSl: 'Spletni Razvoj',
    categoryLabelEn: 'Web Development',
    descriptionSl: 'Interaktivna spletna aplikacija, zgrajena z Reactom in TypeScriptom za visoko zmogljivost in intuitivno uporabniško izkušnjo.',
    descriptionEn: 'Interactive web application built with React & TypeScript for high performance and smooth UX.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['React', 'TypeScript', 'Tailwind CSS'],
    tagsEn: ['React', 'TypeScript', 'Tailwind CSS'],
    colSpan: 'md:col-span-2'
  },
  {
    id: 'web-2',
    titleSl: 'E-Trgovina Dark Edition',
    titleEn: 'Dark Edition E-Commerce Store',
    category: 'web',
    categoryLabelSl: 'WooCommerce / Spletna Trgovina',
    categoryLabelEn: 'WooCommerce / E-Commerce',
    descriptionSl: 'Hitra e-trgovina z integriranim varnim plačilnim sistemom, modernim dark mode izgledom in mobilno optimizacijo.',
    descriptionEn: 'High-speed online store with modern dark aesthetics, seamless checkout, and flawless mobile experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tagsSl: ['WordPress', 'WooCommerce', 'Stripe'],
    tagsEn: ['WordPress', 'WooCommerce', 'Stripe'],
    colSpan: 'md:col-span-1'
  },
  {
    id: 'web-3',
    titleSl: 'Gaming & Stats Hub',
    titleEn: 'Gaming & Stats Hub',
    category: 'web',
    categoryLabelSl: 'Custom Web Aplikacija',
    categoryLabelEn: 'Custom Web App',
    descriptionSl: 'Interaktivna nadzorna plošča za spremljanje statistik, rankingov in gaming skupnosti.',
    descriptionEn: 'Custom dashboard for live stats, community ranking, and interactive gamer engagement.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    tagsSl: ['React', 'API Integracija', 'Dark UI'],
    tagsEn: ['React', 'API Integration', 'Dark UI'],
    colSpan: 'md:col-span-1'
  },
  {
    id: 'web-4',
    titleSl: 'Bespoke Poslovna Spletna Stran',
    titleEn: 'Bespoke Corporate Website',
    category: 'web',
    categoryLabelSl: 'Poslovna Predstavitev',
    categoryLabelEn: 'Corporate Landing',
    descriptionSl: 'Predstavitvena spletna stran z unikatnim oblikovanjem, kontaktno avtomatizacijo in naprednim SEO.',
    descriptionEn: 'Brand presentation website with bespoke design, contact workflows, and search ranking optimization.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['SEO', 'Mobilno Prilagojeno', 'Hitrost'],
    tagsEn: ['SEO', 'Mobile Optimized', 'Performance'],
    colSpan: 'md:col-span-2'
  },

  // 2. PHOTOGRAPHY & VIDEOGRAPHY (SHOOTS & EDITED WORKS)
  {
    id: 'photo-1',
    titleSl: 'Fotografiranje s Kamero & Vizualije',
    titleEn: 'Camera Shoots & Visual Captures',
    category: 'photo',
    categoryLabelSl: 'Fotografija & Kamera',
    categoryLabelEn: 'Photography & Camera Shoots',
    descriptionSl: 'Pripravljen prostor za avtorske portretne, ulične in ambientne fotografije ter montirane posnetke s pravo kamero.',
    descriptionEn: 'Showcase space for portrait, street, and lifestyle captures and edited camera footage out in the field.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['Prava Kamera', 'Ulična Foto', 'Portreti'],
    tagsEn: ['Camera Gear', 'Street Photo', 'Portraits'],
    isPlaceholder: true,
    cameraOverlay: true,
    badgeSl: 'COMING SOON • PRIHAJA KMALU',
    badgeEn: 'COMING SOON • IN PRODUCTION',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'photo-2',
    titleSl: 'Produktni & Promocijski Video',
    titleEn: 'Product & Promotional Videos',
    category: 'photo',
    categoryLabelSl: 'Videografija & Montaža',
    categoryLabelEn: 'Videography & Editing',
    descriptionSl: 'Snemanje promocijskih video posnetkov (kratki in daljši formati) z montažo v CapCutu in DaVinci Resolvu.',
    descriptionEn: 'Compelling promotional video shoots (short-form and long-form) edited in CapCut and DaVinci Resolve.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    tagsSl: ['4K Video', 'CapCut & DaVinci', 'Promocija'],
    tagsEn: ['4K Video', 'CapCut & DaVinci', 'Promo'],
    isPlaceholder: true,
    cameraOverlay: true,
    badgeSl: 'V DELU • PRIPRAVLJEN PROSTOR',
    badgeEn: 'IN PROGRESS • READY FOR SHOOTS',
    colSpan: 'md:col-span-1'
  },

  // 3. BRANDS & SOCIAL MEDIA (EXACTLY 2 OPTIONS AS REQUESTED!)
  // Option 1: Showcase the brands I work with or have worked with
  {
    id: 'social-1',
    titleSl: 'Znamke, s katerimi sodelujem (ali sem sodeloval)',
    titleEn: 'Brands I Work With (Or Have Worked With)',
    category: 'social',
    categoryLabelSl: 'Znamke & Sodelovanja',
    categoryLabelEn: 'Brand Collaborations',
    descriptionSl: 'Pregled blagovnih znamk in računov, za katere sem vodil profile, ustvarjal vsebine ter skrbel za organsko rast, prepoznavnost in vpletenost občinstva.',
    descriptionEn: 'Showcase of brands and social accounts I collaborate with or managed in the past—driving organic community growth, engagement, and visibility.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['Znamke', 'Vodenje Profilov', 'Organska Rast'],
    tagsEn: ['Partner Brands', 'Account Management', 'Organic Growth'],
    badgeSl: 'SODELOVANJA Z ZNAMKAMI',
    badgeEn: 'BRAND COLLABORATIONS',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  // Option 2: Examples of work I did for social media
  {
    id: 'social-2',
    titleSl: 'Primeri del za družbena omrežja',
    titleEn: 'Examples of Work for Social Media',
    category: 'social',
    categoryLabelSl: 'Objave, Grafike & Posterji',
    categoryLabelEn: 'Posts, Graphics & Posters',
    descriptionSl: 'Oblikovanje unikatnih plakatov, oglasnih grafik, vizualnih identitet in posterjev, narejenih po meri za družbena omrežja naročnikov.',
    descriptionEn: 'Examples of creative work for social media: promotional posters, visual branding assets, feed graphics, and campaign artwork.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['Posterji', 'Grafike za Omrežja', 'Dizajn'],
    tagsEn: ['Posters', 'Social Graphics', 'Visual Design'],
    badgeSl: 'PRIMERI DEL',
    badgeEn: 'WORK EXAMPLES',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },

  // 4. KETI SNACK BRAND (DREAM VENTURE TEASERS WITH TRANSLATED BRACKETS!)
  {
    id: 'keti-1',
    titleSl: 'KETI Snack Brand (Podjetniška Vizija)',
    titleEn: 'KETI Snack Brand (Entrepreneurial Vision)',
    category: 'keti',
    categoryLabelSl: 'Podjetniški Projekt',
    categoryLabelEn: 'Entrepreneurial Project',
    descriptionSl: 'Moja dolgoročna podjetniška ideja pod vzdevkom KETI. Povsem nov kulinarični koncept prigrizka. Trenutno v zgodnji razvojni fazi – podrobnosti razkrijem ob pravem času!',
    descriptionEn: 'My long-term venture under my nickname KETI. A brand new snacking experience. Currently in early concept R&D—details will be unveiled at the right moment!',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    tagsSl: ['KETI Brand', 'Podjetništvo', 'Gourmet', 'Coming Soon'],
    tagsEn: ['KETI Brand', 'Entrepreneurship', 'Gourmet', 'Coming Soon'],
    badgeSl: '★ PODJETNIŠKA VIZIJA • COMING SOON',
    badgeEn: '★ ENTREPRENEURIAL VISION • COMING SOON',
    colSpan: 'md:col-span-2'
  },
  {
    id: 'keti-2',
    titleSl: 'Identiteta & Embalaža (Teaser)',
    titleEn: 'Identity & Packaging (Teaser)',
    category: 'keti',
    categoryLabelSl: 'Konceptualni Dizajn',
    categoryLabelEn: 'Conceptual Design',
    descriptionSl: 'Konceptualna vizualna podoba, barvna paleta in oblikovanje embalaže za prihajajočo blagovno znamko.',
    descriptionEn: 'Conceptual visual identity, aesthetic color palette, and packaging design for the upcoming snack brand.',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=800&q=80',
    tagsSl: ['Embalaža', 'Dizajn', 'Skrivnost'],
    tagsEn: ['Packaging', 'Design', 'Teaser'],
    badgeSl: 'TEASER',
    badgeEn: 'TEASER',
    colSpan: 'md:col-span-1'
  }
];

const Projects: React.FC<ProjectsProps> = ({ language, activeFilter = 'none', onFilterChange }) => {
  const t = translations[language].projects;

  const handleFilterClick = (newFilter: string) => {
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  const isVisible = activeFilter !== 'none';
  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projekti" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-background border-t border-zinc-900 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <Reveal direction="down" className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-neon-green"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t.detailsLabel}: {language === 'sl' ? 'Primeri del po področjih' : 'Work examples by discipline'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-emerald-400 to-cyan-400">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </Reveal>

        {/* Big Prominent Category Buttons */}
        <div className="mb-12">
          <p className="text-center font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
            {t.instruction}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            
            {/* 1. Web */}
            <button
              onClick={() => handleFilterClick('web')}
              className={`p-5 rounded border-2 transition-all duration-300 text-left flex flex-col justify-between group ${
                activeFilter === 'web'
                  ? 'bg-neon-green/10 border-neon-green shadow-[0_0_25px_rgba(204,255,0,0.25)]'
                  : 'bg-zinc-900 border-zinc-800 hover:border-neon-green hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">💻</span>
                <span className="font-mono text-xs text-neon-green font-bold">01</span>
              </div>
              <div>
                <span className="block font-black uppercase text-base sm:text-lg text-white group-hover:text-neon-green transition-colors">
                  {t.filters.web}
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5 block">
                  {language === 'sl' ? 'React • WordPress • Custom' : 'React • WordPress • Custom'}
                </span>
              </div>
            </button>

            {/* 2. Photo & Video */}
            <button
              onClick={() => handleFilterClick('photo')}
              className={`p-5 rounded border-2 transition-all duration-300 text-left flex flex-col justify-between group ${
                activeFilter === 'photo'
                  ? 'bg-cyan-500/10 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.25)]'
                  : 'bg-zinc-900 border-zinc-800 hover:border-cyan-400 hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">📸</span>
                <span className="font-mono text-xs text-cyan-400 font-bold">02</span>
              </div>
              <div>
                <span className="block font-black uppercase text-base sm:text-lg text-white group-hover:text-cyan-400 transition-colors">
                  {t.filters.photoVideo}
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5 block">
                  {language === 'sl' ? 'Kamera • Shooti • Kadri' : 'Camera • Shoots • Stills'}
                </span>
              </div>
            </button>

            {/* 3. Brands & Social Media */}
            <button
              onClick={() => handleFilterClick('social')}
              className={`p-5 rounded border-2 transition-all duration-300 text-left flex flex-col justify-between group ${
                activeFilter === 'social'
                  ? 'bg-neon-pink/10 border-neon-pink shadow-[0_0_25px_rgba(255,0,255,0.25)]'
                  : 'bg-zinc-900 border-zinc-800 hover:border-neon-pink hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🏢</span>
                <span className="font-mono text-xs text-neon-pink font-bold">03</span>
              </div>
              <div>
                <span className="block font-black uppercase text-base sm:text-lg text-white group-hover:text-neon-pink transition-colors">
                  {t.filters.social}
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5 block">
                  {language === 'sl' ? 'Znamke & Primeri del' : 'Brands & Work Examples'}
                </span>
              </div>
            </button>

            {/* 4. KETI Snack Brand */}
            <button
              onClick={() => handleFilterClick('keti')}
              className={`p-5 rounded border-2 transition-all duration-300 text-left flex flex-col justify-between group ${
                activeFilter === 'keti'
                  ? 'bg-yellow-400/10 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.25)]'
                  : 'bg-zinc-900 border-zinc-800 hover:border-yellow-400 hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🧀</span>
                <span className="font-mono text-xs text-yellow-400 font-bold">04</span>
              </div>
              <div>
                <span className="block font-black uppercase text-base sm:text-lg text-white group-hover:text-yellow-400 transition-colors">
                  {t.filters.keti}
                </span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5 block">
                  {language === 'sl' ? 'Podjetniška Ideja • Teaser' : 'Dream Venture • Teaser'}
                </span>
              </div>
            </button>

          </div>

          {/* Show All / Reset Secondary Controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full transition-colors border ${
                activeFilter === 'all'
                  ? 'bg-zinc-200 text-black border-white font-bold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
              }`}
            >
              {t.showAll}
            </button>

            {isVisible && (
              <button
                onClick={() => handleFilterClick('none')}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-zinc-300 underline underline-offset-4"
              >
                {t.reset} ✕
              </button>
            )}
          </div>
        </div>

        {/* Content Area: Either prompt box (if nothing clicked yet) OR revealed project grid */}
        {!isVisible ? (
          <div className="p-8 sm:p-12 text-center border-2 border-dashed border-zinc-800 rounded bg-zinc-950/60 max-w-3xl mx-auto">
            <div className="text-4xl mb-3">👆</div>
            <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-2">
              {language === 'sl' ? 'Izberi področje zgoraj' : 'Select a category above'}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-zinc-400 max-w-md mx-auto mb-6">
              {language === 'sl'
                ? 'Klikni na enega od zgornjih gumbov za prikaz primerov spletnih strani, foto/video del, znamk in družbenih omrežij ali KETI koncepta.'
                : 'Click any of the buttons above to explore websites, camera works, brand partners and social media, or the KETI brand concept.'}
            </p>
            <button
              onClick={() => handleFilterClick('all')}
              className="px-6 py-2.5 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-wider text-xs font-mono rounded transition-colors"
            >
              {t.showAll} →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {filteredProjects.map((project, index) => {
              const isPlaceholder = project.isPlaceholder;
              const title = language === 'sl' ? project.titleSl : project.titleEn;
              const badge = language === 'sl' ? project.badgeSl : project.badgeEn;
              const categoryLabel = language === 'sl' ? project.categoryLabelSl : project.categoryLabelEn;
              const description = language === 'sl' ? project.descriptionSl : project.descriptionEn;
              const tags = language === 'sl' ? project.tagsSl : project.tagsEn;

              const borderHover = project.category === 'keti'
                ? 'hover:border-yellow-400'
                : project.category === 'photo'
                ? 'hover:border-cyan-400'
                : project.category === 'social'
                ? 'hover:border-neon-pink'
                : 'hover:border-neon-green';

              return (
                <div 
                  key={project.id} 
                  className={`relative group overflow-hidden bg-zinc-900 border-2 border-zinc-800 rounded-sm transition-all duration-300 min-h-[380px] flex flex-col justify-end ${borderHover} ${project.colSpan || ''}`}
                >
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      isPlaceholder ? 'opacity-40 grayscale contrast-125' : 'opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80'
                    }`}
                  />

                  {/* Camera Viewfinder Overlay for Photo & Video Teasers */}
                  {project.cameraOverlay && (
                    <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between z-10 border border-white/10 m-3">
                      <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                          <span className="font-bold">REC [4K 60FPS]</span>
                        </div>
                        <span>ISO 400 • f/2.8 • 1/250s</span>
                      </div>

                      <div className="self-center border border-white/20 w-12 h-12 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400/80"></span>
                      </div>

                      <div className="flex justify-between text-[9px] font-mono text-zinc-400">
                        <span>RAW • 16:9</span>
                        <span>KETI SHUTTER LAB</span>
                      </div>
                    </div>
                  )}

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

                  {/* Content info */}
                  <div className="relative z-20 p-6 sm:p-8 flex flex-col justify-end">
                    
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-neon-green font-bold">
                        {categoryLabel}
                      </span>

                      {badge && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-800 text-yellow-300 border border-yellow-500/30 uppercase tracking-widest">
                          {badge}
                        </span>
                      )}
                    </div>

                    {/* Title with Full Bilingual Support */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                      {tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 bg-black/60 border border-zinc-800 text-zinc-400 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA to inquire */}
        <Reveal direction="up" delay={200} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-zinc-900 border border-zinc-800 rounded-sm">
            <span className="text-xs sm:text-sm font-mono text-zinc-300">
              {language === 'sl' 
                ? 'Imaš idejo za projekt ali želiš sodelovati?' 
                : 'Have an idea or want to collaborate on any of these?'}
            </span>
            <a
              href="#kontakt"
              className="px-5 py-2.5 bg-neon-green hover:bg-white text-black font-bold uppercase tracking-wider text-xs font-mono rounded-sm transition-colors"
            >
              {language === 'sl' ? 'Pošlji povpraševanje' : 'Send Inquiry'} →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;
