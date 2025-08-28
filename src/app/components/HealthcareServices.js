"use client";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
import { FaStar, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const healthCareData = [
    {
        name: "Paliwal Diagnostics Pvt Ltd",
        rating: 4.1,
        reviews: 599,
        address: "Pandu Nagar, Kanpur",
        phone: "07383084162",
        image: "/doctor/1.avif",
        enquiry: true,
    },
    {
        name: "Dr Saraswats Pathology",
        rating: 4.2,
        reviews: 121,
        address: "Near The Chat Chauraha Swaroop Nagar, Kanpur",
        phone: "08401017975",
        image: "/doctor/2.avif",
        enquiry: true,
    },
    {
        name: "New Leelamani Hospital",
        rating: 3.8,
        reviews: 398,
        address: "New Leelamani Hospital Civil Lines, Kanpur",
        phone: "07383222028",
        image: "/doctor/3.avif",
        enquiry: true,
    },
    {
        name: "Dr L K Budhwar D M Cardiology",
        rating: 3.8,
        reviews: 91,
        address: "Arya Nagar, Kanpur",
        phone: "07383195754",
        image: "/doctor/4.avif",
        enquiry: true,
    },
];

export default function HealthCareList() {

    const router = useRouter()
    return (
        <div className="border-b border-gray-200">

            <section className="lg:mx-12 mx-auto px-4 py-10 ">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
                    Explore Health Care Needs
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {healthCareData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-300 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                            onClick={() => router.push('/RefrigeratorRepairServices')}
                        >
                            {/* Left Image */}
                            <div className="w-full sm:w-48 h-40 sm:h-48 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            {/* Right Content */}
                            <div className="flex-1">
                                {/* <div className="flex flex-col justify-between "> */}
                                <div className="flex items-center gap-2">
                                    <FiThumbsUp className="text-gray-600" />
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.name}
                                    </h3>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="flex items-center bg-green-500 text-white text-sm px-2 py-0.5 rounded">
                                        {item.rating} <FaStar className="ml-1 text-xs" />
                                    </span>
                                    <span className="text-gray-600 text-sm">
                                        {item.reviews} Ratings
                                    </span>
                                </div>

                                {/* Address */}
                                <p className="text-gray-500 text-sm mt-1">{item.address}</p>
                                {/* </div> */}

                                {/* Buttons */}
                                <div className="flex gap-3 mt-3">
                                    {/* Phone Button */}
                                    <a
                                        href={`tel:${item.phone}`}
                                        className="flex items-center gap-2 bg-green-600 text-white text-sm font-medium px-3 py-2 rounded hover:bg-green-700"
                                    >
                                        <FaPhoneAlt />
                                        {item.phone}
                                    </a>

                                    {/* Enquiry Button */}
                                    {item.enquiry && (
                                        <button className="bg-blue-600 text-white text-sm font-medium px-3 py-2 rounded hover:bg-blue-700">
                                            Enquire Now
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                        View All Categories
                    </button>
                </div>
            </section>
        </div>
    );
}
