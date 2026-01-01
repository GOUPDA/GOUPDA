
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#B5C2BA] flex items-center justify-center">
      {/* Decorative subtle leather-like texture overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }}></div>
      
      {/* Background Gradient for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10"></div>

      {/* Product Showcase (Signature Red Jar) - Now Centered and Focal Point */}
      <div className="relative z-10 transform hover:scale-105 transition-transform duration-1000 flex flex-col items-center">
        <div className="w-56 h-56 md:w-96 md:h-96 bg-[#D93025] rounded-t-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative">
           {/* Jar Lid detail */}
           <div className="absolute top-0 w-full h-1/3 border-b border-black/10"></div>
           
           {/* Minimal Logo on Jar (Part of the product object) */}
           <div className="absolute bottom-12 right-8">
              <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/40 uppercase font-light">GOUPDA</span>
           </div>
        </div>
        
        {/* Soft Shadow below the product */}
        <div className="mt-4 w-[120%] h-12 bg-black/10 blur-2xl rounded-full"></div>
      </div>

      {/* Floating Center Divider (Subtle minimalist line) */}
      <div className="absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-px bg-white/10 hidden md:block"></div>
      
      {/* Scroll indicator - Functionality preserved for UX */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-16 bg-white/60 animate-[bounce_2s_infinite]"></div>
        <span className="text-[8px] uppercase tracking-[0.6em] text-white font-light">Discover</span>
      </div>
    </section>
  );
};

export default Hero;
