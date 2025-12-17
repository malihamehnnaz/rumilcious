export default function About() {
  const values = [
    { 
      title: 'Quality First', 
      description: 'We never compromise on the quality of our ingredients or the excellence of our service.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800'
    },
    { 
      title: 'Innovation', 
      description: 'Constantly evolving our menu and techniques to bring you fresh, exciting flavors.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800'
    },
    { 
      title: 'Community', 
      description: 'Building lasting relationships with our customers, suppliers, and local community.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800'
    },
    { 
      title: 'Sustainability', 
      description: 'Committed to environmentally responsible practices and supporting local farmers.',
      image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800'
    },
  ];

  const team = [
    { 
      name: 'Michael Anderson', 
      role: 'Executive Chef', 
      bio: 'With over 15 years of culinary expertise in Michelin-starred kitchens.',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=800'
    },
    { 
      name: 'Sarah Williams', 
      role: 'General Manager', 
      bio: 'Dedicated to creating exceptional guest experiences with warmth and grace.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800'
    },
    { 
      name: 'David Kim', 
      role: 'Head Sommelier', 
      bio: 'Curating our extensive wine list to perfectly pair with every dish.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074" 
            alt="Kitchen Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white container-custom max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            A passion for culinary excellence and a commitment to unforgettable dining experiences.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary-600 mb-4 uppercase">The Beginning</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-neutral-900">From Humble Roots to Culinary Destination</h3>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  Rumilicious was born from a simple yet powerful vision: to create a space where food brings people together. 
                  What started as an intimate family kitchen has evolved into a celebrated dining destination, yet our core 
                  philosophy remains unchanged.
                </p>
                <p className="mb-6">
                  We believe that every meal tells a story. Our chefs draw inspiration from global culinary traditions while 
                  honoring local ingredients, creating dishes that are both familiar and surprisingly new.
                </p>
                <p>
                  Today, we continue to push the boundaries of flavor, service, and design, ensuring that every guest who 
                  walks through our doors leaves with a memory to cherish.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000" 
                  alt="Restaurant Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-neutral-100 p-4 hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800" 
                  alt="Chef Plating" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-neutral-50 mt-12 md:mt-0">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="h-48 mb-6 overflow-hidden rounded-sm">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet The Team</h2>
            <p className="text-xl text-gray-600">The talented individuals behind every experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="aspect-[3/4] mb-6 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium tracking-widest text-sm uppercase mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
