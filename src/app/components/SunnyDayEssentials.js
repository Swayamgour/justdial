import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SunnyDayEssentials = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const essentials = [
        { id: 1, title: 'Doctors For Allergy', action: 'Explore >', icon: '🩺' },
        { id: 2, title: 'Fan Dealers', action: 'Explore >', icon: '🌀' },
        { id: 3, title: 'Waterproofing Contractors', action: 'Explore >', icon: '🛡️' },
        { id: 4, title: 'Slipper Dealers', action: 'Explore >', icon: '👡' },
        { id: 5, title: 'AC Repair Services', action: 'Explore >', icon: '❄️' },
        { id: 6, title: 'Sunglasses Dealers', action: 'Explore >', icon: '🕶️' },
        { id: 7, title: 'Cold Drink Suppliers', action: 'Explore >', icon: '🥤' },
        { id: 8, title: 'Summer Clothing', action: 'Explore >', icon: '👕' },
    ];

    return (
        <div className="bg-gray-50 p-4 lg:mx-8">
            <div className="mx-auto p-4 sm:p-6 bg-white rounded-xl border border-gray-300">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-4 md:mb-0">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-800 mr-2">Sunny Day Essentials</h1>
                            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                EXAGONAL
                            </span>
                        </div>
                        <p className="text-gray-600 mt-2">Discover wide range of summer collection</p>
                    </div>

                    {/* Navigation Arrows for Desktop */}
                    <div className="flex space-x-2">
                        <button
                            ref={navigationPrevRef}
                            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Previous"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            ref={navigationNextRef}
                            className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                            aria-label="Next"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Swiper Component */}
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
                            slidesPerView: 4,
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
                    className="essentials-swiper"
                >
                    {essentials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-row items-center gap-5">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-3 text-xl">
                                    {item.icon}
                                </div>
                                <div>

                                    <h3 className="text-sm font-semibold text-gray-800 ">{item.title}</h3>
                                    <a href="#" className="text-blue-600 font-medium text-sm hover:underline mt-auto">
                                        {item.action}
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
        .essentials-swiper {
          padding: 10px 5px 30px 5px;
        }
        .essentials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
        </div>
    );
};

export default SunnyDayEssentials;