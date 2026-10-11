import React, { useState } from 'react';
import Reveal from './Reveal';
import { Language, translations } from '../translations';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'web',
    message: ''
  });

  const t = translations[language].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending form message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', service: 'web', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-zinc-900 relative">
      
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-pink/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-neon-green/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Text & Socials Side */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Reveal direction="right">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[2px] w-8 bg-neon-green inline-block"></span>
              <span className="text-neon-green font-mono uppercase tracking-widest text-xs font-bold">
                {language === 'sl' ? 'Začni sodelovanje' : 'Get In Touch'}
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.95]">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-orange-400 to-yellow-400">
                {t.titleHighlight}
              </span>
            </h2>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-md leading-relaxed">
              {t.subtitle}
            </p>
          </Reveal>
          
          <Reveal direction="right" delay={250}>
            <div className="flex flex-col gap-6 font-mono">
              
              {/* Email direct link */}
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                  {t.emailLabel}
                </span>
                <a 
                  href="mailto:kevinkralj44@gmail.com" 
                  className="text-white hover:text-neon-green transition-colors flex items-center gap-3 group text-base sm:text-lg"
                >
                  <span className="w-9 h-9 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-neon-green transition-colors font-bold text-xs">
                    @
                  </span>
                  <span className="underline underline-offset-4 decoration-zinc-700 group-hover:decoration-neon-green break-all">
                    kevinkralj44@gmail.com
                  </span>
                </a>
              </div>

              {/* Socials with prominent appealing hover glows */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="text-xs uppercase text-zinc-500 font-bold tracking-wider">
                  {t.socialsTitle}
                </span>
                
                <div className="flex flex-wrap gap-3">
                  
                  {/* TikTok with matching default styling and iconic authentic dual-glow on hover */}
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-11 px-4 bg-zinc-900 border border-zinc-700 hover:bg-black hover:border-[#00f2fe] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 rounded transition-all duration-300 hover:scale-105 hover:shadow-[3px_3px_0px_#ff004f,-3px_-3px_0px_#00f2fe]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 1 0 6.34 6.34V8.75a8.28 8.28 0 0 0 4.77 1.48v-3.54z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>

                  {/* Instagram with vibrant gradient & glow on hover */}
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-11 px-4 bg-zinc-900 border border-zinc-700 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,39,67,0.7)]"
                  >
                    <svg className="w-4 h-4 fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* Facebook with vibrant brand blue & glow on hover */}
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-11 px-4 bg-zinc-900 border border-zinc-700 hover:bg-[#1877F2] hover:border-[#1877F2] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(24,119,242,0.7)]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>

                </div>
              </div>

            </div>
          </Reveal>
        </div>

        {/* Right Form Side with Topic Selector */}
        <div className="lg:col-span-7">
          <Reveal direction="left" delay={200} className="bg-background border-2 border-zinc-800 p-6 sm:p-10 relative group rounded-sm shadow-2xl">
            
            {/* Corner geometric accents */}
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-neon-green -translate-y-2 translate-x-2 transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-neon-pink translate-y-2 -translate-x-2 transition-transform duration-300 group-hover:-translate-x-3 group-hover:translate-y-3"></div>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
                <span className="w-16 h-16 rounded-full bg-neon-green/20 border-2 border-neon-green text-neon-green flex items-center justify-center text-3xl font-black">
                  ✓
                </span>
                <h3 className="text-2xl font-black uppercase text-white">
                  {language === 'sl' ? 'Sporočilo prejeto!' : 'Message Received!'}
                </h3>
                <p className="text-zinc-300 max-w-sm font-mono text-sm">
                  {t.form.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {t.form.nameLabel}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.form.namePlaceholder} 
                    className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-neon-green p-3.5 text-white text-base rounded-sm focus:outline-none transition-colors"
                  />
                </div>
                
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {t.form.emailLabel}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.form.emailPlaceholder} 
                    className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-neon-green p-3.5 text-white text-base rounded-sm focus:outline-none transition-colors"
                  />
                </div>

                {/* Topic / Service selector */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {t.form.serviceLabel}
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-neon-green p-3.5 text-white text-base rounded-sm focus:outline-none transition-colors font-mono cursor-pointer"
                  >
                    <option value="web">💻 {t.form.services.web}</option>
                    <option value="photoVideo">📸 {t.form.services.photoVideo}</option>
                    <option value="social">📱 {t.form.services.social}</option>
                    <option value="keti">🧀 {t.form.services.keti}</option>
                    <option value="other">💬 {t.form.services.other}</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {t.form.messageLabel}
                  </label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.form.messagePlaceholder} 
                    className="w-full bg-zinc-950/60 border border-zinc-800 focus:border-neon-green p-3.5 text-white text-base rounded-sm focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`mt-2 py-4 px-8 font-black uppercase tracking-widest text-sm sm:text-base transition-all duration-300 border-2 rounded-sm ${
                    isSubmitting 
                      ? 'bg-zinc-800 text-zinc-500 border-zinc-800 cursor-not-allowed' 
                      : 'bg-neon-green text-black border-neon-green hover:bg-white hover:border-white shadow-[0_0_20px_rgba(204,255,0,0.25)]'
                  }`}
                >
                  {isSubmitting ? t.form.submittingBtn : t.form.submitBtn}
                </button>
              </form>
            )}

          </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Contact;
