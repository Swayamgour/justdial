"use client";
import BannerSection from '@/app/components/BannerSection'
import BillsAndRecharge from '@/app/components/Bill'
import CategoryBox from '@/app/components/CategoryBox'
import CategoryGridSection from '@/app/components/CategoryGridSection'
import TreadingSearch from '@/app/components/TreadingSearch'
import BookMovie from '@/app/components/BookMovie'
import TuristPlace from '@/app/components/TuristPlace'
import PopularSearches from '@/app/components/PopularSearches'
import SunnyDayEssentials from '@/app/components/SunnyDayEssentials'
import ResentActivity from '@/app/components/ResentActivity'
import React from 'react'
import Navbar from '@/app/components/navbar';
import BusinessDirectory from '../app/B2B/page';

function HomePage() {
    return (
        <div>
            {/* <Navbar /> */}
            <BannerSection />
            <CategoryGridSection />
            <CategoryBox />
            <BillsAndRecharge />
            <TreadingSearch />
            <BookMovie />
            <TuristPlace />
            <PopularSearches />
            <SunnyDayEssentials />
            <ResentActivity />

            {/* <BusinessDirectory /> */}
        </div>
    )
}

export default HomePage