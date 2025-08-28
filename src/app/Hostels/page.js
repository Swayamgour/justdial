"use client"
import { hostels, MoveIn, ShortStay } from '@/data/data';
import React from 'react'
import CommonCard from '../components/CommonCard';
import HealthCareList from '../components/HealthcareServices';
import Image from 'next/image';
import SecondCard from '../components/SecondCard';
// Image

function page() {
    return (
        <>
            <div className="max-w-2xl mx-auto px-4 py-8 border-b border-gray-200">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Are You Looking For</h1>
                    {/* <p className="text-gray-600">Discover the best Hotels services near you</p> */}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 gap-2">
                    {hostels?.map((service, index) => (
                        <div key={index} className="group">
                            <div className=" text-center transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                                {/* Service Icon/Image */}
                                <div className="w-24 h-24 mx-auto mb-3 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                                    {/* If you have actual images, use this: */}
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-13 h-13 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    {/* <span className="text-2xl">{serviceEmojis[service.title]}</span> */}
                                </div>

                                {/* Service Title */}
                                <h3 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-pink-600 transition-colors">
                                    {service.title}
                                </h3>

                                {/* Service Description */}
                                <p className="text-xs text-gray-600 line-clamp-2">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>

            <CommonCard HealthCareOptions={ShortStay} heading={'Sudden Plan - Short Stay ?'} />

            <HealthCareList />

            <h1 className='text-2xl text-center my-8'>List Your Pg</h1>

            <div className=" lg:mx-12 ">
                <Image
                    src="/hostel/banner.avif"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>

            <HealthCareList />

            <SecondCard   HealthCareOptions={MoveIn} heading={'Move-in Assistance'} />

            <h1 className='text-2xl text-center my-8'>Services Around You</h1>

            <div className="">

                <div className="my-12 ">
                    <div className="flex mx-auto lg:mx-12  gap-5">
                        {/* Left Image */}
                        <div className="w-1/2">
                            <Image
                                src="/hostel/banner1.avif"
                                alt="Left Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="w-1/2">
                            <Image
                                src="/hostel/banner2.avif"
                                alt="Right Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default page