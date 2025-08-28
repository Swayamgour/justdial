'use client'
import React from 'react'
import SecondCard from '../components/SecondCard'
import { HomeAppliances, HomeFurniture, VehicleRentals, Workstation } from '@/data/data'
import CommonCard from '../components/CommonCard'
import FirstCommonCard from '../components/FirstCommonCard'
import ComprehensiveCareSection from '../components/ComprehensiveCareSwiperWithImages'
import HealthCareList from '../components/HealthcareServices'
import SalonCardsHorizontal from '../components/SalonCardWithImages'

function page() {
    return (
        <>
            <div>
                {/* <div className='mx-auto'> */}
                <FirstCommonCard HealthCareOptions={HomeAppliances} heading={'Setup Your Workstation'} />
                {/* </div> */}
                <CommonCard HealthCareOptions={Workstation} heading={'Setup Your Workstation'} />
                <SecondCard HealthCareOptions={HomeFurniture} heading={'Get Your Home Furniture On Rent'} />

                <div className="border-b pb-12  border-gray-200">
                    {/* <ComprehensiveCareSwiperWithImages */}
                    <ComprehensiveCareSection careCategories={VehicleRentals} heading={'Vehicle Rentals'} path='/renthire/bg.avif' />
                </div>

                {/* <div className='mx-auto'> */}
                <FirstCommonCard HealthCareOptions={HomeAppliances} heading={'Setup Your Workstation'} />
                {/* </div> */}
                <CommonCard HealthCareOptions={Workstation} heading={'Setup Your Workstation'} />
                <SecondCard HealthCareOptions={HomeFurniture} heading={'Get Your Home Furniture On Rent'} />

                <HealthCareList />
                 <SalonCardsHorizontal  heading={'Top Salons and Spas'} />
            </div>
        </>
    )
}

export default page