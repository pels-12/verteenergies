import React from 'react';
import { CORE_VALUES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const imageAnimation = useScrollAnimation('fade-in-right', { once: true });

  return (
    <section id="about" className="py-20 md:py-28 bg-verte-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">About Verte</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-verte-black mb-7 leading-tight">
              Nigerian energy and engineering delivery, built on accountability.
            </h2>

            <div className="space-y-5 text-slate-700 leading-8">
              <p>
                Verte Energies Limited is a fully indigenous Nigerian energy and engineering company incorporated
                under the Companies and Allied Matters Act. The company serves oil, gas, engineering, procurement,
                marine inspection, and infrastructure clients with a practical focus on safety, quality, and delivery.
              </p>
              <p>
                Headquartered in Abuja with offices in Lagos and Enugu, Verte was established to connect global
                engineering standards with local execution realities. Our work supports upstream, downstream,
                construction, technical support, and energy infrastructure programmes.
              </p>
              <p className="border-l-2 border-verte-gold pl-5 text-verte-black">
                Registration with industry platforms and compliance frameworks underpins how we approach projects:
                clear governance, capable teams, and disciplined site execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {CORE_VALUES.slice(0, 4).map((value) => (
                <div key={value.title} className="border border-black/10 bg-white p-5">
                  <value.icon className="h-5 w-5 text-verte-gold mb-4" strokeWidth={1.7} />
                  <h4 className="font-bold text-verte-black mb-2">{value.title}</h4>
                  <p className="text-sm leading-6 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageAnimation.ref} className={`relative ${imageAnimation.className}`}>
            <div className="aspect-[4/5] overflow-hidden bg-verte-green">
              <img
                src="/images/services/engineering.png"
                alt="Engineering operations"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-verte-black text-verte-white p-6 sm:p-7 w-[min(22rem,85%)] border-t-4 border-verte-gold">
              <p className="text-3xl font-extrabold text-verte-gold">100%</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest">Indigenous Nigerian Company</p>
              <p className="mt-3 text-sm leading-6 text-verte-white/70">RC 8114494 with a governance-led delivery model.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
