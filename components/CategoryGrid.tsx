
import React from 'react';

const categories = [
  { id: 1, name: 'Heritage Serum', label: 'Skincare', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Silk Hydration', label: 'Wellness', img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Crimson Velvet', label: 'Makeup', img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Ethereal Mist', label: 'Fragrance', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop' },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {categories.map((cat) => (
        <div key={cat.id} className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-stone-50">
            <img 
              src={cat.img} 
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Minimal overlay effect */}
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-light">{cat.label}</p>
          <h3 className="text-sm md:text-base font-normal text-stone-800 group-hover:text-stone-500 transition-colors uppercase tracking-wider">{cat.name}</h3>
        </div>
      ))}
    </section>
  );
};

export default CategoryGrid;
