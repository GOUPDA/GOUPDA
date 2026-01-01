
import React from 'react';

interface Category {
  id: number;
  name: string;
  label: string;
  img: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {categories.map((cat) => (
        <div key={cat.id} className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[16/11] mb-6 bg-stone-50">
            <img 
              src={cat.img} 
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700"></div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-2 font-medium">{cat.label}</p>
            <h3 className="text-xl md:text-2xl font-light text-stone-900 serif tracking-wide group-hover:opacity-60 transition-opacity uppercase">{cat.name}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryGrid;
