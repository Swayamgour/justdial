import { useRouter } from "next/navigation";
import { FiArrowRight, FiHeart, FiSun, FiTool, FiActivity, FiPhone, FiBattery, FiSmile, FiMonitor, FiScissors, FiDroplet } from "react-icons/fi";

export default function AllSpecialists() {
    const specialists = [
        {
            category: "Ayurvedic Doctors",
            icon: <FiHeart className="text-green-600" size={24} />,
            //  count: "1.2k+"
        },
        {
            category: "Pulmonologists Doctors",
            icon: <FiSun className="text-blue-600" size={24} />,
            //  count: "850+"
        },
        {
            category: "Dentists",
            icon: <FiTool className="text-teal-600" size={24} />,
            //  count: "2.5k+"
        },
        {
            category: "Dietitians",
            icon: <FiActivity className="text-yellow-600" size={24} />,
            //  count: "1.1k+"
        },
        {
            category: "Orthopaedic Doctors",
            icon: <FiPhone className="text-purple-600" size={24} />,
            //  count: "1.8k+"
        },
        {
            category: "Paediatricians",
            icon: <FiBattery className="text-pink-600" size={24} />,
            //  count: "1.5k+"
        },
        {
            category: "Dermatologists",
            icon: <FiSmile className="text-red-600" size={24} />,
            //  count: "1.3k+"
        },
        {
            category: "Cardiologists",
            icon: <FiMonitor className="text-red-500" size={24} />,
            //  count: "950+"
        },
        {
            category: "Cosmetic Surgeon Doctors",
            icon: <FiScissors className="text-indigo-600" size={24} />,
            //  count: "700+"
        },
        {
            category: "Diabetologist Doctors",
            icon: <FiDroplet className="text-orange-600" size={24} />,
            //  count: "800+"
        }
    ];

    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex justify-center items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 ">All Specialists</h2>
                {/* <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
          View All
          <FiArrowRight className="ml-1" />
        </button> */}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {specialists.map((specialist, index) => (
                    <div key={index} className="  p-4 text-center  transition-shadow cursor-pointer group flex items-center gap-4" onClick={() => router.push('/RefrigeratorRepairServices')}>
                        <div className="flex justify-center ">
                            <div className="   group-hover:bg-blue-50 transition-colors">
                                {specialist.icon}
                            </div>
                        </div>
                        <h3 className="font-medium text-gray-800 ">{specialist.category}</h3>
                        {/* <p className="text-sm text-gray-600">{specialist.//  count} Doctors</p> */}
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="bg-white border border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm hover:shadow-md">
                    View All Categories
                </button>
            </div>
        </div>
    );
}