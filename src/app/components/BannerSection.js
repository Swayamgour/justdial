"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation"; // ✅ Correct import

export default function BannerSection() {
    return (
        <section className="mx-1 lg:mx-8 bg-gray-50 py-6">
            <div className="container flex flex-col mx-auto lg:flex-row gap-4 px-4">
                {/* LEFT IMAGE SWIPER */}
                <div className="flex-1 rounded-xl overflow-hidden">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="h-full rounded-xl"
                    >
                        <SwiperSlide>
                            <div className="w-full bg-gray-200 flex items-center justify-center rounded-xl">
                                <Image
                                    src="/image/banner_advertising.webp"
                                    alt="banner"
                                    width={500}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full bg-gray-5 flex items-center justify-center rounded-xl">
                                <Image
                                    src="/image/banner_leads.webp"
                                    alt="banner"
                                    width={500}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* RIGHT STATIC CARDS */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                    <Card
                        color="bg-blue-500"
                        label="B2B"
                        title="Quick Quotes"
                        img="/image/b2b_square_hotkey.webp"
                        link="/B2B"
                    />
                    <Card
                        color="bg-blue-600"
                        label="Repairs"
                        title="Get Nearest Vendor"
                        img="/image/repair_square_hotkey.webp"
                        link="/Repairs"
                    />
                    <Card
                        color="bg-indigo-600"
                        label="Real Estate"
                        title="Finest Agents"
                        img="/image/realestate_square_hotkey.webp"
                        link="/RefrigeratorRepairServices"
                    />
                    <Card
                        color="bg-green-600"
                        label="Doctors"
                        title="Book now"
                        img="/image/doctor_square_hotkey.webp"
                        link="/Doctors"
                    />
                </div>
            </div>
        </section>
    );
}

function Card({ label, img, title, color, link }) {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter(); // ✅ Works in client component

    return (
        <div
            className="relative flex-1 h-[300px] rounded-xl overflow-hidden group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => router.push(link)} // ✅ Dynamic navigation
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={img}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className={`absolute inset-0 ${color} opacity-50`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col p-4 text-white">
                <div className="flex-grow flex flex-col justify-start">
                    <h4 className="font-semibold text-xl">{label}</h4>
                    <p className="mt-1 text-base font-light">{title}</p>
                </div>

                {/* Smooth transition button */}
                <div className="mt-auto self-start">
                    <div
                        className={`flex items-center gap-2 bg-white text-blue-600 rounded-full shadow-md overflow-hidden transition-all duration-300 ${isHovered ? "px-4 py-2 w-[110px]" : "p-2 w-[37px]"
                            }`}
                    >
                        {isHovered ? (
                            <>
                                <span className="text-sm font-medium opacity-100 transition-opacity duration-300">
                                    Explore
                                </span>
                                <FiArrowRight className="w-5 h-5" />
                            </>
                        ) : (
                            <FiPlus className="w-5 h-5 text-blue-600 mx-auto" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
