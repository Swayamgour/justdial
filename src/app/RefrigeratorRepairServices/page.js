"use client";
import Image from "next/image";
import { useState } from "react";
import {
    FiSearch,
    FiStar,
    FiMapPin,
    FiPhone,
    FiMessageCircle,
    FiCheck,
    FiFilter,
    FiChevronDown,
} from "react-icons/fi";
import FiltersBar from "../components/FiltersBar";
import { FiZap, FiSliders } from "react-icons/fi";

export default function RefrigeratorRepairServices() {
    const [selectedSort, setSelectedSort] = useState("Top Rated");
    const [showSortOptions, setShowSortOptions] = useState(false);

    // Sample data for repair services
    const repairServices = [
        {
            id: 1,
            name: "Weather Maker",
            rating: 4.7,
            ratingsCount: 47,
            location: "Sant Nagar Chauraha Sarojni Nagar, Kanpur - 5 km",
            services: ["Refrigerator Repair & Services", "AC Repair & Services"],
            phone: "6392601692",
            quickResponse: true,
            trending: false,
            image: "/refegreter.jpg",
        },
        {
            id: 2,
            name: "Tanu Repairing Centre",
            rating: 4.2,
            ratingsCount: 2,
            location: "Indira Nagar Road Indira Nagar, Kanpur - 21 km",
            services: ["Refrigerator Repair Services-Affiliation", "AC Repair & Services"],
            phone: "9876543210",
            quickResponse: false,
            trending: true,
            image: "/refegreter.jpg",
        },
        {
            id: 11,
            name: "Weather Maker",
            rating: 4.7,
            ratingsCount: 47,
            location: "Sant Nagar Chauraha Sarojni Nagar, Kanpur - 5 km",
            services: ["Refrigerator Repair & Services", "AC Repair & Services"],
            phone: "6392601692",
            quickResponse: true,
            trending: false,
            image: "/refegreter.jpg",
        },
        {
            id: 12,
            name: "Tanu Repairing Centre",
            rating: 4.2,
            ratingsCount: 2,
            location: "Indira Nagar Road Indira Nagar, Kanpur - 21 km",
            services: ["Refrigerator Repair Services-Affiliation", "AC Repair & Services"],
            phone: "9876543210",
            quickResponse: false,
            trending: true,
            image: "/refegreter.jpg",
        },
        {
            id: 15,
            name: "Weather Maker",
            rating: 4.7,
            ratingsCount: 47,
            location: "Sant Nagar Chauraha Sarojni Nagar, Kanpur - 5 km",
            services: ["Refrigerator Repair & Services", "AC Repair & Services"],
            phone: "6392601692",
            quickResponse: true,
            trending: false,
            image: "/refegreter.jpg",
        },
        {
            id: 21,
            name: "Tanu Repairing Centre",
            rating: 4.2,
            ratingsCount: 2,
            location: "Indira Nagar Road Indira Nagar, Kanpur - 21 km",
            services: ["Refrigerator Repair Services-Affiliation", "AC Repair & Services"],
            phone: "9876543210",
            quickResponse: false,
            trending: true,
            image: "/refegreter.jpg",
        },
    ];

    const sortOptions = [
        "Top Rated",
        "Quick Response",
        "JD Verified",
        "Ratings",
        "Price: Low to High",
        "Price: High to Low",
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white  ">
                <div className="lg:mx-12 mx-auto px-4 py-4">
                    <div className="flex flex-col">
                        <div className="text-sm text-gray-500 mb-1">
                            <span>
                                Kanpur &gt; Refrigerator Repair & Services in Kanpur &gt; Alwyn
                                Refrigerator Repair & Services in Kanpur &gt; Alwyn Refrigerator
                                Repair & Services in Lathampur Road Vikash Nagar
                            </span>
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            Popular Alwyn Refrigerator Repair & Services in Lathampur Road
                            Vikash Nagar, Kanpur
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 py-2">
                        {/* Sort by */}
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            Sort by <FiChevronDown size={16} />
                        </button>

                        {/* Top Rated */}
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            <FiStar size={16} /> Top Rated
                        </button>

                        {/* Quick Response */}
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            <FiZap size={16} /> Quick Response
                        </button>

                        {/* JD Verified */}
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            <FiCheck size={16} /> Jd Verified
                        </button>

                        {/* Ratings */}
                        <button className="flex items-center gap-2 border border-gray-300 px-3 py-1.5 rounded-md text-sm hover:bg-gray-50">
                            Ratings <FiChevronDown size={16} />
                        </button>

                        {/* All Filters */}
                        <button className="flex items-center gap-2 border border-gray-400 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-gray-50">
                            <FiSliders size={16} /> All Filters
                        </button>
                    </div>
                </div>
            </div>
            {/* <FiltersBar /> */}

            {/* Filters and Sort */}


            {/* Main Content */}
            <div className=" min-h-screen">
                <div className="lg:mx-12 mx-auto px-4  grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT SIDE (scrollable cards) */}
                    <div className="lg:col-span-2 h-[calc(100vh-100px)] overflow-y-auto pr-2">
                        <div className="grid grid-cols-1 gap-5">
                            {repairServices.map((service) => (
                                <div
                                    key={service.id}
                                    className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
                                >
                                    <div className="p-4 flex flex-col md:flex-row gap-4">
                                        {/* Image */}
                                        <div className="relative w-full md:w-44 h-44 rounded-lg overflow-hidden">
                                            <Image
                                                src={service.image}
                                                alt={service.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {service.name}
                                                    </h3>

                                                    {service.trending && (
                                                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">
                                                            🔥 Trending
                                                        </span>
                                                    )}
                                                    {service.quickResponse && (
                                                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                                                            ⚡ Quick Response
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="flex items-center gap-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                        <span>{service.rating}</span>
                                                        <FiStar size={12} className="fill-current" />
                                                    </div>
                                                    <span className="text-sm text-gray-600">
                                                        {service.ratingsCount} Ratings
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-1 mb-2 text-sm text-gray-600">
                                                    <FiMapPin size={14} />
                                                    <span>{service.location}</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {service.services.map((s, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                                        >
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium shadow-sm">
                                                    <FiPhone size={16} />
                                                    <span>Show Number</span>
                                                </button>

                                                <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium shadow-sm">
                                                    <FiMessageCircle size={16} />
                                                    <span>WhatsApp</span>
                                                </button>

                                                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-4 rounded-lg text-sm font-medium shadow-sm">
                                                    Send Enquiry
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE (fixed enquiry form) */}
                    <div className="lg:col-span-1 sticky top-35 self-start">
                        <div className="bg-white rounded-xl border border-gray-200 shadow p-6">
                            <h3 className="text-lg font-bold text-gray-900">
                                Get the List of Top <br />
                                <span className="text-blue-600">
                                    Refrigerator Repair & Services–Allwyn
                                </span>
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                We’ll send you contact details in seconds for free
                            </p>

                            <div className="mt-6 space-y-3">
                                <input
                                    type="text"
                                    placeholder="User"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="tel"
                                    placeholder="6392601692"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-medium flex items-center justify-center gap-2">
                                    Send Enquiry <span className="text-lg">»»»</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
