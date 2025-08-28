"use client";
import {
    FiThermometer,
    FiActivity,
    FiAlertCircle,
    FiWind,
    FiHeadphones,
    FiMic,
    FiSun,
    FiEye
} from "react-icons/fi";
import Image from "next/image";
import HealthcareSwiperEnhanced from "../components/HealthcareSwiperEnhanced";
import ComprehensiveCareSwiperWithImages from "../components/ComprehensiveCareSwiperWithImages";
import HealthcareServices from "../components/HealthcareServices";
import AllSpecialists from "../components/AllSpecialists";
import { useRouter } from "next/navigation";
import CommonCard from "../components/CommonCard";

export default function CommonSymptomsEnhanced() {
    const symptoms = [
        { name: "Fever", specialist: "General Physician Doctors", icon: <FiThermometer className="text-red-500" /> },
        { name: "Gastric / colic Pain", specialist: "Gastroenterologists", icon: <FiActivity className="text-green-500" /> },
        { name: "Body Aches", specialist: "General Physician Doctors", icon: <FiAlertCircle className="text-blue-500" /> },
        { name: "Dust Allergy", specialist: "Doctors For Allergy", icon: <FiWind className="text-yellow-500" /> },
        { name: "Migraine", specialist: "Migraine Doctors", icon: <FiHeadphones className="text-purple-500" /> },
        { name: "Cough", specialist: "General Physician Doctors", icon: <FiMic className="text-orange-500" /> },
        { name: "Skin Allergy", specialist: "Dermatologists", icon: <FiSun className="text-pink-500" /> },
        { name: "Eye Infections", specialist: "Ophthalmologists", icon: <FiEye className="text-indigo-500" /> }
    ];


    const HealthCareOptions = [
        { name: "Allopathy", link: "/Doctors", image: '/doctor/1.avif' },
        { name: "Homeopathy", link: "/Doctors", image: '/doctor/2.avif' },
        { name: "Naturopathy", link: "/Doctors", image: '/doctor/3.avif' },
        { name: "Ayurvedic", link: "/Doctors", image: '/doctor/4.avif' },
    ]


    const Specialised = [
        { name: "Allopathy", link: "/Doctors", image: '/doctor/1.avif' },
        { name: "Homeopathy", link: "/Doctors", image: '/doctor/2.avif' },
        { name: "Naturopathy", link: "/Doctors", image: '/doctor/3.avif' },
        { name: "Ayurvedic", link: "/Doctors", image: '/doctor/4.avif' },
    ]

    const careCategories = [
        { name: "Hair Care", image: "/doctor/1.avif" },
        { name: "Skin Care", image: "/doctor/2.avif" },
        { name: "Oral Care", image: "/doctor/3.avif" },
        { name: "Eye Care", image: "/doctor/4.avif" },
        { name: "Nutritional Care", image: "/doctor/1.avif" },
        { name: "Fitness Care", image: "/doctor/2.avif" },
        { name: "Child Care", image: "/doctor/3.avif" },
    ];

    const router = useRouter()

    return (
        <>
            <div className=" mx-auto px-4 py-8 border-b border-gray-200">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-2xl text-center  text-gray-800 mb-2 font-light bold ">Most Common Symptoms</h2>
                    {/* <p className="text-gray-600  text-center mb-6">Find the right specialist for your symptoms</p> */}

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {symptoms.map((symptom, index) => (
                            <div
                                key={index}
                                className="bg-white p-1 lg:p-4 cursor-pointer"
                                onClick={() => router.push('/RefrigeratorRepairServices')}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <div className="p-4 bg-blue-50 rounded-4xl mb-2">
                                        <div className="text-2xl">{symptom.icon}</div>
                                    </div>

                                    <h3 className="text-lg font-semibold text-gray-900 ">{symptom.name}</h3>
                                    <p className="text-sm text-gray-600">{symptom.specialist}</p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <CommonCard HealthCareOptions={HealthCareOptions} heading={' Find Your Health Care Options'} />


            <div className="border-b mb-12 border-gray-200">

                <HealthcareSwiperEnhanced />
            </div>

            <div className="border-b pb-12  border-gray-200">
                <ComprehensiveCareSwiperWithImages careCategories={careCategories} heading={'Complete healthcare solutions for all your needs'} path='/doctor/doctor-bg-web.avif' />
            </div>



            <CommonCard HealthCareOptions={HealthCareOptions} heading={'For Your Fitness'} />



            <HealthcareServices />

            <div className="border-b border-gray-200">

                <div className="my-12 ">
                    <div className="flex mx-auto lg:mx-12  gap-5">
                        {/* Left Image */}
                        <div className="w-1/2">
                            <Image
                                src="/doctor/banner.avif"
                                alt="Left Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="w-1/2">
                            <Image
                                src="/doctor/banner2.avif"
                                alt="Right Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>


            <AllSpecialists />



        </>
    );
}