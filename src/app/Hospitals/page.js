"use client";

import { FaHospital, FaTooth, FaChild, FaBrain, FaNotesMedical } from "react-icons/fa"
import { GiKidneys, GiCancer, GiBoneKnife } from "react-icons/gi"
import { MdOutlinePregnantWoman, MdOutlineLocalHospital, MdOutlineElderly } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai"
import { RiMentalHealthLine } from "react-icons/ri"
import { LuStethoscope } from "react-icons/lu"
import { TbVaccine } from "react-icons/tb"
import { FiSearch, FiX } from "react-icons/fi"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useMemo } from "react"

export default function HospitalCategories() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const categories = [
        { name: "Hospitals", icon: <FaHospital className="w-5 h-5" /> },
        { name: "Eye Hospitals", icon: <AiOutlineEye className="w-5 h-5" /> },
        { name: "Multispeciality Hospitals", icon: <MdOutlineLocalHospital className="w-5 h-5" /> },
        { name: "Veterinary Hospitals", icon: <LuStethoscope className="w-5 h-5" /> },
        { name: "Cancer Hospitals", icon: <GiCancer className="w-5 h-5" /> },
        { name: "Dental Hospitals", icon: <FaTooth className="w-5 h-5" /> },
        { name: "Public Veterinary Hospitals", icon: <LuStethoscope className="w-5 h-5" /> },
        { name: "Kidney Hospitals", icon: <GiKidneys className="w-5 h-5" /> },
        { name: "Orthopaedic Hospitals", icon: <GiBoneKnife className="w-5 h-5" /> },

        { name: "Children Hospitals", icon: <FaChild className="w-5 h-5" /> },
        { name: "Maternity Hospitals", icon: <MdOutlinePregnantWoman className="w-5 h-5" /> },
        { name: "Private Hospitals", icon: <FaHospital className="w-5 h-5" /> },
        { name: "24 Hours Veterinary Hospitals", icon: <LuStethoscope className="w-5 h-5" /> },
        { name: "Cardiac Hospitals", icon: <FaNotesMedical className="w-5 h-5" /> },
        { name: "Diabetic Centres", icon: <TbVaccine className="w-5 h-5" /> },
        { name: "HIV Hospitals", icon: <TbVaccine className="w-5 h-5" /> },
        { name: "Neurological Hospitals", icon: <FaBrain className="w-5 h-5" /> },
        { name: "Swine Flu Testing Centres", icon: <TbVaccine className="w-5 h-5" /> },

        { name: "ENT Hospitals", icon: <FaHospital className="w-5 h-5" /> },
        { name: "Mental Hospitals", icon: <RiMentalHealthLine className="w-5 h-5" /> },
        { name: "Public Hospitals", icon: <FaHospital className="w-5 h-5" /> },
        { name: "Ayurvedic Hospitals", icon: <TbVaccine className="w-5 h-5" /> },
        { name: "Charitable Hospitals", icon: <MdOutlineElderly className="w-5 h-5" /> },
        { name: "Esis Hospitals", icon: <FaHospital className="w-5 h-5" /> },
        { name: "Homeopathic Hospitals", icon: <TbVaccine className="w-5 h-5" /> },
        { name: "Nursing Homes", icon: <MdOutlineElderly className="w-5 h-5" /> },
        { name: "Tuberculosis Hospitals", icon: <FaNotesMedical className="w-5 h-5" /> },
    ]

    const filteredCategories = useMemo(() => {
        if (!searchQuery) return categories;
        
        return categories.filter(cat => 
            cat.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [categories, searchQuery]);

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <>
            <div className="mx-2 lg:mx-12 mb-8">
                <Image
                    src="/b_70.jpg"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-xl w-full h-auto object-cover shadow-md"
                />
            </div>
            
            <div className="max-w-6xl mx-auto px-4 pb-12">
                {/* Heading Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Specialized Healthcare</h1>
                    <p className="text-gray-600">Browse through our comprehensive directory of hospital categories</p>
                </div>

                {/* Search Box */}
                <div className="relative mb-8 max-w-2xl">
                    <div className="relative">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search hospital categories..."
                            className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
                        />
                        {searchQuery && (
                            <button 
                                onClick={clearSearch}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <FiX className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Results Info */}
                {searchQuery && (
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-gray-700">
                            Showing {filteredCategories.length} of {categories.length} categories
                            {searchQuery && <span> for "<strong>{searchQuery}</strong>"</span>}
                        </p>
                        <button 
                            onClick={clearSearch}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                {/* Category Grid */}
                {filteredCategories.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredCategories.map((cat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-100 hover:translate-y-[-2px]"
                            >
                                <span className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg text-blue-600">
                                    {cat.icon}
                                </span>
                                <span className="text-gray-800 font-medium">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                            <FiSearch className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-800 mb-2">No categories found</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                            We couldn't find any hospital categories matching "{searchQuery}". Try different keywords.
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}