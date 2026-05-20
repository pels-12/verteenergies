import React from 'react';
import { Eye, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const VisionMission: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const cardsAnimation = useScrollAnimation('fade-in-up', { once: true });

  return (
    <section id="vision" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`max-w-3xl mb-14 ${titleAnimation.className}`}>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Our Direction</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-verte-black leading-tight">
            Clear purpose. Practical execution.
          </h2>
        </div>

        <div ref={cardsAnimation.ref} className={`grid lg:grid-cols-2 border border-black/10 ${cardsAnimation.className}`}>
          <article className="p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/10">
            <Eye className="h-8 w-8 text-verte-gold mb-8" strokeWidth={1.7} />
            <h3 className="text-2xl font-bold text-verte-black mb-5">Vision</h3>
            <p className="text-slate-700 leading-8">
              To become a trusted indigenous energy and engineering solutions provider in West Africa, recognised
              for operational discipline, technical competence, and sustainable value creation.
            </p>
          </article>

          <article className="p-8 sm:p-10 lg:p-12 bg-verte-green text-verte-white">
            <Target className="h-8 w-8 text-verte-gold mb-8" strokeWidth={1.7} />
            <h3 className="text-2xl font-bold mb-5">Mission</h3>
            <p className="text-verte-white/78 leading-8">
              To deliver integrated energy, engineering, and infrastructure solutions that meet oil and gas industry
              demands while maintaining high standards for safety, quality, compliance, and client service.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
