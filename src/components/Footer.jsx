import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900">
      <div className="container-custom mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img src="/New folder/Rumilicious_Restaurant_logo.png" alt="Rumilicious" className="h-12 opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Experience the art of fine dining where tradition meets modern elegance. Join us for an unforgettable culinary journey.
            </p>
            <div className="flex space-x-4 pt-2">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100092378079086" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.954 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Discover</h4>
            <ul className="space-y-4 text-neutral-400 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Home</Link></li>
              <li><Link to="/menu" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Our Menu</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Events</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-neutral-600 rounded-full"></span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Visit Us</h4>
            <div className="space-y-6 text-neutral-400 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <address className="not-italic">
                  <p className="text-white mb-1">Jones Bay Wharf</p>
                  <p>Shop 120-122, 26-32 Pirrama Road</p>
                  <p>Pyrmont NSW 2009</p>
                </address>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:0292117706" className="hover:text-white transition-colors">(02) 9211 7706</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:rumilicious2018@gmail.com" className="hover:text-white transition-colors">rumilicious2018@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-serif font-medium mb-6 text-white tracking-wide">Opening Hours</h4>
            <ul className="space-y-3 text-neutral-400 text-sm">
              <li className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Monday</span> 
                <span className="text-neutral-500">Closed</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Tue - Wed</span> 
                <span className="text-white">7:00 am – 4:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Thu - Sat</span> 
                <span className="text-white">7:00 am – 10:00 pm</span>
              </li>
              <li className="flex justify-between border-b border-neutral-800 pb-2">
                <span>Sunday</span> 
                <span className="text-white">8:00 am – 5:00 pm</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs">
          <p>&copy; {currentYear} Rumilicious. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
