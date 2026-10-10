import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Activities = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Stagger animation for activity cards on load
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // Activities dummy data list
  const activitiesList = [
    {
      id: 1,
      title: 'Sports & Athletics',
      description: 'Encouraging physical fitness through football, cricket, and annual athletics competitions.',
      image: '/597799322_841564828596585_8486635597372704358_n.jpg', 
      icon: '🏆',
    },
    {
      id: 2,
      title: 'Science & Tech Fair',
      description: 'Fostering innovation and practical knowledge through science projects and coding clubs.',
      image: '/600241310_842421828510885_4385476773760876451_n.jpg',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Cultural & Debating',
      description: 'Building public speaking and artistic skills through debates, singing, and drama.',
      image: '/598099269_841564191929982_9015834624229162423_n.jpg',
      icon: '🎨',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Co-Curricular
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            School Activities
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We believe in holistic development. Beyond academics, our students engage in dynamic activities to sharpen their talents.
          </p>
        </div>

        {/* Activities Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activitiesList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 group"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow">
                  {item.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;