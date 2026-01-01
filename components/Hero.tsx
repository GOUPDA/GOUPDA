
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row">
      {/* Left Panel: The Product Concept */}
      <div className="relative w-full h-1/2 md:h-full md:w-1/2 bg-[#B5C2BA] flex flex-col items-center justify-center overflow-hidden">
        {/* Decorative subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }}></div>
        
        {/* Logo Overlay Top */}
        <div className="absolute top-12 md:top-20 z-10">
           <h1 className="text-4xl md:text-6xl tracking-[0.3em] font-light text-white serif opacity-90">
              GOUPDA
           </h1>
        </div>

        {/* Product Image Placeholder (Signature Red Jar) */}
        <div className="relative z-0 transform hover:scale-105 transition-transform duration-1000">
          <div className="w-48 h-48 md:w-80 md:h-80 bg-[#D93025] rounded-t-lg shadow-2xl relative">
             {/* Jar Lid detail */}
             <div className="absolute top-0 w-full h-1/3 border-b border-black/10"></div>
             {/* Subtle Logo on Jar */}
             <div className="absolute bottom-12 right-6">
                <span className="text-[10px] tracking-widest text-white/40 uppercase">GOUPDA</span>
             </div>
          </div>
          {/* Shadow */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-black/10 blur-xl rounded-full"></div>
        </div>

        {/* Tagline Bottom */}
        <div className="absolute bottom-12 px-8 text-center max-w-xs">
          <p className="text-[10px] md:text-xs leading-relaxed text-white font-light tracking-wide italic serif">
            To redefine beauty as elegance and wellness, inspired by Korean aesthetics.
          </p>
        </div>
      </div>

      {/* Right Panel: The Heritage Concept */}
      <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden flex flex-col items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1548115184-bc65ee477ad9?q=80&w=2070&auto=format&fit=crop" 
          alt="Korean Palace Heritage" 
          className="absolute inset-0 w-full h-full object-cover scale-110 md:scale-100 grayscale-[0.2] brightness-95"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Logo Overlay Center */}
        <div className="relative z-10 text-center space-y-4">
           <h2 className="text-4xl md:text-6xl tracking-[0.3em] font-light text-white serif">
              GOUPDA
           </h2>
           <p className="text-[10px] md:text-xs leading-relaxed text-white/90 font-light tracking-widest max-w-[250px] mx-auto uppercase">
             To redefine beauty as elegance and wellness, inspired by Korean aesthetics.
           </p>
        </div>
      </div>

      {/* Center Divider Logo (Floating transition) */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-px h-32 bg-white/20"></div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-white animate-pulse"></div>
        <span className="text-[8px] uppercase tracking-[0.5em] text-white">Explore</span>
      </div>
    </section>
  );
};

export default Hero;
