import React, { useMemo, useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TAGLINE, SERVICES } from '../constants';

const Hero: React.FC = () => {
  console.log('Hero component loaded - showing 4 slides');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  // Use the first three services and a project image for the slides
  const slides = useMemo(() => [
    ...SERVICES.map((service) => ({
      image: service.image,
      title: service.title,
      button: {
        label: 'See Service',
        action: 'services',
      },
    })),
    {
      image: '/images/projects/lpg-terminal.jpg',
      title: 'LPG Terminal Facility',
      button: {
        label: 'View Project',
        action: 'projects',
      },
    },
  ], []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center bg-windek-dark overflow-hidden">
      {/* Background Slideshow with Slide Content */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              aria-hidden="true"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'low'}
              decoding="async"
              sizes="100vw"
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentImageIndex ? 'scale-110' : 'scale-100'
              }`}
            />
            {/* Slide Title and Button Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32">
              <div className="bg-black/40 rounded-lg p-4 md:p-8 shadow-lg max-w-lg animate-fade-in-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
                <button
                  onClick={(e) => handleScrollTo(e, slide.button.action)}
                  className="inline-flex items-center px-6 py-3 bg-windek-blue text-white font-bold rounded shadow hover:bg-sky-500 transition-all"
                >
                  {slide.button.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-windek-dark/95 via-windek-dark/80 to-windek-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-windek-dark via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 sm:mb-6 border border-windek-blue/30 rounded-full bg-windek-blue/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-windek-blue animate-pulse"></span>
              <span className="text-windek-blue text-xs font-bold tracking-widest uppercase font-sans">Premium Indigenous Energy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 font-sans">
              Fueling Growth.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-windek-blue to-white">Powering Nigeria.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 font-light leading-relaxed max-w-2xl border-l-2 border-windek-blue/50 pl-4 sm:pl-6">
              {TAGLINE}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              <a 
                href="#projects" 
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-windek-blue text-white text-xs sm:text-sm font-bold tracking-wide rounded hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/50"
              >
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-xs sm:text-sm font-bold tracking-wide rounded hover:bg-white hover:text-windek-dark transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Stats/Info Strip */}
      <div className="absolute bottom-0 w-full z-20 border-t border-white/10 bg-windek-dark/50 backdrop-blur-md hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { label: "Founded", value: "Indigenous Excellence" },
              { label: "Focus", value: "Upstream & Midstream" },
              { label: "Location", value: "Port Harcourt, NG" }
            ].map((stat, i) => (
              <div key={i} className="py-6 px-6 first:pl-0">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-white font-medium">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 animate-bounce hidden lg:block text-white/20">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};

export default Hero;
