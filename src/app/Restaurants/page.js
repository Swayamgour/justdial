import Image from "next/image";
import { FaUtensils } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { MdRoomService } from "react-icons/md";
import FoodCategories from "../components/FoodCategories";

export default function RestaurantUI() {
    return (
        <div className="min-h-screen mx-2 lg:mx-12 px-4 py-8">
            {/* Banner Section */}
            <div className="relative w-full">
                <Image
                    src="/restaurants/banner.avif"
                    alt="banner"
                    width={1600}
                    height={600}
                    className="w-full h-auto rounded-lg"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                        IT&apos;S ALL ABOUT FOOD
                    </h1>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="flex items-center gap-3 bg-white rounded-xl shadow p-4">
                        <FaUtensils className="text-4xl text-yellow-500" />
                        <div className="text-left">
                            <h3 className="font-semibold text-lg">Book A Table</h3>
                            <p className="text-sm text-gray-500">Make Reservation {`>`} </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center gap-3 bg-white rounded-xl shadow p-4">
                        <FiTrendingUp className="text-4xl text-red-500" />
                        <div className="text-left">
                            <h3 className="font-semibold text-lg">WHAT&apos;S TRENDING?</h3>
                            <p className="text-sm text-gray-500">Try it Yourself {`>`}</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center gap-3 bg-white rounded-xl shadow p-4">
                        <MdRoomService className="text-4xl text-blue-500" />
                        <div className="text-left">
                            <h3 className="font-semibold text-lg">ORDER FOOD</h3>
                            <p className="text-sm text-gray-500">7 Restaurants {`>`}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Feature Cards */}

            <FoodCategories />

        </div>
    );
}
