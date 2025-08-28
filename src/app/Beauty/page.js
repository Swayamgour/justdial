"use client";
import { beautyServices } from "@/data/data";
import CommonCard from "../components/CommonCard";
import ComprehensiveCareSection from "../components/ComprehensiveCareSwiperWithImages";
import SecondCard from "../components/SecondCard";
import HealthCareList from "../components/HealthcareServices";
import SalonCardWithImages from "../components/SalonCardWithImages";

export default function PopularBeautyServices() {

    const HealthCareOptions = [
        { name: "Allopathy", link: "/Doctors", image: '/beauty/cate1.avif' },
        { name: "Homeopathy", link: "/Doctors", image: '/beauty/cate2.avif' },
        { name: "Naturopathy", link: "/Doctors", image: '/beauty/cate3.avif' },
        { name: "Ayurvedic", link: "/Doctors", image: '/beauty/cate4.avif' },
    ]
    const TattooServices = [
        { name: "Tattoo Parlours", link: "/Doctors", image: '/beauty/tatto1.avif' },
        { name: "Temporary Tattoo", link: "/Doctors", image: '/beauty/tatto2.avif' },
        { name: "Permanent Tattoo", link: "/Doctors", image: '/beauty/tatto3.avif' },
        { name: "Tattoo Removal", link: "/Doctors", image: '/beauty/tatto4.avif' },
    ]
    const WellnessServices = [
        { name: "Spas", link: "/Doctors", image: '/beauty/cate1.avif' },
        { name: "Make Up Artists", link: "/Doctors", image: '/beauty/cate2.avif' },
        { name: "Salon Services", link: "/Doctors", image: '/beauty/cate3.avif' },
        { name: "Mehendi Artists ", link: "/Doctors", image: '/beauty/cate4.avif' },
        { name: "Nail Astist", link: "/Doctors", image: '/beauty/cate1.avif' },
    ]

    const careCategories = [
        { name: "Derma", image: "/beauty/message.avif" },
        { name: "Anti-aging", image: "/beauty/message2.avif" },
        { name: "Hair Treatment", image: "/beauty/screen.avif" },
        { name: "Beauty Clinic", image: "/beauty/washing.avif" },

    ];

    const Relaxation = [
        { name: "Hydrotherapy Centers", link: "/Doctors", image: '/beauty/Spa.avif' },
        { name: "Ayurvedic Aromatherapy", link: "/Doctors", image: '/beauty/Spa2.avif' },
        { name: "Swedish Spa", link: "/Doctors", image: '/beauty/Spa3.avif' },
        { name: "Turkish Spa ", link: "/Doctors", image: '/beauty/Spa4.avif' },
        { name: "Couple Spa", link: "/Doctors", image: '/beauty/Spa5.avif' },
    ]





    return (
        <>

            <div className="max-w-4xl mx-auto px-4 py-8 border-b border-gray-200">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Popular Beauty Services</h1>
                    <p className="text-gray-600">Discover the best beauty services near you</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
                    {beautyServices?.map((service, index) => (
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

            <CommonCard HealthCareOptions={HealthCareOptions} heading={'Specialized Beauty Spas'} />

            <div className="border-b pb-12  border-gray-200">
                {/* <ComprehensiveCareSwiperWithImages */}
                <ComprehensiveCareSection careCategories={careCategories} heading={'Cosmetic Procedures'} path='/beauty/banner.avif' />
            </div>

            <SecondCard HealthCareOptions={WellnessServices} heading={'At-home Beauty And Wellness Services'} />
            <CommonCard HealthCareOptions={TattooServices} heading={'Tattoo Services'} />
            <HealthCareList />
            <SecondCard HealthCareOptions={Relaxation} heading={'Wellness And Relaxation'} />

            <SalonCardWithImages />

        </>
    );
}