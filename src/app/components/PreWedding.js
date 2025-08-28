"use client"
import Image from "next/image"

export default function WeddingLayout({ WeddingService, heading , image }) {
    return (
        <div className="mx-2 lg:mx-12 ">

            <h1 className='font-sans text-2xl font-bold mb-6'>{heading}</h1>

            <div className="flex justify-center items-center  bg-gray-50">
                <div className="flex flex-col lg:flex-row w-full  bg-[#f5f3ef] rounded-xl shadow-md overflow-hidden">

                    {/* Left section image (40%) */}
                    <div className="relative w-full lg:w-2/5 h-[300px] lg:h-auto">
                        <Image
                            src={image} // 👈 apni image
                            alt="Wedding Couple"
                            fill
                            priority
                            className="object-contain "
                        />
                    </div>

                    {/* Right section (60%) */}
                    <div className="w-full lg:w-3/5 px-4 lg:px-10 py-8 flex items-center bg-[#f5f3ef]">
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {WeddingService?.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow  text-center"
                                    >
                                        <div className="overflow-hidden rounded-lg">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={250}
                                                height={200}
                                                className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                                            />
                                        </div>
                                        <p className="mt-3 font-medium text-gray-800 text-sm md:text-base">
                                            {service.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
