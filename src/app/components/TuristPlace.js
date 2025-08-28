import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TouristPlaces = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const touristPlaces = [

        { id: 1, title: 'Prayagraj', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
        { id: 2, title: 'Agra', description: 'Explore >', image: '/cities/Explorecities_Agra.avif' },
        { id: 3, title: 'Delhi', description: 'Explore >', image: '/cities/Explorecities_Delhi.avif' },
        { id: 4, title: 'Varanasi', description: 'Explore >', image: '/cities/Explorecities_Varanasi.avif' },
        { id: 5, title: 'Jaipur', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
        { id: 6, title: 'Mumbai', description: 'Explore >', image: '/cities/Explorecities_Agra.avif' },
        { id: 7, title: 'Goa', description: 'Explore >', image: '/cities/Explorecities_Delhi.avif' },
        { id: 8, title: 'Kolkata', description: 'Explore >', image: '/cities/Explorecities_Varanasi.avif' },
    ];

    return (
        <div className="bg-gray-50 p-4 lg:mx-8">
            <div className="mx-auto p-4 sm:p-6 bg-white rounded-xl border border-gray-300">
                {/* Header Section with Navigation Arrows */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Explore Top Tourist Places</h1>
                        <p className="text-gray-600 mt-2">Discover amazing destinations to visit</p>
                    </div>

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
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
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
                    className="tourist-swiper"
                >
                    {touristPlaces.map((place) => (
                        <SwiperSlide key={place.id}>
                            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{place.title}</h3>
                                </div>
                                <a href="#" className="text-blue-600 font-medium text-sm hover:underline inline-block mt-2">
                                    {place.description}
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Swiper Styles */}
            <style jsx global>{`
        .tourist-swiper {
          padding: 10px 5px 30px 5px;
        }
        .tourist-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
        </div>
    );
};

export default TouristPlaces;