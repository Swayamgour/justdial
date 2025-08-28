// import { WeddingService } from '@/data/data'
import Image from 'next/image'
import React from 'react'

function RoundCardDegine({ WeddingService, heading }) {
    return (
        <div className='lg:mx-12 mx-2 my-8'>
            <h1 className='font-sans text-2xl font-bold mb-6'>{heading}</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {WeddingService?.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:shadow-md transition-shadow'
                        >
                            <div className="overflow-hidden rounded-full">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={250}
                                    height={250}
                                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </div>
                            <p className='text-xl font-sans'>{service.title}</p>
                        </div>
                    )
                })}
            </div>
           

        {/* </div> */}

        </div >
    )
}

export default RoundCardDegine
