
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ['Collection', 'Heritage', 'Gifts', 'Boutique'];

  return (
    <nav className={`transition-all duration-500 ${isScrolled ? 'py-4 border-b border-stone-100 shadow-sm' : 'py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between relative">
          
          {/* Left Actions */}
          <div className="flex-1 hidden md:flex items-center space-x-8">
             {categories.slice(0, 2).map(cat => (
               <a key={cat} href="#" className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}>
                 {cat}
               </a>
             ))}
          </div>

          {/* Logo - Centered */}
          <div className="flex-none">
            <h1 className={`text-2xl md:text-3xl tracking-[0.5em] font-light transition-colors serif ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              GOUPDA
            </h1>
          </div>

          {/* Right Actions */}
          <div className="flex-1 flex justify-end items-center space-x-6 md:space-x-8">
            <div className={`hidden md:flex space-x-8 mr-8`}>
               {categories.slice(2).map(cat => (
                 <a key={cat} href="#" className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${isScrolled ? 'text-stone-500 hover:text-stone-900' : 'text-white/80 hover:text-white'}`}>
                   {cat}
                 </a>
               ))}
            </div>
            
            <button className={`p-1 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className={`p-1 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </button>
            
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMenuOpen(false)}>
        <div 
          className={`absolute left-0 top-0 bottom-0 w-[80%] bg-white p-8 transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl tracking-[0.3em] font-light serif">GOUPDA</span>
            <button onClick={() => setIsMenuOpen(false)}>
               <svg className="w-6 h-6 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="space-y-8">
            {['New Collection', 'Skincare Heritage', 'Wellness Rituals', 'Store Locator'].map(item => (
              <a key={item} href="#" className="block text-lg font-light tracking-widest text-stone-800 uppercase border-b border-stone-50 pb-2">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
