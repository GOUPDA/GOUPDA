
import React from 'react';

interface FeaturedCampaignProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeaturedCampaign: React.FC<FeaturedCampaignProps> = ({ title, description, image, reverse }) => {
  return (
    <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
      <div className="w-full md:w-1/2 overflow-hidden bg-stone-50 aspect-[16/9] md:aspect-[4/5]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-6xl font-light serif text-stone-900 tracking-tight leading-tight">
          {title}
        </h2>
        <div className="w-12 h-[1px] bg-stone-300 mx-auto md:mx-0"></div>
        <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto md:mx-0">
          {description}
        </p>
        <div className="pt-4">
          <a href="#" className="inline-block text-[11px] uppercase tracking-[0.3em] font-medium text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-1 transition-all">
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaign;
