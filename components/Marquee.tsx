import React from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  // Repeat text to ensure continuous scrolling
  const repeatedText = Array(4).fill(text).join(' ');

  return (
    <div className="w-full bg-neon-green py-3 overflow-hidden border-y-2 border-black rotate-1 scale-105 relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        <h2 className="text-black font-black uppercase tracking-widest text-xl md:text-2xl mr-4">
          {repeatedText}
        </h2>
        <h2 className="text-black font-black uppercase tracking-widest text-xl md:text-2xl mr-4">
          {repeatedText}
        </h2>
      </div>
    </div>
  );
};

export default Marquee;