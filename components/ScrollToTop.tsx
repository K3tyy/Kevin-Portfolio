import React, { useState, useEffect } from 'react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-zinc-950/90 hover:bg-neon-green text-neon-green hover:text-black border-2 border-neon-green/80 rounded-sm flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:scale-110 group"
    >
      <svg 
        className="w-5 h-5 fill-none stroke-current transition-transform group-hover:-translate-y-1" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        viewBox="0 0 24 24"
      >
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
