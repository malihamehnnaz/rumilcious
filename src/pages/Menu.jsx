export default function Menu() {
  const menuCategories = [
    {
      title: 'Breakfast Menu',
      images: [
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80",
        "https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80"
      ],
      items: [
        {
          name: 'Classic Toast',
          description: 'Choice of Spread: Butter, Espresso Butter, Peanut Butter, Jam, Vegemite, Nutella, or Pistachio Spread',
          price: '$10'
        },
        {
          name: 'Bacon & Egg Roll',
          description: 'Chargrilled Bacon, Fried Egg on Milk Bun with Choice of Sauce',
          price: '$12'
        },
        {
          name: 'Eggs on Toast',
          description: 'Choice of Free Range Eggs on Toast: Scrambled / Fried / Poached',
          price: '$15'
        },
        {
          name: 'Omelette with Sourdough',
          description: 'Free Range Omelette on Sourdough. Add: Spinach / Kale / Onion / Cheese / Tomato (+$2), Mushroom / Bacon / Ham / Chorizo (+$4), Smoked Salmon (+$6)',
          price: '$18'
        },
        {
          name: 'Green Eggs',
          description: 'Scrambled Eggs on Sourdough with Avocado, Salsa Verde and Choice of: Smoked Salmon / Ham / Bacon / Haloumi',
          price: '$28'
        },
        {
          name: 'Shakshuka',
          description: 'Choice of: Lamb / Chicken / Chorizo / Ham / Haloumi / Falafel. Poached Free Range Eggs Simmered in a Rich, Spiced Capsicum, Tomato and Bell Pepper Sauce. Infused with Garlic, Cumin and Paprika. Served with Warm, Crusty Bread for Dipping',
          price: '$28'
        },
        {
          name: 'Big Breakfast',
          description: 'Choice of Eggs: Scrambled / Fried / Poached with Baked Beans, Thyme Mushrooms, Spinach, Chorizo, Hash Brown served with Sourdough Toast',
          price: '$28'
        }
      ]
    },
    {
      title: 'Lunch Menu',
      images: [
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80"
      ],
      items: [
        {
          name: 'Healthy Protein Bowl',
          description: 'Choose a Base: Brown Rice / Couscous. Choose a Protein: Grilled Chicken / Grilled Fish / Slow Cooked Lamb Shank / Falafel with Hummus / Grilled Tofu with Hummus. With Mixed Leaves, Cucumber, Avocado, Roasted Sweet Potato, Crispy Kale, Baked Beans',
          price: '$28'
        },
        {
          name: 'Falafel Stack',
          description: 'Homemade Falafel with Hummus, Grilled Eggplant, Roasted Sweet Potato, Grilled Capsicum, topped with Tahini and Pomegranate Dressing',
          price: '$30'
        },
        {
          name: 'Gozleme',
          description: 'With Hummus and Garlic Dip. Choice of: Lamb & Spinach / Chicken & Mushroom / Spinach & Feta Cheese',
          price: '$25'
        }
      ]
    },
    {
      title: 'Kebabs',
      subtitle: 'Served with Rice or Salad. Tomato and Chilli on the side.',
      images: [
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&q=80"
      ],
      items: [
        {
          name: 'Emperor',
          description: 'A Delicious Platter Containing an Assortment of Four Kebabs - Koobideh, Chopped Chicken, Lamb Cutlet, and Lamb Backstrap',
          price: '$125'
        },
        {
          name: 'Rumi Special',
          description: 'A Platter Containing Three of the Most Delicious Kebabs - Koobideh, Chicken, and Lamb Backstrap',
          price: '$57'
        },
        {
          name: 'Shahi Kebab',
          description: 'A Combination of One Skewer of Lamb Backstrap Kebab and Chicken Kebab',
          price: '$46'
        },
        {
          name: 'Lamb Cutlet',
          description: 'One Skewer of Lamb Cutlet',
          price: '$47'
        },
        {
          name: 'Jooje Ba Ostokhan',
          description: '800 grams Chopped Chicken',
          price: '$45'
        },
        {
          name: 'Koobideh Kebab',
          description: 'Two Skewers of Minced Lamb Kebab',
          price: '$28'
        }
      ]
    },
    {
      title: 'Pasta Menu',
      images: [
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80",
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80"
      ],
      items: [
        {
          name: 'Chilli Prawn Pasta',
          description: 'Linguine with Homemade Chilli Oil and Spinach',
          price: '$30'
        },
        {
          name: 'Lamb Pasta',
          description: 'Linguine with Slow Cooked Lamb, Napoletana Sauce and Olives',
          price: '$28'
        },
        {
          name: 'Steak Pasta',
          description: 'Spaghetti with Traditional Pesto Sauce and Striploin Steak',
          price: '$28'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80" 
            alt="Restaurant food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Our Menu</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-100">
            Experience culinary excellence with our carefully crafted dishes
          </p>
          <a 
            href="/New folder/Rumilicious_FoodMenu_NOV25-V2.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-all duration-300 uppercase tracking-widest text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Menu
          </a>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 px-4 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}>
          <div className="max-w-7xl mx-auto">
            {/* Category Title */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
                {category.title}
              </h2>
              {category.subtitle && (
                <p className="text-lg text-gray-600 italic mb-4">{category.subtitle}</p>
              )}
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Images Section - Alternating order based on index */}
              <div className={`grid grid-cols-2 gap-4 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img 
                  src={category.images[0]} 
                  alt={`${category.title} ambience`}
                  className="w-full h-64 object-cover rounded-lg shadow-md mt-8 transform hover:scale-105 transition-transform duration-500"
                />
                <img 
                  src={category.images[1]} 
                  alt={`${category.title} detail`}
                  className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Menu Items List */}
              <div className={`${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-8">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-neutral-200 pb-6 last:border-0 group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl font-serif font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-primary-600 ml-4">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" 
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Reserve Your Table Today
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Join us for an unforgettable dining experience. Book your table now and discover why we're the talk of the town.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Make a Reservation
          </a>
        </div>
      </section>

      {/* Bottom Info Section */}
      <section className="bg-neutral-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif mb-6">Hours of Operation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div>
              <p className="font-semibold mb-2">Monday - Friday</p>
              <p className="text-gray-400">11:30 AM - 10:00 PM</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Saturday - Sunday</p>
              <p className="text-gray-400">10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
