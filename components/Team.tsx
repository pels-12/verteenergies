import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={titleAnimation.ref} className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 ${titleAnimation.className}`}>
          <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-3 block">Leadership</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-windek-dark mb-4 sm:mb-6 tracking-tight">
            Driven by <span className="text-gray-400 font-serif italic">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Our leadership team combines decades of expertise in the Nigerian and international energy sectors, dedicated to delivering operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => {
            const memberAnimation = useScrollAnimation('fade-in-up', { once: true, margin: '0px 0px -50px 0px' });
            return (
            <div key={index} ref={memberAnimation.ref} className={`group relative bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${memberAnimation.className}`}>
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-windek-dark/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                
                {/* Social Icon Overlay */}
                <div className="absolute top-4 right-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-windek-blue transition-colors block">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs font-bold text-windek-blue uppercase tracking-widest mb-1">{member.role}</p>
                <h3 className="text-xl font-bold mb-3">{member.name}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                  <p className="text-sm text-gray-300 font-light opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
            )
          })}
        </div>

      </div>
    </section>
  );
};

export default Team;
