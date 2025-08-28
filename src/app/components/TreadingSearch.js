import Image from 'next/image';
import React from 'react';

const TreadingSearch = () => {
    const trendingCategories = [
        { id: 1, title: 'Schools', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
        { id: 2, title: 'Home Tutors', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
        { id: 3, title: 'Colleges', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
        { id: 4, title: 'Gynaecologist & Obstetrician...', description: 'Explore >', image: '/image/Explorecities_Prayagraj.avif' },
    ];

    return (
        <div className="bg-gray-50  p-4 lg:mx-8">
            <div className=" mx-auto p-4 sm:p-6 bg-white rounded-xl border border-gray-300">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Trending Searches Near You</h1>
                    <p className="text-gray-600 mt-2">Stay updated with the latest local trends.</p>
                    {/* <div className="w-full h-px bg-gray-200 my-6"></div> */}
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingCategories.map((category) => (
                        <div key={category.id} className="border border-gray-200 rounded-lg py-2 hover:shadow-md transition-shadow flex items-center ">
                            <div className='w-22 h-22 mr-4 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg relative'>
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className='object-contain p-2'
                                />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
                                <a href="#" className="text-blue-600 font-medium text-sm hover:underline flex items-center">
                                    {category.description}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TreadingSearch;