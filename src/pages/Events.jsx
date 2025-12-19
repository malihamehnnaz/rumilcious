export default function Events() {
  const events = [
    {
      id: 2,
      title: "Christmas Lunch !",
      date: "December 25",
      time: "11:30am - 4:00pm",
      description: "Join us for a beautiful Christmas Lunch. Celebrate the season with your loved ones in our warm and festive atmosphere.",
      highlights: [
        "Entrée: Prawn Cocktail",
        "Entrée: Cauliflower",
        "Main Dish: Roasted Turkey with Cranberries sauce",
        "Main Dish: Roasted Leg Ham",
        "Main Dish: Roasted Vegetables",
        "Dessert: Christmas pudding with Brandy Custard",
        "Dessert: Pavlova Sugar Candy floss"
      ],
      image: "/New folder/WhatsApp%20Image%202025-12-17%20at%207.38.10%20AM.jpeg",
      cta: "Call (02) 9211 7706 to Book"
    },
    {
      id: 1,
      title: "New Year’s Eve",
      date: "December 31",
      time: "Evening Celebration",
      description: "Celebrate New Year’s Eve at Rumilicious 🎉 Tickets are almost sold out — please book now!",
      highlights: [
        "Appetizers: Hummus trio, Eggplant dip, Falafel, Cauliflower",
        "Mains: Chicken with barberry rice & pistachios",
        "Persian kebab Lamb and Chicken",
        "Dessert: Persian Ice cream"
      ],
      price: "$120 PP",
      image: "/New folder/WhatsApp%20Image%202025-12-17%20at%208.00.46%20AM.jpeg",
      cta: "Call (02) 9211 7706 to Book"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80" 
            alt="Events and Celebrations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Events</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-100">
            Celebrate your special moments with us
          </p>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-16 text-center text-neutral-900">Upcoming Events</h2>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Image Section */}
                <div className="relative h-64">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full shadow-md">
                    {event.date}
                  </div>
                  {event.price && (
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm font-bold rounded-full backdrop-blur-sm">
                      {event.price}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-neutral-900">
                    {event.title}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </p>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="bg-neutral-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-sm text-neutral-900 mb-2">Menu Highlights:</h4>
                    <ul className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                      {event.highlights.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 border-t border-neutral-100">
                    <a 
                      href="tel:0292117706" 
                      className="block w-full py-3 bg-neutral-900 text-white font-bold rounded-lg hover:bg-primary-600 transition-colors text-center text-sm uppercase tracking-widest"
                    >
                      Book Now
                    </a>
                    <p className="text-center text-xs text-gray-400 mt-2">
                      Call to secure your spot
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

