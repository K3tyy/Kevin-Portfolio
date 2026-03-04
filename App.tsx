import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-background text-zinc-100 font-sans overflow-hidden">
      {/* Optional Custom Cursor for extra edgy vibe */}
      <CustomCursor />

      <main>
        <Hero />
        <Marquee text="ODPRT ZA NORIH PROJEKTOV • FRONTEND MAGIC • REACT NINJA • PIXEL PERFECTION • " />
        <About />
        
        <Projects />
        {/* Skills section removed per request for cleaner flow */}
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;