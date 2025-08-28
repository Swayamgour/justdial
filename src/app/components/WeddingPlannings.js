import React from 'react'
import Image from 'next/image'

function WeddingPlannings({ WeddingService, heading  , banner }) {
    return (
        <div className='lg:mx-12 mx-2 my-8'>
            {/* Heading */}
            <h1 className='font-sans text-2xl font-bold mb-6'>{heading}</h1>

            {/* Cards Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                {WeddingService?.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer'
                        >
                            {/* Image */}
                            <div className="overflow-hidden rounded-t-xl">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>

                            {/* Title */}
                            <div className="p-3 text-center">
                                <p className='text-lg font-medium text-gray-800'>{service.title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

           
            <div className="w-full mt-4 lg:mt-8">
                <Image
                    src={banner}
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>

        </div>
    )
}

export default WeddingPlannings
