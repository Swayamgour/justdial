"use client";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function FoodCategories() {
  const categories = [
    {
      title: "Indian Flavours",
      items: ["Pure Veg", "Dhaba", "Mughlai", "North Indian", "More"],
      icon: "/restaurants/1.avif",
    },
    {
      title: "Global Cuisines",
      items: ["Afghani", "Irani", "Oriental", "Continental", "More"],
      icon: "/restaurants/2.webp",
    },
    {
      title: "Nightlife",
      items: ["Pubs", "Lounge Bars", "Night Clubs", "Restaurants & Bars", "More"],
      icon: "/restaurants/3.avif",
    },
    {
      title: "Quick Bites",
      items: ["Bakeries", "Coffee Shops", "Fast Food", "Plaza Outlets", "More"],
      icon: "/restaurants/1.avif",
    },
    {
      title: "Sweet Tooth",
      items: ["Cake Shops", "Desserts"],
      icon: "/restaurants/2.webp",
    },
    {
      title: "Foodie",
      items: ["Fab Biryanis", "Shawarmas", "Sizzlers", "Tandoori Chicken", "More"],
      icon: "/restaurants/3.avif",
    },
  ];

  const router = useRouter()

  return (
    <div className="max-w-8xl mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-800 my-10 text-center">
        🍴 Explore Food Categories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            onClick={() =>router.push('/RefrigeratorRepairServices')}
          >
            {/* Image */}
            <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
              <Image
                src={category.icon}
                alt={category.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer"
                    onClick={() =>router.push('/RefrigeratorRepairServices')}
                  >
                    <FiChevronRight className="text-gray-400 mr-2" size={14} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-lg font-medium flex items-center justify-center mx-auto shadow-md">
          View All Categories
          <FiChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
