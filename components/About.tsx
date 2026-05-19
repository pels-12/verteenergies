import React from 'react';
import { CORE_VALUES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const imageAnimation = useScrollAnimation('fade-in-right', { once: true });
  const valuesAnimation = useScrollAnimation('fade-in-up', { once: true });
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-windek-blue/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-windek-blue/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-20 right-1/4 w-1/3 h-full bg-gradient-to-b from-windek-blue/5 to-transparent -skew-x-12 translate-x-32 z-0 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Text Content */}
          <div ref={titleAnimation.ref} className={`order-2 lg:order-1 ${titleAnimation.className}`}>
            <div className="inline-block mb-4">
              <span className="text-windek-blue font-bold tracking-widest uppercase text-xs mb-2 block px-3 py-1 bg-windek-blue/10 rounded-full w-fit">Who We Are</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-windek-dark mb-6 sm:mb-8 tracking-tight leading-tight">
              Operational Excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-windek-blue to-sky-500 font-serif italic">in Energy</span>
            </h2>
            
            <div className="space-y-4 text-slate-600 mb-10">
              <p className="leading-relaxed text-lg font-light">
                Windek Oil and Gas Limited stands at the forefront of Nigeria's energy sector. We are not just a service provider; we are strategic partners in national development.
              </p>
              <p className="leading-relaxed text-lg font-light border-l-4 border-windek-blue pl-4">
                Our integrated approach spans the entire value chain—from upstream exploration and drilling support to midstream infrastructure and downstream logistics. We leverage cutting-edge technology and indigenous expertise to deliver solutions that are safe, sustainable, and scalable.
              </p>
            </div>

            {/* Core Values Minimal List */}
            <div ref={valuesAnimation.ref} className={`grid sm:grid-cols-2 gap-6 pt-8 border-t border-gray-200 ${valuesAnimation.className}`}>
              {CORE_VALUES.slice(0, 4).map((value, idx) => (
                <div key={idx} className="flex flex-col p-4 rounded-lg bg-gradient-to-br from-white to-gray-50 hover:from-windek-blue/5 hover:to-windek-blue/2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-windek-blue/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-windek-blue/10 rounded-lg">
                      <value.icon className="h-5 w-5 text-windek-blue" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-bold text-windek-dark text-sm uppercase tracking-wide">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div ref={imageAnimation.ref} className={`order-1 lg:order-2 relative ${imageAnimation.className}`}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-windek-blue/20 border border-windek-blue/10 hover:shadow-2xl hover:shadow-windek-blue/30 transition-all duration-500">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <img 
                  src="https://www.coastalcrestenergyltd.com/images/folio/wide.jpeg" 
                  alt="Oil and Gas Engineers" 
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-windek-dark/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Decorative circle behind image */}
            <div className="absolute -z-10 top-1/2 -right-20 w-96 h-96 rounded-full bg-windek-blue/5 blur-3xl animate-pulse"></div>
            
            {/* Floating Card with Enhanced Styling */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl shadow-2xl shadow-windek-blue/20 max-w-xs border border-windek-blue/20 hover:shadow-2xl hover:shadow-windek-blue/40 transition-all duration-300 hover:-translate-y-1 hidden md:block">
              <p className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-windek-dark to-windek-blue mb-1">100%</p>
              <p className="text-sm font-bold text-windek-blue uppercase tracking-wide mb-2">Indigenous Compliance</p>
              <p className="text-xs text-gray-500 leading-relaxed">Fully compliant with Nigerian Content Development standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
