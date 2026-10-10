import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CampusGallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Stagger animation for gallery items on load
    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current.children,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );
    }
  }, []);


  const galleryImages = [
    {
      id: 1,
      title: 'Main School Building',
      category: 'Campus',
      image: '/748306834_1010388808380852_5339214374455438411_n.jpg',
    },
    {
      id: 2,
      title: 'Advanced Science Laboratory',
      category: 'Facilities',
      image: '/597799322_841564828596585_8486635597372704358_n.jpg',
    },
    {
      id: 3,
      title: 'Spacious Playground & Sports',
      category: 'Activities',
      image: '/600241310_842421828510885_4385476773760876451_n.jpg',
    },
    {
      id: 4,
      title: 'Cultural Event & Prize Giving',
      category: 'Events',
      image: '/597952920_842421911844210_140830343143650475_n.jpg',
    },
    {
      id: 5,
      title: 'Interactive Classroom Learning',
      category: 'Academics',
      image: '/742838469_1007093665377033_8305993303648752346_n.jpg', 
    },
    {
      id: 6,
      title: 'Library & Reading Zone',
      category: 'Facilities',
      image: '/598099269_841564191929982_9015834624229162423_n.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Our Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Explore Luminous Campus
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            A glimpse into our vibrant classrooms, modern facilities, and memorable school events.
          </p>
        </div>

        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-semibold tracking-wide">
                  {item.category}
                </span>
              </div>

              {/* Title Content */}
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CampusGallery;