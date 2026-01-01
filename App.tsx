
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import CategoryGrid from './components/CategoryGrid.tsx';
import FeaturedCampaign from './components/FeaturedCampaign.tsx';
import ProductShowcase from './components/ProductShowcase.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden">
      {/* Transparent Navbar that solidifies on scroll */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md translate-y-0' : 'bg-transparent -translate-y-2'}`}>
        <Navbar isScrolled={isScrolled} />
      </div>

      <main>
        {/* Full-screen entry */}
        <Hero />
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-24 space-y-32">
          {/* Brand Intro with high-end typography */}
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h3 className="text-sm tracking-[0.4em] uppercase text-stone-400 font-medium">The Goupda Philosophy</h3>
            <h2 className="text-4xl md:text-6xl serif font-light text-stone-900 leading-tight">
              A Symphony of Traditional Grace <br className="hidden md:block"/> and Modern Wellness
            </h2>
            <p className="text-stone-500 font-light leading-loose text-sm md:text-lg">
              Drawing inspiration from the serene landscapes of the East and the timeless rituals of Korean beauty, 
              GOUPDA creates a bridge between heritage and your daily skin wellness. 
              Each formula is a masterpiece, each vessel an objet d'art.
            </p>
          </div>

          <CategoryGrid />
          
          <FeaturedCampaign 
            title="Heritage in Every Drop" 
            description="Our Crimson Collection utilizes fermented Red Pine extracts, harvested during the first frost to capture the peak of nature's resilience."
            image="https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=2070&auto=format&fit=crop"
            reverse={false}
          />

          <ProductShowcase />

          <FeaturedCampaign 
            title="Elegance Refined" 
            description="True wellness starts with the soul. Our textures are designed to soothe the senses, providing a ritualistic moment of peace in a fast-paced world."
            image="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2070&auto=format&fit=crop"
            reverse={true}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;