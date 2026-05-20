import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Building2, CheckCircle, Globe2, Mail, MapPin, Phone, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const formAnimation = useScrollAnimation('fade-in-right', { once: true });

  useEffect(() => {
    if (!showModal) return;
    const timer = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timer);
  }, [showModal]);

  const handleSubmit = () => {
    setTimeout(() => setShowModal(true), 500);
  };

  return (
    <footer id="contact" className="bg-verte-black text-verte-white pt-20 md:pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 mb-16">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-verte-gold mb-4">Contact</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Speak with the team about your next project.
            </h2>

            <div className="space-y-8 mt-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Building2 className="h-5 w-5 text-verte-gold" strokeWidth={1.7} />
                  <p className="text-xs font-semibold text-verte-white/42 uppercase tracking-widest">Offices</p>
                </div>
                <div className="grid gap-4">
                  {CONTACT_INFO.offices.map((office) => (
                    <div key={office.label} className="flex gap-4 border border-verte-gold/20 p-4">
                      <MapPin className="h-5 w-5 text-verte-gold flex-shrink-0 mt-1" strokeWidth={1.7} />
                      <div>
                        <p className="font-semibold text-verte-white">{office.label}</p>
                        <p className="text-sm text-verte-white/70 leading-6 mt-1">{office.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Contact Details - Simple Cards */}
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                {/* Email Card */}
                <div className="border border-verte-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-5 w-5 text-verte-gold" strokeWidth={2} />
                    <p className="text-xs font-bold text-verte-gold uppercase tracking-wider">Email</p>
                  </div>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-sm font-semibold text-verte-white hover:text-verte-gold transition-colors break-all"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                {/* Phone Card */}
                <div className="border border-verte-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-verte-gold" strokeWidth={2} />
                    <p className="text-xs font-bold text-verte-gold uppercase tracking-wider">Phone</p>
                  </div>
                  <div className="space-y-2">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a 
                        key={phone} 
                        href={`tel:${phone.replace(/\s/g, '')}`} 
                        className="block text-sm font-semibold text-verte-white hover:text-verte-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Website Card */}
                <div className="border border-verte-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 className="h-5 w-5 text-verte-gold" strokeWidth={2} />
                    <p className="text-xs font-bold text-verte-gold uppercase tracking-wider">Website</p>
                  </div>
                  <a 
                    href={`https://${CONTACT_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-verte-white hover:text-verte-gold transition-colors"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div ref={formAnimation.ref} className={`bg-verte-white text-verte-black p-6 sm:p-8 lg:p-10 ${formAnimation.className}`}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form action="https://formsubmit.co/info@verteenergies.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for contacting Verte Energies Limited. We have received your inquiry and will respond shortly." />

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">First Name</span>
                  <input required name="First Name" type="text" className="w-full bg-white border border-black/10 p-3 text-verte-black focus:border-verte-gold focus:outline-none transition-colors" />
                </label>
                <label className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Last Name</span>
                  <input required name="Last Name" type="text" className="w-full bg-white border border-black/10 p-3 text-verte-black focus:border-verte-gold focus:outline-none transition-colors" />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</span>
                <input required name="email" type="email" className="w-full bg-white border border-black/10 p-3 text-verte-black focus:border-verte-gold focus:outline-none transition-colors" />
              </label>

              <label className="block space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Inquiry</span>
                <textarea required name="message" rows={5} className="w-full bg-white border border-black/10 p-3 text-verte-black focus:border-verte-gold focus:outline-none transition-colors resize-none" />
              </label>

              <button type="submit" className="w-full bg-verte-green text-verte-white font-bold uppercase tracking-widest py-4 hover:bg-verte-black transition-colors duration-200">
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 pt-8 border-t border-verte-gold/25 text-sm text-verte-white/50">
          <p>&copy; {new Date().getFullYear()} Verte Energies Limited. RC 8114494.</p>
          <p>Oil, gas, engineering, procurement, inspection, and infrastructure solutions.</p>
        </div>
      </div>

      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setShowModal(false)} />
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100%-2rem)] max-w-sm">
            <div className="bg-white shadow-2xl overflow-hidden">
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-verte-black"
                aria-label="Close message"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="p-8 text-center">
                <div className="mx-auto mb-6 w-14 h-14 bg-verte-green/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-verte-green" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-verte-black mb-3">Message received</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Thank you for contacting Verte Energies Limited. We will respond shortly.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 bg-verte-green text-white font-bold uppercase tracking-wide hover:bg-verte-black transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Contact;
