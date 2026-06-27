import React from 'react';
import Link from 'next/link';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  benefits: Benefit[];
}

export function ServiceBenefits({ title, benefits }: ServiceBenefitsProps) {
  const cardColors = ['bg-[#e8f3ff]', 'bg-[#f4e8ff]', 'bg-[#e8fff4]'];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-brand-dark rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white tracking-tight max-w-xl leading-[1.05]">
            Why choose {title.toLowerCase()}?
          </h2>
          <Link 
            href="#apply" 
            className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`${cardColors[idx % 3]} rounded-3xl p-8 flex flex-col h-full transition-transform hover:-translate-y-2`}>
              
              {/* Graphic Placeholder */}
              <div className="w-full h-40 bg-white/60 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
                 <benefit.icon className="w-16 h-16 text-brand-dark/40" />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-brand-dark mb-4 tracking-tight leading-tight">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
