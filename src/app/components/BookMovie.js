import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';

const latestMovies = [
    {
        id: 1,
        title: 'War 2 (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '34%',
        image: '/movie/centralized_161375742025_06_26_04_03_00_220.webp',
    },
    {
        id: 2,
        title: 'Coolie The Powerhouse (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '80%',
        image: '/movie/centralized_161571212025_02_05_01_34_14_220.avif',
    },
    {
        id: 3,
        title: 'Mahavatar Narsimha (Animated Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '86%',
        image: '/movie/centralized_162039232025_06_20_02_34_02_220.avif',
    },
    {
        id: 4,
        title: 'Saiyaara (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '76%',
        image: '/movie/centralized_162110222025_07_07_05_27_08_220.avif',
    },
    {
        id: 5,
        title: 'Saamraajya (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        image: '/movie/centralized_161375742025_06_26_04_03_00_220.webp',
    },
    {
        id: 6,
        title: 'War 2 (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '34%',
        image: '/movie/centralized_161375742025_06_26_04_03_00_220.webp',
    },
    {
        id: 7,
        title: 'Coolie The Powerhouse (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '80%',
        image: '/movie/centralized_161571212025_02_05_01_34_14_220.avif',
    },
    {
        id: 8,
        title: 'Mahavatar Narsimha (Animated Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '86%',
        image: '/movie/centralized_162039232025_06_20_02_34_02_220.avif',
    },
    {
        id: 9,
        title: 'Saiyaara (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        rating: '76%',
        image: '/movie/centralized_162110222025_07_07_05_27_08_220.avif',
    },
    {
        id: 10,
        title: 'Saamraajya (Hindi Movie)',
        language: 'Hindi',
        format: '2D',
        image: '/movie/centralized_161375742025_06_26_04_03_00_220.webp',
    },
];



const MovieSection = () => {

    const router = useRouter()
    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg my-8 mx-4 lg:mx-12">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <div className="w-2 h-8 bg-blue-600 rounded-full mr-3"></div>
                    <h2 className="text-2xl font-bold text-gray-900">Latest Movies & Reviews</h2>
                </div>
                <div className="flex space-x-3">
                    <button className="swiper-button-prev-custom p-3 rounded-full shadow-md bg-white text-gray-600 hover:bg-blue-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="swiper-button-next-custom p-3 rounded-full shadow-md bg-white text-gray-600 hover:bg-blue-50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Swiper */}
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                slidesPerGroup={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 12
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 15
                    },
                    640: {
                        slidesPerView: 3.5,
                        spaceBetween: 18
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    }
                }}
            >
                {latestMovies.map((movie) => (
                    <SwiperSlide key={movie.id} className="!h-auto">
                        <div className="group relative h-full rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                            {/* Movie Poster */}
                            <div className="relative h-72 rounded-lg overflow-hidden">
                                <Image
                                    src={movie.image}
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Rating Badge */}
                                {movie.rating && (
                                    <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 text-sm font-semibold text-gray-800 px-3 py-1 rounded-full flex items-center shadow-md">
                                        ❤️ {movie.rating}
                                    </div>
                                )}

                                <button onClick={()=>router.push('/MovieBooking')} className="absolute bottom-0 w-full bg-blue-600 text-white font-semibold py-3 px-4 opacity-0 transition-all duration-300 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                                    Book Now
                                </button>
                            </div>

                            {/* Movie Details */}
                            <div className="p-3">
                                <h3 className="text-base font-semibold text-gray-900 leading-tight line-clamp-2 h-12">
                                    {movie.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    {movie.language} · {movie.format}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MovieSection;