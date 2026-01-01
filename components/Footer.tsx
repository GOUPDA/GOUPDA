
import React from 'react';

interface FooterProps {
  brandName: string;
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ brandName, onAdminClick }) => {
  return (
    <footer className="bg-stone-50 border-t border-stone-100 pt-24 pb-12 px-4 md:px-12 mt-32">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        {/* Newsletter */}
        <div className="md:col-span-1 space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-stone-900">Newsletter</h4>
          <p className="text-xs text-stone-500 font-light leading-relaxed">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-stone-200 py-2 text-xs focus:outline-none focus:border-stone-900 transition-colors"
            />
            <button className="absolute right-0 bottom-2 text-stone-400 group-hover:text-stone-900 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-stone-900">Services</h4>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-stone-500 font-light">
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Contact Us</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">FAQ</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Store Locator</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Shipping & Returns</li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-stone-900">The House</h4>
          <ul className="space-y-3 text-[11px] uppercase tracking-widest text-stone-500 font-light">
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Our Heritage</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Korean Aesthetics</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Sustainability</li>
            <li className="hover:text-stone-900 transition-colors cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Legal/Social */}
        <div className="space-y-6">
          <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-stone-900">Follow Us</h4>
          <div className="flex space-x-6 text-stone-500">
            {[
              { name: 'Instagram', url: 'https://www.instagram.com/asblanc_official/reels/' },
              { name: 'Youtube', url: '#' },
              { name: 'Pinterest', url: '#' }
            ].map(social => (
              <a 
                key={social.name} 
                href={social.url} 
                target={social.url !== '#' ? "_blank" : undefined}
                rel={social.url !== '#' ? "noopener noreferrer" : undefined}
                className="text-[10px] uppercase tracking-[0.2em] font-light hover:text-stone-900 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
          <div className="pt-4">
             <h1 className="text-2xl tracking-[0.4em] font-light text-stone-900 leading-none">{brandName}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[9px] uppercase tracking-widest text-stone-400 font-light">
          © 2024 {brandName}. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-8 text-[9px] uppercase tracking-widest text-stone-400 font-light">
          <a href="#" className="hover:text-stone-900">Privacy Policy</a>
          <a href="#" className="hover:text-stone-900">Terms of Service</a>
          <a href="#" className="hover:text-stone-900">Cookies Settings</a>
          {onAdminClick && (
            <button 
              onClick={onAdminClick}
              className="hover:text-stone-900 border-l border-stone-200 pl-8 transition-colors font-medium text-stone-300"
            >
              ADMIN
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
