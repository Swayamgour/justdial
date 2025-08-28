"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PopularSearches = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  const popularSearches = [
    { id: 1, title: 'Interior Designers', action: 'Enquire Now', icon: '🎨' },
    { id: 2, title: 'Banquet Halls', action: 'Enquire Now', icon: '🏛️' },
    { id: 3, title: 'AC Repair & Services', action: 'Enquire Now', icon: '❄️' },
    { id: 4, title: 'Real Estate Agents', action: 'Enquire Now', icon: '🏠' },
    { id: 5, title: 'Physiotherapists', action: 'Explore', icon: '💆' },
    { id: 6, title: 'Web Developers', action: 'Enquire Now', icon: '💻' },
    { id: 7, title: 'Caterers', action: 'Enquire Now', icon: '🍽️' },
    { id: 8, title: 'Event Planners', action: 'Enquire Now', icon: '📅' },
  ];

  return (
    <div className="bg-gray-50 p-4 lg:mx-8">
      <div className="mx-auto p-4 sm:p-6 bg-white rounded-xl border border-gray-300">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Popular Searches</h1>
        </div>

        {/* Swiper Component */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            className="popular-searches-swiper"
          >
            {popularSearches.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-3 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <button className={`text-xs font-medium px-3 py-1 rounded-full ${
                    item.action === 'Explore' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  } transition-colors`}>
                    {item.action}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button 
            ref={navigationPrevRef}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            ref={navigationNextRef}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .popular-searches-swiper {
          padding: 10px 5px 30px 5px;
        }
        .popular-searches-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default PopularSearches;