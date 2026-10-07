import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = useState(false);
  const desktopAboutRef = useRef<HTMLDivElement>(null);
  const desktopAboutButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopAboutRef.current?.contains(event.target as Node)) {
        setIsDesktopAboutOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDesktopAboutOpen) {
        desktopAboutButtonRef.current?.focus();
        setIsDesktopAboutOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDesktopAboutOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      setIsOpen(false);
      setIsDesktopAboutOpen(false);
      return;
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
      setIsDesktopAboutOpen(false);
    }
  };

  const aboutSubmenu = [
    { label: 'About Us', href: '#about' },
    { label: 'Vision & Mission', href: '#vision' },
    { label: 'Core Values', href: '#values' },
    { label: 'Leadership Team', href: '/leadership.html' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'glass-dark py-3' 
        : 'bg-verte-black/78 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/big logo.svg" 
              alt="Verte Energies" 
              className="h-12 w-auto max-w-[132px] brightness-0 invert"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              if (item.label === 'About') {
                return (
                  <div
                    key={item.label}
                    ref={desktopAboutRef}
                    className="relative group focus-within:z-10"
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') {
                        setIsDesktopAboutOpen(true);
                      }
                    }}
                    onPointerLeave={(event) => {
                      if (
                        event.pointerType === 'mouse'
                        && !desktopAboutRef.current?.contains(document.activeElement)
                      ) {
                        setIsDesktopAboutOpen(false);
                      }
                    }}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                        setIsDesktopAboutOpen(false);
                      }
                    }}
                  >
                    <button
                      ref={desktopAboutButtonRef}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isDesktopAboutOpen}
                      aria-controls="desktop-about-menu"
                      onClick={() => setIsDesktopAboutOpen((isOpen) => !isOpen)}
                      className="text-sm font-medium text-verte-white hover:text-verte-gold transition-colors px-4 py-2 flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isDesktopAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {/* Dropdown */}
                    <div
                      id="desktop-about-menu"
                      className={`absolute left-0 mt-2 w-56 bg-verte-black/95 backdrop-blur-xl border border-verte-gold/20 shadow-xl transition-all duration-200 py-2 ${
                        isDesktopAboutOpen
                          ? 'opacity-100 visible pointer-events-auto'
                          : 'opacity-0 invisible pointer-events-none'
                      }`}
                    >
                      {aboutSubmenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          onClick={(e) => handleNavClick(e, subitem.href)}
                          className="block px-4 py-2 text-sm text-verte-white hover:text-verte-gold hover:bg-white/5 transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-verte-white hover:text-verte-gold transition-colors px-4 py-2"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right side - CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:inline-flex px-5 py-2.5 bg-verte-gold text-verte-black text-sm font-semibold hover:bg-[#c4aa70] transition-colors duration-200"
            >
              Get In Touch
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-verte-white/80 hover:text-verte-gold hover:bg-white/10 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`md:hidden absolute w-full bg-verte-black/95 backdrop-blur-xl border-t border-verte-gold/20 transition-all duration-300 ease-in-out overscroll-contain ${
          isOpen
            ? 'max-h-[calc(100dvh-6.5rem)] overflow-y-auto opacity-100 shadow-lg'
            : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_ITEMS.map((item) => {
            if (item.label === 'About') {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                    type="button"
                    aria-expanded={openDropdown === 'about'}
                    aria-controls="mobile-about-menu"
                    tabIndex={isOpen ? undefined : -1}
                    className="w-full text-left px-4 py-3 text-base font-medium text-verte-white/80 hover:text-verte-gold hover:bg-white/5 transition-colors flex items-center justify-between"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === 'about' && (
                    <div id="mobile-about-menu" className="pl-4 space-y-1 bg-white/5 mt-1">
                      {aboutSubmenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          onClick={(e) => handleNavClick(e, subitem.href)}
                          tabIndex={isOpen ? undefined : -1}
                          className="block px-4 py-2 text-sm text-verte-white/75 hover:text-verte-gold transition-colors"
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={isOpen ? undefined : -1}
                className="block px-4 py-3 text-base font-medium text-verte-white/80 hover:text-verte-gold hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            tabIndex={isOpen ? undefined : -1}
            className="block px-4 py-3 bg-verte-gold text-verte-black text-base font-semibold text-center hover:bg-[#c4aa70] transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
