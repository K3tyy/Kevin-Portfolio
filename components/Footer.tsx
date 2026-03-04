import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-zinc-900 text-center px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500 font-mono text-sm">
          © {new Date().getFullYear()} Zgrajeno z <span className="text-neon-pink">♥</span> in čisto motivacijo.
        </p>
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-zinc-400">
          <a href="https://www.instagram.com/kraljkevin/" className="hover:text-neon-pink transition-colors">Instagram</a>
          <a href="https://www.facebook.com/kevin.kralj.39" className="hover:text-blue-600 transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;