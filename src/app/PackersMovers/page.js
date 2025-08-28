"use client"
import React from 'react'
import SecondCard from '../components/SecondCard'
import { careCategories, HomeAppliances, packers, ShiftingServices } from '@/data/data'
import ComprehensiveCareSection from '../components/ComprehensiveCareSwiperWithImages'
import Image from 'next/image'
import FirstCommonCard from '../components/FirstCommonCard'
import SalonCardsHorizontal from '../components/SalonCardWithImages'

function page() {
    return (
        <>

            <SecondCard HealthCareOptions={ShiftingServices} heading={'Local City Shifting Services'} />
            <div className="border-b pb-12  border-gray-200">
                <ComprehensiveCareSection careCategories={packers} heading={'Inter-city Relocation Services'} path="/ShiftingServices/bg.avif" />
            </div>

            <SecondCard HealthCareOptions={ShiftingServices} heading={'International Relocation'} />

            <div className="  my-8 lg:mx-12  ">
                <Image
                    src="/hostel/banner.avif"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>

            <FirstCommonCard HealthCareOptions={HomeAppliances} heading={'Legal Assistance'} />

            <SecondCard HealthCareOptions={ShiftingServices} heading={'Local City Shifting Services'} />

             <SalonCardsHorizontal  heading={'Packing Supplies Providers'} />



        </>
    )
}

export default page