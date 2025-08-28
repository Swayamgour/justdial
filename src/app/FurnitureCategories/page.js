import Image from "next/image";
import { FiSearch, FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";

export default function FurnitureCategories() {
    const categories = [
        {
            title: "Bean Bags & Accessories",
            items: ["Bean Bags", "Bean Bag Covers", "Accessories"]
        },
        {
            title: "Garden Furnitures",
            items: ["Outdoor Chairs", "Garden Tables", "Patio Sets", "Sun Loungers"]
        },
        {
            title: "Living Room Furniture",
            items: ["Sofas", "Coffee Tables", "TV Units", "Bookshelves"]
        },
        {
            title: "Beds",
            items: ["Single Beds", "Double Beds", "King Size", "Bunk Beds"]
        },
        {
            title: "Kids Furniture",
            items: ["Kids Beds", "Study Tables", "Storage", "Play Furniture"]
        },
        {
            title: "Chairs",
            items: ["Dining Chairs", "Office Chairs", "Accent Chairs", "Bar Stools"]
        },
        {
            title: "Kitchen Furniture",
            items: ["Dining Tables", "Kitchen Cabinets", "Breakfast Sets", "Bar Furniture"]
        }
    ];

    const socialMedia = [
        { name: "Facebook", icon: <FiFacebook size={20} />, color: "text-blue-600" },
        { name: "Twitter", icon: <FiTwitter size={20} />, color: "text-blue-400" },
        { name: "Instagram", icon: <FiInstagram size={20} />, color: "text-pink-600" },
        { name: "YouTube", icon: <FiYoutube size={20} />, color: "text-red-600" }
    ];

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
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Furniture Categories</h1>

                        {/* Search Bar */}
                        <div className="max-w-md mx-auto">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search All Categories"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {categories.map((category, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h2>
                                <ul className="space-y-2">
                                    {category.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer">
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></span>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Follow Us Section */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Follow us on</h2>
                        <div className="flex justify-center space-x-6">
                            {socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className={`p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors ${social.color}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4">Stay updated with our latest collections</p>
                    </div>
                </div>
            </div>
        </>
    );
}