import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

// Define a placeholder image URL
const PLACEHOLDER_IMAGE_HOTEL = "https://placehold.co/300x200/E0E0E0/333333?text=Hotel+Image";
const PLACEHOLDER_IMAGE_FOOD = "https://placehold.co/100x100/E0E0E0/333333?text=Food";

// Utility function to generate a random user image placeholder
const getUserAvatar = (seed) => `https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=A0E7E5,68BBEA,FFD151&backgroundType=rounded&radius=50`;

const RecentActivity = () => {
    // Sample data for the cards
    const cardsData = [
        {
            type: 'hotel',
            id: 'grand-sunrise',
            title: 'Hotal The Grand Sunrise',
            location: 'Awadh Puri - Kanpur',
            image: '/hotel/hotel1.webp',
            reviewerName: 'santosh kashyap',
            reviewText: 'I had a wonderful stay at Hotal the Grand Sunrise! The location is perfect. It is near many attractions and beautiful places to visit. I loved working around the area. The staff was...',
            rating: 5, // 5 stars
        },
        {
            type: 'hotel',
            id: 'hotel-siddharth',
            title: 'Hotel Siddharth',
            location: 'Vikash Nagar - Kanpur',
            image: '/hotel/hotel2.jpg',
            reviewerName: 'adarsh dubey',
            reviewText: 'I had an amazing experience at Hotel Siddharth! The staff were friendly and helpful. The rooms were clean and cozy. I loved the tasty food, every meal was delicious! The prices ar...',
            rating: 5, // 5 stars
        },
      
       
        {
            type: 'hotel',
            id: 'hotel-ss-premium',
            title: 'Hotel S.S. Premium',
            location: 'Civil Lines - Kanpur',
            image: '/hotel/hotel3.webp',
            reviewerName: 'priya sharma',
            reviewText: 'The Hotel S.S. Premium was a decent stay. The rooms were clean, but the service could be improved. Overall, an average experience for the price...',
            rating: 3, // 3 stars
        },
        {
            type: 'hotel',
            id: 'dng-grand-hotel',
            title: 'Dng The Grand Hotel',
            location: 'Mall Road - Kanpur',
            image: '/hotel/hotel1.webp',
            reviewerName: 'ravi kumar',
            reviewText: 'Dng The Grand Hotel offers a grand experience. The ambiance is luxurious, and the staff is very attentive. Highly recommend for a comfortable stay...',
            rating: 4, // 4 stars
        },
       
    ];

    // Function to render star ratings
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex text-yellow-400">
                {[...Array(fullStars)].map((_, i) => (
                    <svg key={`full-${i}`} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                ))}
                {hasHalfStar && (
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" style={{ clipPath: 'inset(0 50% 0 0)' }}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    return (
        <div className=" bg-gray-50 p-4 sm:p-8 font-inter lg:mx-8">
            {/* Load Inter font from Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <div className=" mx-auto">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                        <p className="text-gray-600 mt-1">Your recent interactions and reviews</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="recent-activity-prev p-3 rounded-full shadow-sm bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="recent-activity-next p-3 rounded-full shadow-sm bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Swiper Container */}
                <Swiper
                    modules={[Navigation, FreeMode]}
                    navigation={{
                        nextEl: '.recent-activity-next',
                        prevEl: '.recent-activity-prev',
                    }}
                    freeMode={true}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.2,
                        },
                        1280: {
                            slidesPerView: 3.5,
                        },
                    }}
                    className="recent-activity-swiper"
                >
                    {cardsData.map((card) => (
                        <SwiperSlide key={card.id} className="!h-auto">
                            {card.type === 'hotel' ? (
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="p-5 flex flex-col h-full">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-1">{card.title}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{card.location}</p>
                                            </div>
                                            <button className="flex items-center text-green-600 bg-green-50 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors duration-200 flex-shrink-0 ml-2">
                                                <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.52 3.44 1.5 4.87L2.07 22l5.03-1.31c1.32.72 2.83 1.12 4.94 1.12 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm3.39 13.91s-.14-.08-.34-.18c-.21-.11-1.24-.61-1.43-.68-.19-.07-.33-.06-.47.06-.14.12-.54.68-.66.82-.12.14-.25.15-.49.07-.25-.09-1.05-.39-1.99-1.23-.74-.65-1.24-1.46-1.38-1.7-.13-.24-.01-.37.11-.49.11-.12.24-.29.33-.43.09-.14.12-.24.08-.4-.04-.15-.14-.36-.19-.47-.05-.11-.01-.21.03-.31s.38-.91.52-1.2c.14-.29.07-.55-.02-.70-.09-.14-.52-.12-.67-.12-.15 0-.33 0-.51.04-.18.04-.49.19-.75.46-.26.28-1.01.99-1.01 2.41 0 1.42 1.03 2.8 1.16 2.98.13.18 2.03 3.1 4.88 4.04 2.85.93 3.45.62 4.07.57.61-.06 1.43-.58 1.63-1.14s.20-.95.14-1.14c-.06-.18-.21-.29-.44-.40z" />
                                                </svg>
                                                WhatsApp
                                            </button>
                                        </div>

                                        {/* Hotel Image */}
                                        <div className="w-full h-40 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x200/cccccc/000000?text=Image+Unavailable"; }}
                                            />
                                        </div>

                                        {/* Reviewer and Review Text */}
                                        <div className="flex items-center mb-3">
                                            <img
                                                src={getUserAvatar(card.reviewerName)}
                                                alt={card.reviewerName}
                                                className="w-8 h-8 rounded-full mr-3"
                                            />
                                            <div>
                                                <span className="text-sm font-medium text-gray-800 block">{card.reviewerName}</span>
                                                {card.rating && (
                                                    <div className="mt-1">
                                                        {renderStars(card.rating)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 flex-grow leading-relaxed line-clamp-3 mb-4">
                                            {card.reviewText}
                                        </p>
                                        <a href="#" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center">
                                            Write a review
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                    <div className="p-5 flex flex-col h-full">
                                        {/* Rating Card Header */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 leading-tight">How would you rate your experience?</h3>
                                        </div>
                                        
                                        <div className="flex-grow flex flex-col justify-center items-center text-center">
                                            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden mb-4 flex justify-center items-center mx-auto">
                                                <img
                                                    src={card.image}
                                                    alt={card.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/cccccc/000000?text=Image+Unavailable"; }}
                                                />
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900 leading-tight mb-1">{card.title}</h4>
                                            <p className="text-sm text-gray-500 mb-3">{card.location}</p>
                                            <div className="flex items-center text-sm text-gray-600 mb-4 justify-center">
                                                <span className="font-semibold mr-2 text-base">{card.rating}</span>
                                                {renderStars(card.rating)}
                                                <span className="ml-2 text-gray-500">({card.totalRatings} Ratings)</span>
                                            </div>
                                            <div className="flex justify-center space-x-1 mb-5">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={`rate-star-${i}`} className="w-8 h-8 cursor-pointer text-gray-300 hover:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <a href="#" className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center">
                                                Tap to rate
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default RecentActivity;