"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HealthcareSwiperEnhanced() {
  const scrollContainer = useRef(null);

  const specialties = [
    { name: "Allopathy", link: "/Doctors", image: '/doctor/1.avif' },
    { name: "Homeopathy", link: "/Doctors", image: '/doctor/2.avif' },
    { name: "Naturopathy", link: "/Doctors", image: '/doctor/3.avif' },
    { name: "Ayurvedic", link: "/Doctors", image: '/doctor/4.avif' },
    { name: "Allopathy", link: "/Doctors", image: '/doctor/1.avif' },
    { name: "Homeopathy", link: "/Doctors", image: '/doctor/2.avif' },
    { name: "Naturopathy", link: "/Doctors", image: '/doctor/3.avif' },
    { name: "Ayurvedic", link: "/Doctors", image: '/doctor/4.avif' },
    { name: "Allopathy", link: "/Doctors", image: '/doctor/1.avif' },
    { name: "Homeopathy", link: "/Doctors", image: '/doctor/2.avif' },
    { name: "Naturopathy", link: "/Doctors", image: '/doctor/3.avif' },
    { name: "Ayurvedic", link: "/Doctors", image: '/doctor/4.avif' },
  ];

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollContainer.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const router = useRouter()


  return (
    <div className=" mx-auto px-4 py-8 lg:mx-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Specialised Healthcare Support</h2>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Scroll left"
        >
          <FiChevronLeft className="text-gray-700 text-xl" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Scroll right"
        >
          <FiChevronRight className="text-gray-700 text-xl" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto scrollbar-hide gap-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specialties?.map((specialty, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-50 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push('/RefrigeratorRepairServices')}
            >
              <div className={`h-42  ${specialty.color} flex items-center justify-center`}>
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-full h-full relative">
                    <Image src={specialty.image}
                      alt={specialty.name}
                      fill
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }} />
                  </div>

                  <div className="text-2xl hidden">{specialty.name.charAt(0)}</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {specialty.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}