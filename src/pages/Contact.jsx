import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50/30 text-gray-800 min-h-[85vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3 mb-4">
            Contact Luminous Public School
          </h2>
          <p className="text-gray-600 text-base sm:text-lg italic">
            "মেধার বিকাশ ও নৈতিকতার আলোয় আগামী দিনের নেতৃত্ব গড়ার প্রত্যয়ে"
          </p>
        </div>

        {/* Contact Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Address Box */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
              📍
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Location</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Joydebpur Bustand, Gazipur, Bangladesh
            </p>
          </div>

          {/* Phone Box */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
              📞
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Number</h3>
            <p className="text-gray-600 text-sm sm:text-base font-medium">
              01782-798944
            </p>
          </div>

          {/* Email Box */}
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-4 shadow-sm">
              ✉️
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Address</h3>
            <p className="text-gray-600 text-sm sm:text-base font-medium break-all">
              luminouspublicschool@gmail.com
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;