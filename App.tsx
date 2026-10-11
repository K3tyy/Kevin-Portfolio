import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import { Language, translations } from './translations';

function App() {
  const [language, setLanguage] = useState<Language>('sl');
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('none');

  const marqueeText = translations[language].marquee;

  const handleSelectCategory = (category: string) => {
    setActiveProjectFilter(category);
  };

  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans overflow-x-hidden selection:bg-neon-green selection:text-black">
      {/* Optional Custom Cursor for extra edgy vibe */}
      <CustomCursor />

      {/* Floating / Sticky Navigation with Language Switcher */}
      <Navbar 
        language={language} 
        onLanguageChange={setLanguage} 
      />

      <main className="w-full">
        {/* Hero Section */}
        <Hero language={language} />

        {/* Dynamic Infinite Marquee */}
        <Marquee text={marqueeText} />

        {/* About & Life CV Story (100k+ followers, 20yo, DaVinci, Camera, KETI) */}
        <About language={language} />

        {/* Services & Skills (Web Dev, Photo/Video, Social Media 100k+, KETI Brand) */}
        <Services 
          language={language} 
          onSelectCategory={handleSelectCategory}
        />

        {/* Projects & Showcase (5 categories with camera frames & teasers) */}
        <Projects 
          language={language} 
          activeFilter={activeProjectFilter}
          onFilterChange={setActiveProjectFilter}
        />

        {/* Web Pricing & Friendly Consultation */}
        <Pricing language={language} />

        {/* Testimonials */}
        <Testimonials language={language} />

        {/* Contact Form with Topic Dropdown & Socials including TikTok */}
        <Contact language={language} />
      </main>
      
      {/* Footer with TikTok, Instagram, Facebook */}
      <Footer language={language} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
