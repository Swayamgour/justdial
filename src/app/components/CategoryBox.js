// pages/index.js or any other page
// import CategoryBox from '../components/CategoryBox'; // Adjust path as needed
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CategoryBox() {
    const weddingItems = [
        { imgSrc: '/category/banquethalls_rectangle_2024.webp', label: 'Banquet Halls' },
        { imgSrc: '/category/bridalrequisite_rectangle_2024.webp', label: 'Bridal Requisite' },
        { imgSrc: '/category/caterers_rectangle_2024.webp', label: 'Caterers' },
    ];

    const beautyItems = [
        { imgSrc: '/category/banquethalls_rectangle_2024.webp', label: 'Beauty Parlours' },
        { imgSrc: '/category/bridalrequisite_rectangle_2024.webp', label: 'Spa & Massages' },
        { imgSrc: '/category/caterers_rectangle_2024.webp', label: 'Salons' },
    ];

    const repairItems = [
        { imgSrc: '/category/banquethalls_rectangle_2024.webp', label: 'AC Service' },
        { imgSrc: '/category/bridalrequisite_rectangle_2024.webp', label: 'Car Service' },
        { imgSrc: '/category/caterers_rectangle_2024.webp', label: 'Bike Service' },
    ];

    const dailyNeedsItems = [
        { imgSrc: '/category/banquethalls_rectangle_2024.webp', label: 'Movies' },
        { imgSrc: '/category/bridalrequisite_rectangle_2024.webp', label: 'Grocery' },
        { imgSrc: '/category/caterers_rectangle_2024.webp', label: 'Electricians' },
    ];



    return (
        <div className=" mx-4 lg:mx-12 ">
            {/* Main Grid for all Category Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Category title="Wedding Requisites" items={weddingItems} />
                <Category title="Beauty & Spa" items={beautyItems} />
                <Category title="Repairs & Services" items={repairItems} />
                <Category title="Daily Needs" items={dailyNeedsItems} />
            </div>
        </div>
    );
}

// components/CategoryBox.jsx


function Category({ title, items }) {
    const router = useRouter()
    return (
        <div className="bg-white rounded-xl border border-gray-300 px-4 py-4">
            {/* Category Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                {title}
            </h3>

            {/* Items Grid */}
            <div className="grid grid-cols-3 gap-4">
                {items?.map((item, index) => (
                    <div key={index} className="flex flex-col items-center" onClick={() => router.push('/RefrigeratorRepairServices')}>
                        {/* Image Thumbnail */}
                        <div className="relative w-full h-24 sm:h-32 md:h-40 rounded-lg overflow-hidden mb-2">
                            <Image
                                src={item.imgSrc}
                                alt={item.label}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                className="object-cover"
                            />
                        </div>
                        {/* Label */}
                        <p className="text-sm sm:text-base text-gray-700 text-center">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}