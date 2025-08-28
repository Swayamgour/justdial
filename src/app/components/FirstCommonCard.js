
import React, { use } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function FirstCommonCard({ HealthCareOptions, heading }) {
    // useRouter()
    const router = useRouter()
    return (
        <div className="border-b border-gray-200">

            <div className="my-12 ">
                {/* Heading */}
                <h2 className="text-2xl md:text-2xl text-center  text-gray-800 mb-6 font-light">
                    {heading}
                </h2>

                {/* Grid Section */}
                <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 px-4 md:px-0  mx-auto max-w-6xl">
                    {HealthCareOptions.map((option, index) => (
                        <div
                            key={index}
                            className=" rounded-xl hover:shadow-md transition cursor-pointer p-4 flex flex-col items-center"
                            onClick={() => router.push('/RefrigeratorRepairServices')}
                        >
                            {/* Image Container */}
                            <div className="w-full aspect-[4/4] relative overflow-hidden mb-3  rounded-lg">
                                <Image
                                    src={option.image}
                                    alt={option.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-sm md:text-base lg:text-lg font-medium text-gray-900 text-center">
                                {option.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FirstCommonCard