import React from 'react';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const imageAnimation = useScrollAnimation('fade-in-left', { once: true });
  const contentAnimation = useScrollAnimation('fade-in-right', { once: true });

  return (
    <section id="projects" className="bg-verte-white">
      <div className="grid lg:grid-cols-2 min-h-[720px]">
        <div ref={imageAnimation.ref} className={`relative min-h-[420px] bg-verte-green overflow-hidden ${imageAnimation.className}`}>
          <img
            src="/images/projects/lpg-terminal.jpg"
            alt="LPG terminal infrastructure"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-verte-black/85 via-verte-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14">
            <p className="inline-block bg-verte-gold text-verte-black px-4 py-2 text-xs font-bold uppercase tracking-widest mb-5">
              Featured Development
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-verte-white mb-4">LPG Terminal Facility</h3>
            <div className="flex items-center text-verte-white/78">
              <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="text-sm uppercase tracking-wide">Atabrikang, Akwa Ibom</span>
            </div>
          </div>
        </div>

        <div ref={contentAnimation.ref} className={`flex flex-col justify-center p-7 sm:p-10 lg:p-20 bg-white ${contentAnimation.className}`}>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Featured Project</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-verte-black mb-7 leading-tight">
            20,000 MT storage and distribution hub.
          </h2>
          <p className="text-slate-700 leading-8 mb-10">
            A strategic LPG infrastructure project designed to improve availability and distribution capacity in
            Southern Nigeria. The facility reflects Verte's focus on infrastructure that is commercially useful,
            technically sound, and locally relevant.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 border-t border-black/10 pt-8">
            <div>
              <p className="text-4xl font-extrabold text-verte-black mb-1">$100M</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Project Valuation</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-verte-black mb-1">20K MT</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Storage Capacity</p>
            </div>
            <div className="sm:col-span-2">
              <p className="font-bold text-verte-black mb-2">Delivery Focus</p>
              <p className="text-slate-600 text-sm leading-6">
                Engineering coordination, infrastructure readiness, compliance, and long-term operational reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
