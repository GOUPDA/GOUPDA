
import React from 'react';

const products = [
  { id: 1, name: 'Celestial Crimson Jar', price: '₩ 1,730,000', label: 'Limited Edition', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Azure Essence Bottle', price: '₩ 960,000', label: 'Elegance & Wellness', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Midnight Pine Balm', price: '₩ 960,000', label: 'Korean Heritage', img: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Ethereal Cloud Mist', price: '₩ 800,000', label: 'Wellness Collection', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-light serif tracking-tight">To the Peak of Radiance</h2>
        <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500 font-medium">The pinnacle of Korean skincare craft</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {products.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <div className="aspect-[4/5] bg-stone-50 overflow-hidden mb-5 relative">
              <img 
                src={p.img} 
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest font-medium">
                {p.label}
              </div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-sm tracking-widest font-light text-stone-900 group-hover:text-stone-500 transition-colors uppercase">{p.name}</h3>
              <p className="text-xs text-stone-500 font-light italic serif">{p.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button className="border border-stone-200 px-12 py-3.5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductShowcase;
