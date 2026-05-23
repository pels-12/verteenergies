import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });

  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`max-w-3xl mb-14 ${titleAnimation.className}`}>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-verte-black mb-5 leading-tight">
            Experienced leadership with a delivery bias.
          </h2>
          <p className="text-slate-600 leading-7">
            The leadership team brings together engineering, operations, corporate services, and project execution experience for Nigeria's energy sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-black/10 border border-black/10">
          {TEAM_MEMBERS.map((member) => {
            const memberAnimation = useScrollAnimation('fade-in-up', { once: true, margin: '0px 0px -50px 0px' });
            return (
              <article key={member.name} ref={memberAnimation.ref} className={`bg-verte-white ${memberAnimation.className}`}>
                <div className="aspect-[4/5] overflow-hidden bg-verte-green">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[35%]"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-verte-gold uppercase tracking-widest mb-2">{member.role}</p>
                  <h3 className="text-lg font-bold text-verte-black mb-3 leading-snug">{member.name}</h3>
                  <p className="text-sm leading-6 text-slate-600">{member.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
