import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Building2, CheckCircle, Globe2, Mail, MapPin, Phone, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const formAnimation = useScrollAnimation('fade-in-right', { once: true });

  useEffect(() => {
    if (!showModal) return;
    const timer = setTimeout(() => setShowModal(false), 5000);
    return () => clearTimeout(timer);
  }, [showModal]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const firstName = String(formData.get('First Name') || '').trim();
    const lastName = String(formData.get('Last Name') || '').trim();

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email: formData.get('email'),
          message: formData.get('message'),
          website: formData.get('website'),
          form_time: formData.get('form_time'),
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Unable to send your message.');
      }

      form.reset();
      setShowModal(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
                {/* Email Card */}
                <div className="min-w-0 border border-verte-gold/30 p-6">
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
                <div className="min-w-0 border border-verte-gold/30 p-6">
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
                <div className="min-w-0 border border-verte-gold/30 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe2 className="h-5 w-5 text-verte-gold" strokeWidth={2} />
                    <p className="text-xs font-bold text-verte-gold uppercase tracking-wider">Website</p>
                  </div>
                  <a 
                    href={`https://${CONTACT_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block max-w-full break-all text-xs font-semibold leading-5 text-verte-white hover:text-verte-gold transition-colors"
                  >
                    {CONTACT_INFO.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div ref={formAnimation.ref} className={`bg-verte-white text-verte-black p-6 sm:p-8 lg:p-10 ${formAnimation.className}`}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="website" value="" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="form_time" value={Date.now()} />

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

              {submitError && (
                <p role="alert" className="text-sm font-semibold text-red-700">{submitError}</p>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-verte-green text-verte-white font-bold uppercase tracking-widest py-4 hover:bg-verte-black disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200">
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-verte-gold/25 pt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/big logo.svg"
                alt="Verte Energies"
                className="h-12 w-auto max-w-[132px] brightness-0 invert"
              />
            </a>
            <p className="mt-5 max-w-md text-sm leading-6 text-verte-white/65">
              Oil, gas, engineering, procurement, inspection, and infrastructure solutions delivered with safety,
              quality, and accountability.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-verte-gold">Pages</h2>
            <div className="mt-4 grid gap-2 text-sm text-verte-white/70">
              <a href="/" className="hover:text-verte-gold transition-colors">Home</a>
              <a href="/about.html" className="hover:text-verte-gold transition-colors">About</a>
              <a href="/leadership.html" className="hover:text-verte-gold transition-colors">Leadership Team</a>
              <a href="/services.html" className="hover:text-verte-gold transition-colors">Services</a>
              <a href="/contact.html" className="hover:text-verte-gold transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-verte-gold">Contact</h2>
            <div className="mt-4 space-y-2 text-sm leading-6 text-verte-white/70">
              <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:text-verte-gold transition-colors">
                {CONTACT_INFO.email}
              </a>
              <p>{CONTACT_INFO.phones.map((phone) => <React.Fragment key={phone}>{phone}<br /></React.Fragment>)}</p>
              <a href="/contact.html" className="inline-flex mt-2 font-semibold text-verte-gold hover:text-verte-white transition-colors">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-verte-gold/20 px-4 py-5 text-center text-xs text-verte-white/50">
          &copy; {new Date().getFullYear()} Verte Energies Limited. RC 8114494. Developed by Pelinks.
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
