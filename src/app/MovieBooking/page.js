"use client";
import { movieBooking } from "@/data/data";
import { useState } from "react";
import { FaStarHalfAlt, } from "react-icons/fa";
import { FaStar, FaRegStar, FaRegClock, FaShareAlt } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

export default function MovieDetails() {
    const [isRated, setIsRated] = useState(false);
    const [rating, setRating] = useState(0);


    function StarRating({ rating }) {

        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return <div className="flex items-center gap-1">{stars}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 font-sans mx-2 lg:mx-12">
            {/* Dates */}
            <div className="mb-8 overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 md:gap-5 min-w-max">
                    {["Thu, 28th Aug", "Fri, 29th Aug", "Sat, 30th Aug", "Sun, 31st Aug"].map(
                        (date, idx) => (
                            <span
                                key={idx}
                                className={`p-2 rounded-sm text-sm md:text-base cursor-pointer ${idx === 1
                                    ? "font-semibold border border-blue-500 text-blue-600"
                                    : "text-gray-500 border border-gray-300"
                                    }`}
                            >
                                {date}
                            </span>
                        )
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto rounded-lg overflow-hidden flex flex-col lg:flex-row justify- gap-6 ">
                {/* Left Section */}
                <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md overflow-hidden">
                    {/* Movie Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                            <img
                                src="/movie/centralized_161375742025_06_26_04_03_00_220.webp"
                                alt="Coolie The Powerhouse"
                                className="w-40 h-56 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                            />
                            <div className="flex flex-col ">
                                <h1 className="text-2xl font-bold text-gray-900">
                                    Coolie The Powerhouse
                                </h1>
                                <p className="text-sm text-gray-500 mt-1">(Hindi Movie)</p>

                                <div className="flex items-center mt-3 flex-wrap gap-2">
                                    <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                                        <MdLanguage className="w-4 h-4" />
                                        Hindi, English
                                    </span>
                                    <span className="flex items-center gap-1 bg-blue-600 px-2 py-1 rounded-md text-xs font-semibold text-white">
                                        <FaStar className="text-yellow-300" />
                                        68% Liked
                                    </span>
                                    <span className="flex items-center gap-1 bg-blue-800 px-2 py-1 rounded-md text-xs text-white">
                                        <FaRegClock className="w-4 h-4" /> 2h 35m
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rating */}
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FaStar className="text-yellow-500" /> Click to Rate
                        </h2>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) =>
                                    star <= rating ? (
                                        <FaStar
                                            key={star}
                                            className="text-yellow-500 w-6 h-6 cursor-pointer"
                                            onClick={() => setRating(star)}
                                        />
                                    ) : (
                                        <FaRegStar
                                            key={star}
                                            className="text-gray-300 w-6 h-6 cursor-pointer"
                                            onClick={() => setRating(star)}
                                        />
                                    )
                                )}
                            </div>
                            <button
                                onClick={() => setIsRated(!isRated)}
                                className={`px-4 py-2 rounded-md shadow-sm text-sm font-medium transition ${isRated
                                        ? "bg-green-600 text-white hover:bg-green-700"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {isRated ? "✓ Rated" : "Rate"}
                            </button>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-6 text-sm">
                            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                                <BiCameraMovie className="w-4 h-4" /> Read Reviews
                            </button>
                            <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                                <FaShareAlt className="w-4 h-4" /> Share
                            </button>
                        </div>
                    </div>

                    {/* Synopsis */}
                    <div className="px-6 pb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Synopsis</h2>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            A thrilling action movie about a coolie who becomes an unlikely hero
                            when he uncovers a conspiracy that threatens national security.
                        </p>
                    </div>

                    {/* Movie Info */}
                    <div className="border-t border-gray-200 p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-600">Release Date:</p>
                            <p className="font-medium">14th Aug. 2025</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Director:</p>
                            <p className="font-medium">Lokesh Kanagaraj</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Cast:</p>
                            <p className="font-medium">
                                Vijay Kumar, Priya Sharma, Rajesh Malhotra
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600">Genre:</p>
                            <p className="font-medium">Action, Thriller</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div
                    className="w-full lg:w-2/3 space-y-6 p-4 lg:p-0 overflow-y-auto scrollbar-hide"
                    style={{ maxHeight: "calc(100vh - 10px)" }}
                >
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Available Theaters
                    </h2>

                    {movieBooking.map((theater, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
                        >
                            <h3 className="font-bold text-lg">{theater.name}</h3>
                            <div className="flex justify-between items-center">
                                {/* <p className="text-gray-600 text-sm">{theater.rating}</p> */}
                                <p className="text-gray-600 text-sm flex items-center gap-2">
                                    <StarRating rating={theater.starrating} />
                                    <span>{theater.rating}</span>
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {theater.times.map((time, i) => (
                                        <button
                                            key={i}
                                            className="bg-blue-100 text-gray-500 px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-200 transition"
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">{theater.address}</p>

                            <button className="bg-green-500 text-white py-2 px-4 rounded-sm mt-4 cursor-pointer">
                                Show Number
                            </button>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
