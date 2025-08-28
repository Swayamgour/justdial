"use client";
import { useState } from "react";
import { FiSearch, FiChevronRight } from "react-icons/fi";
import {
    MdBuild, MdOutlineElectricalServices, MdComputer,
    MdOutlineAcUnit, MdOutlinePower, MdOutlineLocalMovies, MdOutlineKitchen,
    MdOutlineLocalPhone, MdOutlineTv, MdOutlinePrint, MdOutlineCamera,
} from "react-icons/md";
import {
    GiWashingMachine, GiGreenPower, GiElevator, GiMicrowaveOven, GiWaterDrop, GiGasStove, GiTheaterCurtains, GiDesk, GiMove
} from "react-icons/gi";
import {
    FaMobileAlt, FaLaptop, FaCogs, FaVideo, FaMotorcycle
} from "react-icons/fa";
import { BsCpu, BsPrinter } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";


// map every service to an icon
const serviceIcons = {
    "AC Repair & Services": <MdOutlineAcUnit className="text-blue-600 w-5 h-5" />,
    "Laptop Repair & Services": <FaLaptop className="text-purple-600 w-5 h-5" />,
    "Refrigerator Repair & Services": <MdOutlineKitchen className="text-cyan-600 w-5 h-5" />,
    "Water Purifier Repair & Services": <GiWaterDrop className="text-blue-500 w-5 h-5" />,
    "Camera Repair & Services": <MdOutlineCamera className="text-pink-600 w-5 h-5" />,
    "Computer Printer Repair & Services": <BsPrinter className="text-gray-600 w-5 h-5" />,
    "Electric Chimney Repair & Services": <MdOutlineKitchen className="text-orange-600 w-5 h-5" />,
    "Gas Stove Repair & Services": <GiGasStove className="text-red-600 w-5 h-5" />,
    "Home Theatre System Repair & Services": <GiTheaterCurtains className="text-indigo-600 w-5 h-5" />,

    "Mobile Phone Repair & Services": <FaMobileAlt className="text-blue-600 w-5 h-5" />,
    "TV Repair": <MdOutlineTv className="text-purple-600 w-5 h-5" />,
    "Air Cooler Repair & Services": <MdOutlineAcUnit className="text-cyan-600 w-5 h-5" />,
    "Car AC Repair & Services": <MdBuild className="text-green-600 w-5 h-5" />,
    "DVD Player Repair & Services": <MdOutlineLocalMovies className="text-red-600 w-5 h-5" />,
    "Elevator Repair & Services": <GiElevator className="text-orange-600 w-5 h-5" />,
    "Generator Repair & Services": <GiGreenPower className="text-teal-600 w-5 h-5" />,
    "Inverter Repair & Services": <MdOutlinePower className="text-indigo-600 w-5 h-5" />,

    "Motorcycle Repair & Services": <FaMotorcycle className="text-yellow-600 w-5 h-5" />,
    "Washing Machine Repair & Services": <GiWashingMachine className="text-blue-600 w-5 h-5" />,
    "CCTV Repair & Services": <FaVideo className="text-gray-600 w-5 h-5" />,
    "Computer Hardware Repair & Services": <BsCpu className="text-purple-600 w-5 h-5" />,
    "Dishwasher Repair & Services": <MdOutlineKitchen className="text-cyan-600 w-5 h-5" />,
    "Furniture Repair & Services": <GiDesk className="text-brown-600 w-5 h-5" />,
    "Geyser Repair & Services": <MdOutlinePower className="text-red-600 w-5 h-5" />,
    "Microwave Oven Repair & Services": <GiMove className="text-orange-600 w-5 h-5" />,
};


export default function RepairsAndServices() {
    const categories = [
        {
            title: "Search All Category",
            icon: <MdBuild className="text-blue-600 w-6 h-6" />,
            items: [
                "AC Repair & Services",
                "Laptop Repair & Services",
                "Refrigerator Repair & Services",
                "Water Purifier Repair & Services",
                "Camera Repair & Services",
                "Computer Printer Repair & Services",
                "Electric Chimney Repair & Services",
                "Gas Stove Repair & Services",
                "Home Theatre System Repair & Services",
            ],
        },
        {
            title: "Car Repair & Services",
            icon: <MdOutlineElectricalServices className="text-green-600 w-6 h-6" />,
            items: [
                "Mobile Phone Repair & Services",
                "TV Repair",
                "Air Cooler Repair & Services",
                "Car AC Repair & Services",
                "DVD Player Repair & Services",
                "Elevator Repair & Services",
                "Generator Repair & Services",
                "Inverter Repair & Services",
            ],
        },
        {
            title: "Computer Repair & Services",
            icon: <MdComputer className="text-purple-600 w-6 h-6" />,
            items: [
                "Motorcycle Repair & Services",
                "Washing Machine Repair & Services",
                "CCTV Repair & Services",
                "Computer Hardware Repair & Services",
                "Dishwasher Repair & Services",
                "Furniture Repair & Services",
                "Geyser Repair & Services",
                "Microwave Oven Repair & Services",
            ],
        },
    ];

    const navigate = useRouter();




    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
            <div className="lg:mx-12 mx-auto ">
                {/* Header */}
                <div className="relative mb-12 text-center">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/categoryoflist/ref.jpg" // 👈 apni image path
                            alt="Repairs Background"
                            fill
                            className="object-cover opacity-80"
                        />
                    </div>

                    {/* Overlay for better text visibility */}
                    <div className="absolute "></div>

                    {/* Content */}
                    <div className="relative z-10 py-12">
                        <h1 className="text-4xl font-extrabold  mb-3 text-white">
                            Repairs & Services
                        </h1>
                        <p className="text-white">
                            Find trusted professionals for all your repair needs
                        </p>
                        <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mt-4"></div>
                    </div>
                </div>


                {/* Search Bar */}
                <div className="bg-white rounded-2xl shadow-md p-4 mb-10 border border-gray-200 max-w-2xl mx-auto">
                    <div className="flex items-center">
                        <FiSearch className="w-6 h-6 text-gray-400 mr-3" />
                        <input
                            type="text"
                            placeholder="Search for repairs & services..."
                            className="w-full outline-none text-gray-700 text-lg"
                        />
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 bg-gray-50 px-5 py-4 border-b border-gray-200">
                                {category.icon}
                                <h2 className="font-semibold text-gray-800 text-lg">
                                    {category.title}
                                </h2>
                            </div>

                            {/* Services List */}
                            <ul className="divide-y divide-gray-100">
                                {category.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="px-5 py-3 hover:bg-blue-50 transition-colors cursor-pointer group"
                                        onClick={() => navigate.push(`/RefrigeratorBrands`)}
                                    // onClick={() => navigate(`/search?service=${encodeURIComponent(item)}`)}
                                    >
                                        <div className="flex items-center justify-between">
                                            {/* left side with icon */}
                                            <div className="flex items-center gap-3">
                                                {serviceIcons[item] || (
                                                    <FaCogs className="text-gray-400 w-5 h-5" />
                                                )}
                                                <span className="text-gray-700 group-hover:text-blue-700 font-medium">
                                                    {item}
                                                </span>
                                            </div>
                                            <FiChevronRight className="text-gray-400 group-hover:text-blue-600" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105">
                        View All Services
                        <FiChevronRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
