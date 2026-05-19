import React from 'react';
import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const imageAnimation = useScrollAnimation('fade-in-left', { once: true });
  const contentAnimation = useScrollAnimation('fade-in-right', { once: true });
  return (
    <section id="projects" className="bg-gray-50">
      <div className="grid lg:grid-cols-2 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
        
        {/* Visual Side */}
        <div ref={imageAnimation.ref} className={`relative h-64 sm:h-80 md:h-96 lg:h-auto bg-gray-900 group overflow-hidden ${imageAnimation.className}`}>
          <img 
            src="/images/projects/lpg-terminal.jpg" 
            alt="Refinery Infrastructure at Sunset" 
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-windek-dark/60 group-hover:bg-windek-dark/40 transition-colors duration-500"></div>
          
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 lg:p-16">
             <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-windek-red text-white text-xs font-bold uppercase tracking-wider mb-2 sm:mb-4">Flagship Development</span>
             <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">LPG Terminal Facility</h3>
             <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-xs sm:text-sm uppercase tracking-wide">Atabrikang, Akwa Ibom</span>
             </div>
          </div>
        </div>

        {/* Content Side */}
        <div ref={contentAnimation.ref} className={`flex flex-col justify-center p-6 sm:p-8 lg:p-24 bg-white ${contentAnimation.className}`}>
          <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-3 sm:mb-4">Featured Project</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-windek-dark mb-6 sm:mb-8 tracking-tight">20,000 MT Storage & Distribution Hub</h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-light leading-relaxed mb-8 sm:mb-10">
            A landmark infrastructure project designed to revolutionize LPG availability in Southern Nigeria. This facility represents our commitment to solving energy infrastructure deficits through strategic capital deployment and engineering excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-8 sm:gap-y-12">
            <div>
               <p className="text-4xl font-bold text-windek-dark mb-1">$100M</p>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Valuation</p>
            </div>
            <div>
               <p className="text-4xl font-bold text-windek-dark mb-1">Q4 2025</p>
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Target Completion</p>
            </div>
            <div className="col-span-2 pt-8 border-t border-gray-100">
               <p className="font-semibold text-windek-dark mb-2">Strategic Partners</p>
               <p className="text-slate-500 text-sm">Collaborating with Cakasa Nigeria Limited for world-class EPCI delivery.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
