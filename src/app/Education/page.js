"use client"
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa"
import { PiGraduationCapLight } from "react-icons/pi"
import { GiMusicalNotes } from "react-icons/gi"
import { HiOutlineDocumentText } from "react-icons/hi"
import { FiSearch } from "react-icons/fi"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function EducationCategories() {
    const categories = [
        { name: "Schools", icon: <FaSchool className="w-6 h-6" /> },
        { name: "Colleges", icon: <PiGraduationCapLight className="w-6 h-6" /> },
        { name: "Hobby Classes", icon: <GiMusicalNotes className="w-6 h-6" /> },
        { name: "Tutorials", icon: <HiOutlineDocumentText className="w-6 h-6" /> },
        {
            name: "Vocational Course Training Centres",
            icon: <FaChalkboardTeacher className="w-6 h-6" />,
        },
    ]

    const router = useRouter()

    return (
        <>


            {/* <Image */}
            {/* <div className="mx-2  lg:mx-12 ">
                <Image
                    src="/education/banner.jpg"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div> */}

            {/* Heading */}
            <div className="max-w-2xl mx-auto mt-6 p-4 ">


                <h2 className="text-xl font-semibold mb-4">Education</h2>

                {/* Search Box */}
                <div className="relative mb-6">
                    <FiSearch className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search All Category"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm"
                    />
                </div>

                {/* Category List */}
                <div className="space-y-3">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 transition rounded-md p-3 cursor-pointer"
                            onClick={()=>router.push('/RefrigeratorRepairServices') }
                        >
                            <span className="text-gray-700">{cat.icon}</span>
                            <span className="text-gray-800 text-sm font-medium">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
