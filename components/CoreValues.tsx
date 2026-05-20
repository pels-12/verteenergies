import React from 'react';
import { CORE_VALUES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CoreValues: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const valuesAnimation = useScrollAnimation('fade-in-up', { once: true });

  return (
    <section id="values" className="py-20 md:py-28 bg-verte-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 ${titleAnimation.className}`}>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Operating Principles</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-verte-black leading-tight">
              Values that show up on site.
            </h2>
          </div>
          <p className="max-w-md text-slate-600 leading-7">
            We keep the value system visible and simple, because project teams need standards that translate into daily decisions.
          </p>
        </div>

        <div ref={valuesAnimation.ref} className={`grid sm:grid-cols-2 lg:grid-cols-5 border-y border-black/10 ${valuesAnimation.className}`}>
          {CORE_VALUES.map((value) => (
            <article key={value.title} className="p-6 border-b sm:border-r border-black/10 last:border-r-0 lg:border-b-0 bg-white">
              <value.icon className="h-6 w-6 text-verte-gold mb-8" strokeWidth={1.7} />
              <h3 className="font-bold text-verte-black text-lg mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-6 text-sm">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
