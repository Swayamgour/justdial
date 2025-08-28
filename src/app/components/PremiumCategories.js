import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function PremiumCategories({title, title2}) {
    const [hoveredCard, setHoveredCard] = useState(null);

    const categories = [
        { name: "Temple", icon: '/b2b/tample.jpg' },
        { name: "Temple Dome", icon: '/b2b/2.avif' },
        { name: "Industrial Buildings", icon: '/b2b/tample.jpg' },
        { name: "Commercial Property Valuers", icon: '/b2b/2.avif' },
        { name: "Real Estate Financial Analysis", icon: '/b2b/tample.jpg' },
        { name: "Industrial Property", icon: '/b2b/2.avif' },
    ];

    return (
        <div className=" mx-auto px-4 py-8 lg:mx-12">
            {/* Header */}



            <div className="text-start mb-12">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {title}
                </h1>
                {/* <p className="text-gray-600 max-w-2xl mx-auto">
                   {title2}
                </p> */}
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-10">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 group cursor-pointer"
                    >
                        <div className="h-60 relative overflow-hidden">
                            <Image
                                src={category.icon}
                                alt={category.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            {/* <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-sm">
                                <span className="text-xs font-medium text-gray-700">{category.listings}+</span>
                            </div> */}
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-1 truncate">{category.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <button className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                    View All Categories
                </button>
            </div>
        </div>
    );
}