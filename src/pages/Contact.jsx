import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! We will get back to you soon.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-100">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Information (Left Side) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Card */}
              <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
                <h2 className="text-2xl font-serif font-bold mb-6 text-neutral-900">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm mr-4">
                      📍
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 mb-1">Visit Us</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        26 Pirrama Road<br />
                        120-122 Jones Bay Wharf<br />
                        Pyrmont, Sydney, NSW
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm mr-4">
                      📞
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 mb-1">Call Us</h3>
                      <p className="text-sm text-gray-600">
                        <a href="tel:0292117706" className="hover:text-neutral-900 transition-colors">
                          (02) 9211 7706
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg shadow-sm mr-4">
                      ✉️
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 mb-1">Email Us</h3>
                      <p className="text-sm text-gray-600">
                        <a href="mailto:Rumilicious@gmail.com" className="hover:text-neutral-900 transition-colors">
                          Rumilicious@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-100">
                <h3 className="text-xl font-serif font-bold mb-4 text-neutral-900">Opening Hours</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                    <span className="font-medium text-neutral-900">Monday</span>
                    <span className="text-red-500 font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                    <span className="font-medium text-neutral-900">Tue - Wed</span>
                    <span className="text-gray-600">7:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-2">
                    <span className="font-medium text-neutral-900">Thu - Sat</span>
                    <span className="text-gray-600">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-medium text-neutral-900">Sunday</span>
                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-100 h-full">
                <h2 className="text-2xl font-serif font-bold mb-2 text-neutral-900">Send a Message</h2>
                <p className="text-gray-500 mb-6 text-sm">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                {formStatus.message && (
                  <div className={`p-3 rounded-lg mb-6 text-sm font-medium ${formStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors text-sm"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors text-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-neutral-700 mb-1 uppercase tracking-wide">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors resize-none text-sm"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-neutral-900 text-white font-bold py-3 rounded hover:bg-neutral-800 transition-all duration-300 uppercase tracking-widest text-xs shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section (Full Width Bottom) */}
          <div className="mt-12">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-neutral-100 h-96 overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                loading="lazy" 
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Rumilicious%20Pyrmont&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="Rumilicious Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>
    </div>
  );
}
