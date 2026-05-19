import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';
import { CheckCircle, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [showModal, setShowModal] = useState(false);
  const titleAnimation = useScrollAnimation('fade-in-up', { once: true });
  const formAnimation = useScrollAnimation('fade-in-right', { once: true });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showModal) {
      // Auto-close modal after 5 seconds
      timer = setTimeout(() => {
        setShowModal(false);
        setStatus('idle');
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // FormSubmit.co will handle the form submission
    // Show success popup after a brief delay
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };

  const closeModal = () => {
    setShowModal(false);
    setStatus('idle');
  };

  return (
    <footer id="contact" className="bg-windek-dark text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-20">
          <div ref={titleAnimation.ref} className={titleAnimation.className}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Let's build the future <br/> <span className="text-windek-blue">together.</span></h2>
            
            <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Visit Us</p>
                <p className="text-base sm:text-lg text-white font-light">{CONTACT_INFO.address}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</p>
                   <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm sm:text-base text-white hover:text-windek-blue transition-colors break-all">{CONTACT_INFO.email}</a>
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Call</p>
                   <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm sm:text-base text-white hover:text-windek-blue transition-colors">{CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

          <div ref={formAnimation.ref} className={`bg-white rounded-sm p-6 sm:p-8 lg:p-12 relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col justify-center ${formAnimation.className}`}>

            {/* Form View */}
            <div>
                <h3 className="text-windek-dark text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>
                
                <form 
                  action="https://formsubmit.co/enquiries@windekoilandgasltd.com" 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                    {/* FormSubmit.co hidden fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_autoresponse" value="Thank you for contacting Windek Oil and Gas. We have received your inquiry and will respond shortly." />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                            <label htmlFor="firstName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                            <input required name="First Name" type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-2 sm:p-3 text-windek-dark text-sm focus:border-windek-blue focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="lastName" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                            <input required name="Last Name" type="text" className="w-full bg-gray-50 border-b-2 border-gray-200 p-2 sm:p-3 text-windek-dark text-sm focus:border-windek-blue focus:outline-none transition-colors" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email Address</label>
                        <input required name="email" type="email" className="w-full bg-gray-50 border-b-2 border-gray-200 p-2 sm:p-3 text-windek-dark text-sm focus:border-windek-blue focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-wide">Inquiry</label>
                        <textarea required name="message" rows={3} className="w-full bg-gray-50 border-b-2 border-gray-200 p-2 sm:p-3 text-windek-dark text-sm focus:border-windek-blue focus:outline-none transition-colors"></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-windek-dark text-white font-bold uppercase tracking-widest py-3 sm:py-4 text-sm sm:text-base hover:bg-windek-blue transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                        Submit Message
                    </button>
                </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Windek Oil and Gas Limited. RC 1493721.</p>
        </div>
      </div>

      {/* Success Modal Pop-up */}
      {showModal && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={closeModal}
          ></div>
          
          {/* Modal */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm mx-4 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-8 text-center">
                <div className="mx-auto mb-6 w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-500" strokeWidth={2} />
                </div>
                
                <h3 className="text-2xl font-bold text-windek-dark mb-3">Success!</h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thank you for contacting Windek Oil and Gas. Your inquiry has been successfully received. We will respond shortly.
                </p>
                
                <div className="flex justify-center gap-3">
                  <button 
                    onClick={closeModal}
                    className="px-6 py-2 bg-windek-blue text-white font-bold uppercase tracking-wide rounded hover:bg-sky-500 transition-colors text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Contact;