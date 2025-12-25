import { Link } from 'react-router-dom';

export default function HappyHourBanner() {
  return (
    <section className="w-full shadow-2xl relative z-20">
      {/* Main Banner Area */}
      <div className="bg-primary-700 text-white border-t-4 border-primary-400">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-6">
          
          {/* Left: Title & Time */}
          <div className="flex-shrink-0 text-center md:text-left border-b md:border-b-0 md:border-r border-primary-600 pb-4 md:pb-0 md:pr-8 w-full md:w-auto">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary-200 mb-1">Happy Hour</div>
            <div className="text-3xl font-serif font-bold leading-none">12 - 5 PM</div>
            <div className="text-sm font-medium text-primary-100 mt-1">7 Days a Week</div>
          </div>

          {/* Center: Rolling Offers */}
          <div className="flex-1 w-full overflow-hidden relative px-4">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-primary-700 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary-700 to-transparent z-10"></div>
            
            <div className="flex w-[200%] animate-scroll gap-8 items-center" style={{ animationDuration: '25s' }}>
              {[
                { item: 'House Beer', price: '$8' },
                { item: 'House Wine', price: '$8' },
                { item: 'Aperol Spritz', price: '$15' },
                { item: 'Mazah Platter for 2', price: '$29.95' }
              ].map((offer, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-3 bg-primary-800/50 px-5 py-2 rounded-full border border-primary-600/50">
                  <span className="font-serif text-lg text-primary-100">{offer.item}</span>
                  <span className="bg-white text-primary-800 text-xs font-bold px-2 py-1 rounded">{offer.price}</span>
                </div>
              ))}

              {/* Duplicate for loop */}
              {[
                { item: 'House Beer', price: '$8' },
                { item: 'House Wine', price: '$8' },
                { item: 'Aperol Spritz', price: '$15' },
                { item: 'Mazah Platter for 2', price: '$29.95' }
              ].map((offer, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 flex items-center gap-3 bg-primary-800/50 px-5 py-2 rounded-full border border-primary-600/50">
                  <span className="font-serif text-lg text-primary-100">{offer.item}</span>
                  <span className="bg-white text-primary-800 text-xs font-bold px-2 py-1 rounded">{offer.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary-800 text-sm font-bold uppercase tracking-wider px-8 py-4 hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg rounded-sm">
              Reserve Table
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Strip: Special Offer Detail */}
      <div className="bg-primary-900 text-center py-3 px-4 border-b border-primary-800">
        <p className="text-sm text-primary-100 font-medium">
          <span className="text-primary-300 uppercase tracking-wider text-xs mr-2 font-bold">Special Include:</span> 
          Promo Mazah Platter for 2 includes <span className="text-white underline decoration-primary-500 underline-offset-4">2 glasses of wine</span>
        </p>
      </div>
    </section>
  );
}
