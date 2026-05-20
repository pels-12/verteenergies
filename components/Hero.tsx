import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const slides = [
    {
      title: 'Oil & Gas Operations',
      description: 'Field support, facility maintenance, integrity management, and production services.',
      image: '/images/hero/j-f-manzanero-W61mAfn1qIY-unsplash.jpg',
      position: 'object-center',
      cta: 'View Services',
    },
    {
      title: 'Midstream Infrastructure',
      description: 'Pipeline, terminal, LPG storage, and distribution infrastructure for resilient supply.',
      image: '/images/hero/brice-cooper-K8G4IBRkcCc-unsplash.jpg',
      position: 'object-center',
      cta: 'Explore Work',
    },
    {
      title: 'Engineering & Procurement',
      description: 'EPCM, fabrication, installation, procurement, and technical project support.',
      image: '/images/hero/ben-wicks-Ej2FQy1W7z4-unsplash.jpg',
      position: 'object-center',
      cta: 'View Services',
    },
    {
      title: 'Inspection & Marine Support',
      description: 'Marine audit, inspection, logistics support, and compliance-focused field services.',
      image: '/images/hero/arron-choi-VJez1W8yb5U-unsplash.jpg',
      position: 'object-center',
      cta: 'Talk To Us',
    },
  ];

  const featuredServices = [
    'Oil & Gas Services',
    'EPCM',
    'Marine Inspection',
    'Laboratory Testing',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-verte-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.title} className={`w-full h-full object-cover ${slide.position}`} />
          <div className="absolute inset-0 bg-gradient-to-r from-verte-black via-verte-black/90 to-verte-green/68" />
          <div className="absolute inset-0 bg-verte-black/28" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-verte-black to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="max-w-2xl text-left">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-verte-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-verte-gold">
              Verte Energies Limited
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-verte-white leading-[1.08]">
            Integrated energy solutions
            <br />
            <span className="text-verte-gold font-medium">for demanding projects.</span>
          </h1>

          <h2 className="text-lg md:text-xl font-semibold text-verte-white mb-3">{slides[currentSlide].title}</h2>

          <p className="text-sm md:text-base text-verte-white max-w-xl mb-7 leading-7 drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)]">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={(e) => handleScrollTo(e, 'services')}
              className="px-6 py-3 bg-verte-gold text-verte-black text-sm font-semibold hover:bg-[#c4aa70] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 py-3 border border-verte-white/40 text-verte-white text-sm font-semibold hover:border-verte-gold hover:text-verte-gold transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl bg-verte-gold/40 border border-verte-gold/40 shadow-2xl shadow-black/30">
            {featuredServices.map((service) => (
              <a
                key={service}
                href="/services.html"
                className="bg-verte-black/90 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-verte-white hover:text-verte-gold transition-colors"
              >
                {service}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-verte-gold' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 hover:border-verte-gold text-white hover:text-verte-gold items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 hover:border-verte-gold text-white hover:text-verte-gold items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-5 h-5 text-verte-gold" />
    </section>
  );
};

export default Hero;
