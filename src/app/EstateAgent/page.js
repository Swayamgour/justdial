"use client"
import { HomeAppliances, HomeFurniture, hostels, MoveIn, RealState, ShortStay } from '@/data/data';
import React from 'react'
import CommonCard from '../components/CommonCard';
import HealthCareList from '../components/HealthcareServices';
import Image from 'next/image';
import SecondCard from '../components/SecondCard';
import ComprehensiveCareSection from '../components/ComprehensiveCareSwiperWithImages';
import FirstCommonCard from '../components/FirstCommonCard';
// Image

function page() {

     const careCategories = [
        { name: "Derma", image: "/beauty/message.avif" },
        { name: "Anti-aging", image: "/beauty/message2.avif" },
        { name: "Hair Treatment", image: "/beauty/screen.avif" },
        { name: "Beauty Clinic", image: "/beauty/washing.avif" },

    ];


    return (
        <>
            <div className="max-w-2xl mx-auto px-4 py-8 border-b border-gray-200">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Are You Planning To</h1>
                    {/* <p className="text-gray-600">Discover the best Hotels services near you</p> */}
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {RealState?.map((service, index) => (
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

            <CommonCard HealthCareOptions={ShortStay} heading={'Residential Property Dealers'} />
            <CommonCard HealthCareOptions={ShortStay} heading={'Get Help For Commercial Properties'} />

            <div className="border-b pb-12  border-gray-200">
                {/* <ComprehensiveCareSwiperWithImages */}
                <ComprehensiveCareSection careCategories={careCategories} heading={'Moving Assistance'} path='/estate/banner.avif' />
            </div>

                <FirstCommonCard HealthCareOptions={HomeAppliances} heading={'Legal Assistance'} />
                <FirstCommonCard HealthCareOptions={HomeAppliances} heading={'Financial Assistance'} />


            {/* <FirstCommonCard  /> */}

            {/* <HealthCareList /> */}

            <h1 className='text-2xl text-center my-8'>Are You A Property Owner ?</h1>

            <div className=" lg:mx-12 mb-12 ">
                <Image
                    src="/hostel/banner.avif"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>

            {/* <HealthCareList /> */}

            {/* <SecondCard   HealthCareOptions={MoveIn} heading={'Move-in Assistance'} /> */}

            {/* <h1 className='text-2xl text-center my-8'>Services Around You</h1> */}

            {/* <div className="">

                <div className="my-12 ">
                    <div className="flex mx-auto lg:mx-12  gap-5">
                        <div className="w-1/2">
                            <Image
                                src="/hostel/banner1.avif"
                                alt="Left Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>

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
            </div> */}

             <SecondCard HealthCareOptions={HomeFurniture} heading={'Property Services'} />


        </>
    )
}

export default page