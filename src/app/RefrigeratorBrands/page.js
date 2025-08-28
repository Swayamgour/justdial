"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function RefrigeratorBrands() {
    const [searchQuery, setSearchQuery] = useState("");

    // Top brands section data
    const topBrands = [
        "All Options", "Haier", "Samsung", "Whirlpool",
        "Bosch", "Kelvinator", "Videocon",
        "Godrej", "LG", "Voltas Beko"
    ];

    // A to Z brands section data
    const moreBrands = [
        "Akai", "Allwyn", "Avanti", "BPL", "Carrier",
        "Croma", "Daewoo", "Electrolux", "Fedders", "Gem",
        "Godrej", "Godrej Pentacool", "Godrej Service Cntr",
        "Gorenje", "Goldstar", "Hitachi", "Haier",
        "Intex", "Kaff", "Kelvinator", "Kenmore", "Kenstar",
        "KIEIS", "Konka", "Koryo", "LG", "Liebherr", "Miele", "Mitashi"
    ];

    // Filter brands by search
    const filteredTop = topBrands.filter(b =>
        b.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredMore = moreBrands.filter(b =>
        b.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const router = useRouter()

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-4 relative h-40">+
                <Image
                    src="/categoryoflist/11052999.avif"
                    alt="Refrigerator Banner"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Header */}
                <h2 className="text-xl font-semibold mb-4">Refrigerator</h2>

                {/* Search Box */}
                <div className="flex items-center border rounded-md px-3 py-2 mb-6 bg-white shadow-sm w-full sm:w-1/3">
                    <FiSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search All Categories"
                        className="outline-none flex-1 text-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Top Brands */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 mb-8">
                    {filteredTop.map((brand, index) => (
                        <div
                            key={index}
                            className="   px-4 py-3 hover:shadow-md transition cursor-pointer text-sm"
                        >
                            {brand}
                        </div>
                    ))}
                </div>

                {/* Explore A to Z */}
                <h3 className="text-lg font-semibold mb-4">Explore more A to Z</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {filteredMore.map((brand, index) => (
                        <div
                            key={index}
                            className=" rounded-md  px-4 py-3 hover:shadow-md transition cursor-pointer text-sm"
                            onClick={() => router.push(`/RefrigeratorRepairServices`)}
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
