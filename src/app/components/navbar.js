"use client";
import { useEffect, useState } from "react";
import { Search, Bell, User, Globe, ChevronDown, ChevronUp } from "lucide-react";
import TextSlider from "./TextSlider";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const router = useRouter();



    useEffect(() => { const handleScroll = () => { const position = window.scrollY; if (position > 110) { setScrolled(true); } else if (position < 50) { setScrolled(false); } }; window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);

    const languages = [
        { code: "en", name: "English" },
        { code: "hi", name: "Hindi" },
        { code: "ta", name: "Tamil" },
        { code: "te", name: "Telugu" },
        { code: "bn", name: "Bengali" },
        { code: "mr", name: "Marathi" },
    ];

    return (
        <>
            <header className={`sticky top-0 bg-white z-50 transition-all duration-400 ${scrolled ? "py-2" : "py-0"}`}>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        {/* Logo */}
                        <div className="flex items-center space-x-4">
                            <h1 onClick={() => router.push('/')} className="text-3xl font-bold text-blue-600 cursor-pointer">
                                Just<span className="text-orange-500">dial</span>
                            </h1>

                            {/* Search Inputs - visible only on medium and above */}
                            {scrolled && (
                                <div className="hidden md:flex gap-2 items-center transition-all duration-500 ease-out animate-fadeIn">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="border border-gray-300 p-2 rounded-md w-40 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search for Spa & Salons"
                                        className="border border-gray-300 p-2 rounded-md w-64 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                    />
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-colors">
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Right Section */}
                        <nav className="flex items-center gap-4 sm:gap-5 text-sm">
                            {/* Language Dropdown */}
                            <div className="relative">
                                <div
                                    className="flex items-center gap-1 cursor-pointer text-blue-600 font-medium hover:text-orange-500 transition-colors p-2 rounded-md hover:bg-gray-100"
                                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                >
                                    <Globe className="w-4 h-4" />
                                    <span>EN</span>
                                    {isLanguageOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                </div>

                                {isLanguageOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                                        <div className="px-4 py-2 text-xs text-gray-500 border-b border-gray-100">
                                            Select Language
                                        </div>
                                        {languages.map((lang) => (
                                            <div
                                                key={lang.code}
                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center transition-colors"
                                                onClick={() => {
                                                    console.log(`Selected language: ${lang.name}`);
                                                    setIsLanguageOpen(false);
                                                }}
                                            >
                                                <span className={`w-2 h-2 rounded-full mr-2 ${lang.code === "en" ? "bg-blue-500" : "bg-gray-300"}`} />
                                                {lang.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a href="#" className="hidden lg:block hover:text-orange-500 transition-colors p-2 rounded-md hover:bg-gray-100">
                                Investor Relations
                            </a>

                            <a href="#" className="relative hidden md:block hover:text-orange-500 transition-colors p-2 rounded-md hover:bg-gray-100">
                                Leads
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    1
                                </span>
                            </a>

                            <button className="px-3 py-1 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition-colors hidden sm:block">
                                My Business
                            </button>

                            <div className="relative p-2 rounded-md hover:bg-gray-100">
                                <Bell className="w-5 h-5 cursor-pointer hover:text-orange-500 transition-colors" />
                            </div>

                            <div className="relative">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                                    {/* <User className="w-4 h-4 " /> */}
                                    <Sidebar />
                                </div>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                    1
                                </span>
                            </div>
                        </nav>
                    </div>

                    <TextSlider />


                    {/* Search inputs when not scrolled */}
                    {!scrolled && (
                        <div className="pb-4 transition-all duration-500 ease-in-out">
                            <div className="hidden md:flex flex-col sm:flex-row gap-3 items-center">
                                <div className="flex w-full max-w-2xl gap-2">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="border border-gray-300 p-3 rounded-md w-1/3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Search for Spa & Salons"
                                        className="border border-gray-300 p-3 rounded-md flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
                                    />
                                    <button className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-md transition-colors">
                                        <Search className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Overlay to close language dropdown */}
            {isLanguageOpen && (
                <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />
            )}

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .transition-all {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
        </>
    );
}
