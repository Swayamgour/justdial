"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, ThumbsUp } from "lucide-react";

const movies = [
  {
    title: "Param Sundari (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "90%",
  },
  {
    title: "Mahavatar Narsimha",
    lang: "Hindi",
    type: "Animated 3D",
    img: "/movie/centralized_161571212025_02_05_01_34_14_220.avif",
    rating: "85%",
  },
  {
    title: "War 2 (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162039232025_06_20_02_34_02_220.avif",
    rating: "62%",
  },
  {
    title: "Coolie The Powerhouse",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162110222025_07_07_05_27_08_220.avif",
    rating: "68%",
  },
  {
    title: "Vash Level 2 (Gujarati Movie)",
    lang: "Gujarati",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "72%",
  },
  {
    title: "Param Sundari (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "90%",
  },
  {
    title: "Mahavatar Narsimha",
    lang: "Hindi",
    type: "Animated 3D",
    img: "/movie/centralized_161571212025_02_05_01_34_14_220.avif",
    rating: "85%",
  },
  {
    title: "War 2 (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162039232025_06_20_02_34_02_220.avif",
    rating: "62%",
  },
  {
    title: "Coolie The Powerhouse",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162110222025_07_07_05_27_08_220.avif",
    rating: "68%",
  },
  {
    title: "Vash Level 2 (Gujarati Movie)",
    lang: "Gujarati",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "72%",
  },
  {
    title: "Param Sundari (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "90%",
  },
  {
    title: "Mahavatar Narsimha",
    lang: "Hindi",
    type: "Animated 3D",
    img: "/movie/centralized_161571212025_02_05_01_34_14_220.avif",
    rating: "85%",
  },
  {
    title: "War 2 (Hindi Movie)",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162039232025_06_20_02_34_02_220.avif",
    rating: "62%",
  },
  {
    title: "Coolie The Powerhouse",
    lang: "Hindi",
    type: "2D",
    img: "/movie/centralized_162110222025_07_07_05_27_08_220.avif",
    rating: "68%",
  },
  {
    title: "Vash Level 2 (Gujarati Movie)",
    lang: "Gujarati",
    type: "2D",
    img: "/movie/centralized_161375742025_06_26_04_03_00_220.webp",
    rating: "72%",
  },
];

export default function MovieListing() {
  const [activeTab, setActiveTab] = useState("now");

  return (
    <div className="flex bg-gray-100 min-h-screen mx-2 lg:mx-8">
      {/* Sidebar Filters */}
      <aside className="w-64 bg-white p-4 shadow-md">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        {/* Sort By */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Sort By</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Relevance</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Release Date: New to Old</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" /> <span>Release Date: Old to New</span>
            </label>
          </div>
        </div>

        {/* Language */}
        <div>
          <h3 className="font-medium text-gray-700 mb-2">Language</h3>
          <div className="space-y-2 text-sm text-gray-600">
            {["Hindi", "English", "Gujarati", "Marathi", "Tamil", "Telugu"].map(
              (lang) => (
                <label key={lang} className="flex items-center space-x-2">
                  <input type="checkbox" /> <span>{lang}</span>
                </label>
              )
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Tabs + Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("now")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "now"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Now Showing
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-md font-medium ${
                activeTab === "upcoming"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Upcoming Movies
            </button>
          </div>

          <div className="flex items-center border rounded-md px-3 py-2 bg-white shadow-sm w-96">
            <Search className="text-gray-500 w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search Movie or Cinema"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold mb-6">
          Currently Showing Movies Near You in <span className="text-blue-600">Mumbai</span>
        </h2>

        {/* Movie Grid */}
        <main className="flex-1 p-6 overflow-y-auto h-screen">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {movies.map((movie, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden "
            >
              <div className="relative hover:scale-105 transition">
                <Image
                  src={movie.img}
                  alt={movie.title}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded flex items-center shadow-md">
                  <ThumbsUp className="w-4 h-4 text-red-500 mr-1" />
                  {movie.rating}
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800 truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {movie.lang} • {movie.type}
                </p>
              </div>
            </div>
          ))}
        </div>
        </main>
      </main>
    </div>
  );
}
