import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { MANAGEMENT_MEMBERS, TEAM_MEMBERS } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type TeamMember = (typeof TEAM_MEMBERS)[number];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const memberAnimation = useScrollAnimation('fade-in-up', { once: true, margin: '0px 0px -50px 0px' });

  return (
    <article ref={memberAnimation.ref} className={`bg-verte-white ${memberAnimation.className}`}>
      <div className="aspect-[4/5] overflow-hidden bg-verte-green">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-verte-gold uppercase tracking-widest mb-2">{member.role}</p>
        <h4 className="text-lg font-bold text-verte-black mb-3 leading-snug">{member.name}</h4>
        <p className="text-sm leading-6 text-slate-600">{member.bio}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`/leadership.html#${member.profileId}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-verte-gold hover:text-verte-black transition-colors"
          >
            More
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </a>
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-verte-gold hover:text-verte-black transition-colors"
          >
            <Linkedin className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </article>
  );
};

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

        <div>
          <h3 className="text-2xl font-extrabold text-verte-black mb-6">Board of Directors</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-verte-black mb-6">Management Team</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {MANAGEMENT_MEMBERS.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
