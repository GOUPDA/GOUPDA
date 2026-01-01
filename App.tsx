
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import CategoryGrid from './components/CategoryGrid.tsx';
import FeaturedCampaign from './components/FeaturedCampaign.tsx';
import Footer from './components/Footer.tsx';
import AdminPanel from './components/AdminPanel.tsx';

const STORAGE_KEY = 'goupda_brand_content';

const DEFAULT_CONTENT = {
  global: {
    brandName: 'GOUPDA',
  },
  hero: {
    image: 'none',
  },
  philosophy: {
    title: 'Inspired by the Precision of Korean Aesthetics',
    desc: 'Inspired by the world-renowned premium Korean aesthetic rituals, GOUPDA is meticulously engineered to illuminate your skin both inside and out. We present a new dimension of skincare born to transcend ordinary results—redefining your beauty and turning back the hands of time.',
  },
  categories: [
    { id: 1, name: 'The Crimson Ritual', label: 'Aesthetic Wisdom', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'The Azure Essence', label: 'Modern Wellness', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200&auto=format&fit=crop' },
  ],
  campaigns: [
    {
      title: 'Heritage in Every Drop',
      description: 'Our Crimson Collection utilizes fermented Red Pine extracts, harvested during the first frost to capture the peak of nature\'s resilience. A fusion of tradition and biotechnology.',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop'
    }
  ]
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Initialize state from LocalStorage or use Default
  const [brandContent, setBrandContent] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-stone-200 selection:text-stone-900 overflow-x-hidden relative">
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md translate-y-0' : 'bg-transparent -translate-y-2'}`}>
        <Navbar isScrolled={isScrolled} brandName={brandContent.global.brandName} />
      </div>

      <main>
        <Hero customImage={brandContent.hero.image} brandName={brandContent.global.brandName} />
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-24 space-y-32 pb-48">
          {/* Brand Philosophy Section */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h3 className="text-sm tracking-[0.4em] uppercase text-stone-400 font-medium">The {brandContent.global.brandName} Philosophy</h3>
            <h2 className="text-4xl md:text-6xl serif font-light text-stone-900 leading-tight">
              {brandContent.philosophy.title}
            </h2>
            <p className="text-stone-500 font-light leading-loose text-sm md:text-lg max-w-3xl mx-auto">
              {brandContent.philosophy.desc}
            </p>
          </div>

          <CategoryGrid categories={brandContent.categories} />
          
          <FeaturedCampaign 
            title={brandContent.campaigns[0].title} 
            description={brandContent.campaigns[0].description}
            image={brandContent.campaigns[0].image}
            reverse={false}
          />
        </div>
      </main>

      <Footer 
        brandName={brandContent.global.brandName}
        onAdminClick={() => setIsAdminOpen(true)} 
      />

      {isAdminOpen && (
        <AdminPanel 
          content={brandContent} 
          setContent={setBrandContent} 
          onClose={() => setIsAdminOpen(false)} 
        />
      )}
    </div>
  );
};

export default App;
