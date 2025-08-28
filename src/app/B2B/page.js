"use client";
import { useState } from "react";
import { ChevronRight, Star, CheckCircle, Search, MapPin } from "lucide-react";
import Head from 'next/head';
import Image from "next/image";
import PremiumCategories from "../components/PremiumCategories";

export default function BusinessDirectory() {
  const [activeTab, setActiveTab] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Temple", icon: '/b2b/tample.jpg', listings: 42 },
    { name: "Temple Dome", icon: '/b2b/2.avif', listings: 28 },
    { name: "Industrial Buildings", icon: '/b2b/tample.jpg', listings: 156 },
    { name: "Commercial Property Valuers", icon: '/b2b/2.avif', listings: 89 },
    { name: "Real Estate Financial Analysis", icon: '/b2b/tample.jpg', listings: 67 },
    { name: "Industrial Property", icon: '/b2b/2.avif', listings: 112 },
  ];

  const categorieTabs = [
    "All Categories",
    "Food & Beverage",
    "Industrial Machinery",
    "Apparel & Fashion",
    "Electronics",
    "B2B Events"
  ];

  return (
    <>
      <Head>
        <title>Business Directory | Find Verified Sellers</title>
        <meta name="description" content="Find verified sellers for your business needs" />
      </Head>


      <div className="bg-white shadow-sm ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center py-4 text-sm">
            {categorieTabs.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === category ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}


      <PremiumCategories title='  Categories Similar To Your Search' />
      <PremiumCategories title='Top-Ranked Categories For You' />
      <PremiumCategories title='Real Estate' />
    </>
    
  );
}