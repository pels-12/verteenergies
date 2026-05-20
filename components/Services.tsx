import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    window.scrollTo({ top: elementPosition + window.scrollY - headerOffset, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-verte-black text-verte-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div ref={titleAnimation.ref} className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 ${titleAnimation.className}`}>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Capabilities</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Services aligned with the company profile.
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="inline-flex items-center text-sm font-semibold text-verte-gold hover:text-verte-white transition-colors border-b border-verte-gold pb-1"
          >
            Discuss Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-verte-gold/25 border border-verte-gold/25">
          {SERVICES.map((service) => {
            const cardAnimation = useScrollAnimation('fade-in-up', { once: true, margin: '0px 0px -50px 0px' });
            return (
              <article key={service.title} ref={cardAnimation.ref} className={`group bg-verte-black ${cardAnimation.className}`}>
                <div className="p-5 flex min-h-[210px] flex-col">
                  <div className="mb-5 h-10 w-10 bg-verte-gold text-verte-black flex items-center justify-center">
                    <service.icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-semibold mb-4 leading-snug">{service.title}</h3>
                  <ul className="space-y-3 flex-1">
                    {service.items.slice(0, 2).map((item) => (
                      <li key={item} className="text-xs leading-5 text-verte-white/88 flex items-start">
                        <span className="mt-2 mr-3 h-px w-5 bg-verte-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/services.html"
                    className="mt-5 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-verte-gold hover:text-verte-white transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
