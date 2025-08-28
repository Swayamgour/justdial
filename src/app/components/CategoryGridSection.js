"use client";

import { useRouter } from "next/navigation";


const categories = [
    { label: "Restaurants", imgSrc: "/icon/restaurant-2022.svg", path: '/Restaurants' },
    { label: "Hotels", imgSrc: "/icon/hotel-2022.svg", path: '/RefrigeratorRepairServices' },
    { label: "Beauty Spa", imgSrc: "/icon/beauty.svg", path: '/Beauty' },
    { label: "Home Decor", imgSrc: "/icon/homedecor.svg", path: '/HomeDecor' },
    { label: "Wedding Planning", imgSrc: "/icon/hotkey_wedding_icon.webp", path: '/WeddingService' },
    { label: "Education", imgSrc: "/icon/restaurant-2022.svg", path: '/Education' },
    { label: "Rent & Hire", imgSrc: "/icon/hotel-2022.svg", path: '/RentHire' },
    { label: "Hospitals", imgSrc: "/icon/beauty.svg", path: '/Hospitals' },
    { label: "Contractors", imgSrc: "/icon/homedecor.svg", path: '/Contractors' },
    { label: "Pet Shops", imgSrc: "/icon/hotkey_wedding_icon.webp", path: '/RefrigeratorRepairServices' },
    { label: "PG/Hostels", imgSrc: "/icon/restaurant-2022.svg", path: '/PackersMovers' },
    { label: "Estate Agent", imgSrc: "/icon/beauty.svg", path: '/EstateAgent' },
    { label: "Dentists", imgSrc: "/icon/restaurant-2022.svg", path: '/RefrigeratorRepairServices' },
    { label: "Gym", imgSrc: "/icon/beauty.svg", path: '/RefrigeratorRepairServices' },
    { label: "Loans", imgSrc: "/icon/hotel-2022.svg", path: '/RefrigeratorRepairServices' },
    { label: "Event Organisers", imgSrc: "/icon/beauty.svg", path: '/EventOrganizers' },
    { label: "Driving Schools", imgSrc: "/icon/homedecor.svg", path: '/RefrigeratorRepairServices' },
    { label: "Packers & Movers", imgSrc: "/icon/hotkey_wedding_icon.webp", path: '/PackersMovers' },
    { label: "Courier Service", imgSrc: "/icon/hotkey_wedding_icon.webp", path: '/Courier' },
    { label: "Popular Categories", imgSrc: "/icon/hotel-2022.svg", path: '/RefrigeratorRepairServices' },
];

// CategoryCard component for each item in the grid
function CategoryCard({ label, imgSrc, path }) {

    const router = useRouter()
    return (
        <div onClick={() => router.push(path)} className="flex flex-col items-center justify-between p-4  rounded-xl  hover:shadow-md transition-shadow duration-200 cursor-pointer">
            <div className="relative w-16 h-16 mb-2 flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                {/* Replaced Next.js Image with standard <img> tag */}
                <img
                    src={imgSrc}
                    alt={label}
                    className="w-12 h-12 object-contain" // Adjusted size for icons inside the placeholder square
                />
            </div>
            <p className="text-sm font-medium text-gray-800 text-center">{label}</p>
        </div>
    );
}

// Main component for the entire UI
export default function CategoryGridSection() {
    return (
        <section className="  py-8 px-4 lg:px-8 ">
            <div className="container  mx-auto   flex flex-col justify-between lg:flex-row gap-4">
                {/* Main Content Area */}
                <div className="flex-grow  rounded-xl  lg:p-6 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-4">
                    {/* Map through categories to create CategoryCard components */}
                    {categories.map((category, index) => (
                        <CategoryCard key={index} label={category.label} imgSrc={category.imgSrc} path={category.path} />
                    ))}
                </div>

                {/* Right Side Vertical Advertisement/Listing */}
                {/* <div className="hidden lg:flex flex-col gap-4 w-20">
                    <div className="flex-1 flex items-center justify-center bg-orange-600 text-white font-bold text-center text-sm rounded-lg shadow-md p-2 transform rotate-90 origin-bottom-left absolute top-1/3 -right-6 h-10 w-32 translate-x-1/2 -translate-y-1/2">
                        <span className="whitespace-nowrap">Advertise</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-blue-600 text-white font-bold text-center text-sm rounded-lg shadow-md p-2 transform rotate-90 origin-bottom-left absolute top-2/3 -right-6 h-10 w-32 translate-x-1/2 -translate-y-1/2">
                        <span className="whitespace-nowrap">Free Listing</span>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

