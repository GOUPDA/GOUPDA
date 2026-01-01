
import React from 'react';

interface HeroProps {
  customImage?: string;
  brandName?: string;
}

const Hero: React.FC<HeroProps> = ({ customImage, brandName = "GOUPDA" }) => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#A9B7B0] flex items-center justify-center">
      {/* Background Lighting Effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#B8C5BD] via-[#A9B7B0] to-[#99A8A1]"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.4)_0%,_transparent_60%)]"></div>

      {/* Background Image */}
      {customImage && customImage !== 'none' && (
        <div className="absolute inset-0 z-0">
          <img 
            src={customImage} 
            alt="GOUPDA Visual" 
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      )}

      {/* Abstract Luxury Object (The Red Jar) */}
      {!customImage || customImage === 'none' ? (
        <div className="relative z-20 flex flex-col items-center">
          <div className="absolute -bottom-10 w-[70%] h-12 bg-black/20 blur-2xl rounded-[100%] scale-x-125 origin-center"></div>
          
          <div className="relative w-64 h-64 md:w-96 md:h-96 group transition-transform duration-1000">
            <div className="absolute inset-0 bg-[#D93025] rounded-full blur-[100px] opacity-15 animate-pulse"></div>
            
            <div className="relative w-full h-full bg-[#D93025] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-700 group-hover:scale-[1.01] overflow-hidden">
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[100%] transition-all duration-[1500ms]"></div>
              
              <div className="absolute top-[32%] left-0 right-0 h-[0.5px] bg-black/10"></div>
              
              <div className="flex flex-col items-center pointer-events-none">
                <span className="text-white/30 text-[9px] uppercase tracking-[1.5em] mb-1">Elegance</span>
                <span className="text-white/20 text-[7px] uppercase tracking-[1.2em]">Craftsmanship</span>
              </div>
              
              <div className="absolute bottom-12 text-white/40 text-[10px] tracking-[0.6em] uppercase font-light">
                {brandName}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Hero;
