"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiSearch, FiHome, FiGrid, FiLayers, FiDroplet, FiCoffee, FiPenTool } from "react-icons/fi";

export default function HomeDecorCategories() {
    const categories = [
        {
            name: "Room Furniture",
            icon: <FiHome className="text-blue-600" size={24} />,
            description: "Furniture for every room"
        },
        {
            name: "Furnishing",
            icon: <FiLayers className="text-purple-600" size={24} />,
            description: "Curtains, carpets & more"
        },
        {
            name: "Lamps & Lights",
            icon: <FiDroplet className="text-amber-600" size={24} />,
            description: "Lighting solutions"
        },
        {
            name: "Kitchen & Dining",
            icon: <FiCoffee className="text-red-600" size={24} />,
            description: "Kitchen essentials"
        },
        {
            name: "Interior Designers",
            icon: <FiPenTool className="text-green-600" size={24} />,
            description: "Professional designers"
        }
    ];

    const router = useRouter()

    return (
        <>
            <div className="lg:mx-12 mx-2 ">
                <Image
                    src="/homedocker/banner.jpg"
                    alt="banner"
                    width={1600}
                    height={200}
                    className="w-full h-50 rounded-lg"
                />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Home Decor</h1>
                    <p className="text-gray-600">Transform your space with beautiful home decor</p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FiSearch className="text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search All Category"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            onClick={() => router.push('/FurnitureCategories')}
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                {category.icon}
                            </div>

                            {/* Category Name */}
                            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                {category.name}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600">
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional Categories (if needed) */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                        View All Categories
                        <FiGrid className="ml-2" />
                    </button>
                </div>
            </div>
        </>
    );
}