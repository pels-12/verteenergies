import React from 'react';
import { GROWTH_GOALS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Growth: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const esgAnimation = useScrollAnimation('fade-in-up', { once: true });

  return (
    <section id="esg" className="py-20 md:py-28 bg-verte-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`max-w-3xl mb-14 ${titleAnimation.className}`}>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Roadmap</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-verte-black mb-5 leading-tight">
            Growth with the systems to support it.
          </h2>
          <p className="text-slate-600 leading-7">
            Verte's strategy is to scale through stronger delivery systems, disciplined partnerships, and practical
            sustainability commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/10 border border-black/10 mb-14">
          {GROWTH_GOALS.map((goal, index) => {
            const goalAnimation = useScrollAnimation('fade-in-up', { once: true, margin: '0px 0px -50px 0px' });
            return (
              <article key={goal.title} ref={goalAnimation.ref} className={`bg-white p-7 sm:p-8 ${goalAnimation.className}`}>
                <div className="flex items-center justify-between mb-9">
                  <span className="text-4xl font-extrabold text-verte-black/10">0{index + 1}</span>
                  <goal.icon className="h-7 w-7 text-verte-gold" strokeWidth={1.7} />
                </div>
                <p className="text-xs font-semibold text-verte-gold uppercase tracking-widest mb-3">{goal.period}</p>
                <h3 className="text-xl font-bold text-verte-black mb-4">{goal.title}</h3>
                <p className="text-slate-600 text-sm leading-6">{goal.description}</p>
              </article>
            );
          })}
        </div>

        <div ref={esgAnimation.ref} className={`grid lg:grid-cols-[0.9fr_1.1fr] bg-verte-green text-verte-white ${esgAnimation.className}`}>
          <div className="min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop"
              alt="Engineer at an industrial site"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Sustainability</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">ESG is a delivery discipline.</h3>
            <p className="text-verte-white/78 leading-8 mb-8">
              We treat environmental stewardship, workforce development, community relationships, and governance as
              operational requirements, not presentation material.
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-verte-gold/30 border border-verte-gold/30">
              <div className="bg-verte-green p-5">
                <p className="font-bold">HSE Controls</p>
                <p className="text-sm text-verte-white/65 mt-2">Project planning and site execution standards.</p>
              </div>
              <div className="bg-verte-green p-5">
                <p className="font-bold">Local Capacity</p>
                <p className="text-sm text-verte-white/65 mt-2">Training, compliance, and Nigerian content value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
