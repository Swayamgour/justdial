"use client";
import Image from "next/image";
import { useRef } from "react";
import { FiPhone, FiMessageCircle, FiMapPin, FiChevronRight, FiChevronLeft, FiStar } from "react-icons/fi";

export default function SalonCardsHorizontal({heading}) {
    const scrollContainer = useRef(null);

    const salons = [
        {
            name: "The Glo Shine Spa",
            address: "Koushajpuri Gumiti No 5, Kanpur",
            phone: "07601941979",
            hasWhatsapp: true,
            rating: 4.5,
            reviews: 128,
            image: "/beauty/cate1.avif",
            distance: "2.5 km away"
        },
        {
            name: "The Delight S-pa and Salon",
            address: "Ashok Nagar 80 Feet Road, Kanpur",
            phone: "06128183354",
            hasWhatsapp: true,
            rating: 4.3,
            reviews: 95,
            image: "/beauty/cate2.avif",
            distance: "1.8 km away"
        },
        {
            name: "Luxury Beauty Lounge",
            address: "Civil Lines, Kanpur",
            phone: "07601942345",
            hasWhatsapp: true,
            rating: 4.7,
            reviews: 156,
            image: "/beauty/cate3.avif",
            distance: "3.2 km away"
        },
        {
            name: "The Glo Shine Spa",
            address: "Koushajpuri Gumiti No 5, Kanpur",
            phone: "07601941979",
            hasWhatsapp: true,
            rating: 4.5,
            reviews: 128,
            image: "/beauty/cate1.avif",
            distance: "2.5 km away"
        },
        {
            name: "The Delight S-pa and Salon",
            address: "Ashok Nagar 80 Feet Road, Kanpur",
            phone: "06128183354",
            hasWhatsapp: true,
            rating: 4.3,
            reviews: 95,
            image: "/beauty/cate2.avif",
            distance: "1.8 km away"
        },
        {
            name: "Luxury Beauty Lounge",
            address: "Civil Lines, Kanpur",
            phone: "07601942345",
            hasWhatsapp: true,
            rating: 4.7,
            reviews: 156,
            image: "/beauty/cate3.avif",
            distance: "3.2 km away"
        },
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

    return (
        <div className="max-w-8xl mx-2 px-4 py-6 lg:mx-12">
            {/* Header */}
            <div className="flex justify-center items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{heading}</h2>
                    {/* <p className="text-sm text-gray-600">Premium beauty services near you</p> */}
                </div>

            </div>

            <div className="relative">
                {/* Navigation Arrows */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                    <FiChevronLeft className="text-gray-700" />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                >
                    <FiChevronRight className="text-gray-700" />
                </button>

                {/* Scrollable Cards */}
                <div
                    ref={scrollContainer}
                    className="flex overflow-x-auto scrollbar-hide gap-4 px-2 py-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {salons.map((salon, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-72 sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
                        >

                            <div className="flex flex-col gap-4 lg:flex-row"
>
                                
                                {/* Salon Image */}
                                {/* Salon Image */}
                                <div className="flex-shrink-0">
                                    <div className="relative w-30 h-30 bg-gray-200 rounded-lg overflow-hidden">
                                        <Image
                                            src={salon.image}
                                            alt={salon.name}
                                            fill
                                            className="object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="hidden w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 items-center justify-center text-2xl">
                                            💇
                                        </div>
                                    </div>
                                </div>


                                {/* Salon Info */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{salon.name}</h3>
                                    <div className="flex items-center text-xs text-gray-600 mb-2">
                                        <FiMapPin size={10} className="mr-1" />
                                        <span className="line-clamp-1">{salon.address}</span>
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                                        <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded">
                                            <FiStar className="fill-current mr-1" size={10} />
                                            <span>{salon.rating}</span>
                                        </div>
                                        <span>{salon.distance}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                            {salon.phone}
                                        </div>
                                        {salon.hasWhatsapp && (
                                            <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-xs flex items-center">
                                                <FiMessageCircle size={12} className="mr-1" />
                                                WhatsApp
                                            </button>
                                        )}
                                    </div>
                                </div>
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