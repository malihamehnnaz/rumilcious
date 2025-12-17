export default function Gallery() {
  const galleryImages = [
    "/New folder/g.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.10 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.11 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 7.38.12 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 8.00.46 AM.jpeg",
    "/New folder/WhatsApp Image 2025-12-17 at 8.00.47 AM.jpeg",
    "/New folder/WhatsApp Imafge 2025-12-17 at 7.38.12 AM.jpeg",
    "/New folder/WhatsApp Imagfe 2025-12-17 at 7.38.13 AM.jpeg"
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80" 
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 container-custom">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">Gallery</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-8 text-gray-100">
            A glimpse into our world of flavor and elegance
          </p>
        </div>
      </section>

      <div className="py-20 px-4">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
