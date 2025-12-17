import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070" 
            alt="Restaurant Ambience" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white container-custom max-w-4xl px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            RUMILICIOUS
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto leading-relaxed text-gray-100">
            A culinary journey where tradition meets modern elegance. Experience the art of fine dining in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/menu" 
              className="px-8 py-4 bg-white text-neutral-900 text-lg font-medium hover:bg-neutral-100 transition-colors min-w-[200px]"
            >
              View Menus
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-4 border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-neutral-900 transition-all min-w-[200px]"
            >
              Book a Table
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary-600 mb-6 uppercase">Our Philosophy</h2>
          <p className="text-3xl md:text-5xl font-serif leading-tight text-neutral-900 mb-8">
            "We believe that food is more than just sustenance. It is a language that speaks of culture, passion, and the joy of gathering together."
          </p>
          <div className="w-24 h-1 bg-neutral-200 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Sourcing the finest local ingredients, our chefs craft dishes that honor traditional recipes while embracing contemporary techniques. Every plate is a masterpiece, designed to delight your senses.
          </p>
          <div className="mt-12">
            <Link to="/about" className="text-primary-600 font-medium hover:text-primary-700 border-b-2 border-primary-600 pb-1 transition-colors">
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images Grid */}
      <section className="h-[80vh] min-h-[600px]">
        <div className="relative group overflow-hidden h-full">
          <img 
            src="https://images.unsplash.com/photo-1502301103665-0b95cc738daf?q=80&w=1964" 
            alt="Fine Dining" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-4xl font-serif mb-4">The Kitchen</h3>
              <p className="text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Seasonal ingredients, timeless recipes</p>
              <Link to="/menu" className="inline-block border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                View Food
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Food Gallery */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-primary-600 mb-4 uppercase">A Feast for the Eyes</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900">Culinary Masterpieces</h3>
        </div>
        
        <div className="relative w-full">
          <div className="flex w-[700%] animate-scroll hover:[animation-play-state:paused]" style={{ animationDuration: '150s' }}>
            {/* First Set */}
            <div className="flex w-1/2 justify-around gap-6 px-3">
              {[
                "/New folder/g.jpeg",
                "/New folder/WhatsApp Imafge 2025-12-17 at 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 aggt 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.10 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.11 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.14ff AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7ff.38.13 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.46 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.47 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.4gg7 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.gg48 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8gg.00.gg48 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at gAM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 atggg 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 atv 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-1ggg7 at 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-1gg2-17 at 8.00.48 AM.jpeg",
                "/New folder/WhatsApp Imagfe 2025-12-17 at 7.38.13 AM.jpeg"
              ].map((src, index) => (
                <div key={index} className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Loop */}
            <div className="flex w-1/2 justify-around gap-6 px-3">
              {[
                "/New folder/g.jpeg",
                "/New folder/WhatsApp Imafge 2025-12-17 at 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 aggt 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.10 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.11 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7.38.14ff AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 7ff.38.13 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.46 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.47 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.4gg7 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8.00.gg48 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at 8gg.00.gg48 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 at gAM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 atggg 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-17 atv 7.38.12 AM.jpeg",
                "/New folder/WhatsApp Image 2025-12-1ggg7 at 8.00.49 AM.jpeg",
                "/New folder/WhatsApp Image 2025-1gg2-17 at 8.00.48 AM.jpeg",
                "/New folder/WhatsApp Imagfe 2025-12-17 at 7.38.13 AM.jpeg"
              ].map((src, index) => (
                <div key={`dup-${index}`} className="relative w-full aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer">
                  <img 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Guest Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "This is a fabulous restaurant, in a great location on Jones Bay wharf.",
                text: "OMG, sensational vegan Persian food and a hostess who just made us feel so welcome. From the to die for falafel to baked eggplant, Persian curries with rice, sour and delicious barberries and pomegranate molasses, turkish coffee, beautiful vegan friendly wines. We will be back!",
                author: "Stefan",
                source: "(Google Review)"
              },
              {
                title: "Excellent food and very welcoming and personable service!",
                text: "Carefully considered recommendations and adaptions for those with nut allergies and a beautiful sharing of cultural influences and history. Great coffee too!",
                author: "Cassandra",
                source: "(Google Review)"
              },
              {
                title: "Can't wait to go back. Highly recommend this place if you like Lebanese food.",
                text: "This falafel stack is the most delicious thing I have ever had. I went there with colleagues and everyone loved what they called for. We also had fried cauliflower to share and it was to die for, I absolutely loved it. The lady who was serving us was very friendly. I must say the presentation was on point, very impressive.",
                author: "Jinal",
                source: "(Google Review)"
              }
            ].map((review, index) => (
              <div key={index} className="text-center px-4">
                <div className="text-primary-600 text-4xl mb-4 font-serif">"</div>
                <h3 className="text-lg font-bold mb-4 font-serif text-neutral-800">{review.title}</h3>
                <p className="text-gray-600 italic mb-6 leading-relaxed text-base">"{review.text}"</p>
                <div className="font-medium text-neutral-900">{review.author}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">{review.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Join Our Community</h2>
          <p className="text-gray-400 mb-10 text-lg">Subscribe to receive updates on special events, seasonal menu changes, and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-6 py-4 bg-neutral-800 border border-neutral-700 text-white focus:outline-none focus:border-primary-600 transition-colors"
            />
            <button type="submit" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
