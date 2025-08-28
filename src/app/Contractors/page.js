"use client"
import { useState, useMemo } from "react"
import { FiSearch, FiX, FiArrowRight } from "react-icons/fi"
import { FaHammer, FaPaintRoller, FaSwimmingPool, FaHome } from "react-icons/fa"
import { MdPlumbing, MdCarpenter, MdRoofing } from "react-icons/md"
import { GiCape, GiDrill, GiWaterDrop, GiConcreteBag, GiLantern, GiWallet } from "react-icons/gi"
import { RiBuilding2Line, RiToolsLine } from "react-icons/ri"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2"

export default function ContractorCategories() {
    const [search, setSearch] = useState("")
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all")

    const categories = [
        { name: "Carpentry Contractors", icon: <MdCarpenter />, type: "specialty" },
        { name: "Flooring Contractors", icon: <GiCape />, type: "specialty" },
        { name: "Plumbing Contractors", icon: <MdPlumbing />, type: "essential" },
        { name: "Carpet Contractors", icon: <GiCape />, type: "specialty" },
        { name: "Drilling Contractors", icon: <GiDrill />, type: "specialty" },
        { name: "False Ceiling Contractors", icon: <FaHammer />, type: "interior" },
        { name: "Interior Decorators", icon: <FaHome />, type: "interior" },
        { name: "Pop Contractors", icon: <GiConcreteBag />, type: "specialty" },
        { name: "Swimming Pool Contractors", icon: <FaSwimmingPool />, type: "exterior" },
        { name: "Waterproofing Contractors", icon: <GiWaterDrop />, type: "essential" },

        { name: "Civil Contractors", icon: <RiBuilding2Line />, type: "essential" },
        { name: "Furniture Contractors", icon: <FaHome />, type: "interior" },
        { name: "Borewell Contractors", icon: <HiOutlineWrenchScrewdriver />, type: "specialty" },
        { name: "Construction Contractors", icon: <TbBuildingSkyscraper />, type: "essential" },
        { name: "Elevator Contractors", icon: <RiToolsLine />, type: "specialty" },
        { name: "Fire Fighting Contractors", icon: <RiToolsLine />, type: "essential" },
        { name: "Labour Contractors", icon: <RiToolsLine />, type: "essential" },
        { name: "Road Construction Contractors", icon: <RiBuilding2Line />, type: "exterior" },
        { name: "Tiling Contractors", icon: <GiCape />, type: "specialty" },
        { name: "Welding Contractors", icon: <RiToolsLine />, type: "specialty" },

        { name: "Electrical Contractors", icon: <HiOutlineWrenchScrewdriver />, type: "essential" },
        { name: "Painting Contractors", icon: <FaPaintRoller />, type: "interior" },
        { name: "Building Contractors", icon: <TbBuildingSkyscraper />, type: "essential" },
        { name: "Drainage Contractors", icon: <RiToolsLine />, type: "exterior" },
        { name: "Fabrication Contractors", icon: <FaHammer />, type: "specialty" },
        { name: "Garden Contractors", icon: <GiLantern />, type: "exterior" },
        { name: "Pipeline Contractors", icon: <RiToolsLine />, type: "essential" },
        { name: "Roofing Contractors", icon: <MdRoofing />, type: "essential" },
        { name: "Wall Paper Contractors", icon: <GiWallet />, type: "interior" },
    ]

    const categoryTypes = [
        { id: "all", name: "All Categories" },
        { id: "essential", name: "Essential Services" },
        { id: "interior", name: "Interior Work" },
        { id: "exterior", name: "Exterior Work" },
        { id: "specialty", name: "Specialty Contractors" },
    ]

    const filteredCategories = useMemo(() => {
        let result = categories

        // Filter by search term
        if (search) {
            result = result.filter(cat =>
                cat.name.toLowerCase().includes(search.toLowerCase())
            )
        }

        // Filter by category type
        if (activeCategory !== "all") {
            result = result.filter(cat => cat.type === activeCategory)
        }

        return result
    }, [search, activeCategory])

    const clearSearch = () => {
        setSearch("")
    }

    return (
        <div className="max-w-6xl mx-auto px-4 pb-12">
            {/* Heading Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Expert Contractors</h1>
                <p className="text-gray-600">Browse our comprehensive directory of professional contractors for all your construction and renovation needs</p>
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
    )
}