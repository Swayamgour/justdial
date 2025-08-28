import React from 'react';

const billArray = [
    { id: 1, title: 'Mobile', image: '/category/bt_mobile.svg' },
    { id: 2, title: 'Electricity', image: '/category/bt_electricity.svg' },
    { id: 3, title: 'DTH', image: '/category/bt_dth.svg' },
    { id: 4, title: 'Water', image: '/category/bt_water.svg' },
    { id: 5, title: 'Gas', image: '/category/bt_gas.svg' },
    { id: 6, title: 'Insurance', image: '/category/bt_insurance.svg' },
];

const travelArray = [
    { id: 1, title: 'Flight', subtitle: 'Powered By Easemytrip.com', image: '/category/bt_flight.svg' },
    { id: 2, title: 'Bus', subtitle: 'Affordable Rides', image: '/category/bt_bus.svg' },
    { id: 3, title: 'Train', subtitle: null, image: '/category/bt_train.svg' },
    { id: 4, title: 'Hotel', subtitle: 'Budget-friendly Stay', image: '/category/bt_hotels.svg' },
    { id: 5, title: 'Car Rentals', subtitle: 'Drive Easy Anywhere', image: '/category/bt_carhire.svg' },
];

const BillsAndRecharge = () => {
    return (
        <div className=" lg:mx-8  py-4">
            <CategorySection
                title="Bills & Recharge"
                description="Pay your bills & recharge instantly with Justdial"
                exploreText="Explore More"
                data={billArray}
            />
            <CategorySection
                title="Travel Bookings"
                description="Instant ticket bookings for your best travel experience"
                exploreText="Explore More"
                data={travelArray}
                showSubtitles={true}
            />
        </div>
    );
};

export default BillsAndRecharge;

const CategorySection = ({ title, description, exploreText, data, image, showSubtitles = false }) => {
    return (
        <div className="mx-4 my-8  border border-gray-300 rounded-xl p-6 flex flex-col md:flex-row bg-white ">
            {/* Left section with title and description - Fixed width */}
            <div className="md:w-1/4 mb-4 md:mb-0 md:pr-6">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
                {/* <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                    {exploreText}
                </button> */}
                <h3 className='text-blue-400  py-2'>ExploreText</h3>
            </div>

            {/* Right section with the grid of items - Fixed width */}
            <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4  md:pl-6">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-center hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-20 h-20 border border-gray-300 rounded-xl flex items-center justify-center ">
                            <img src={item.image} alt={item.title} className=" w-19 h-19 object-contain" />
                        </div>
                        <h4 className="text-sm font-medium text-gray-800 mt-2">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};