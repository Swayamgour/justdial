
"use client";
import { Divide } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Here you would typically handle the subscription API call
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-900 opacity-10"></div>
            <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-purple-900 opacity-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Company Info */}
                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Justdid
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your one stop shop where you are assisted with day-to-day and exclusive planning and purchasing activities.
                        </p>
                        <div className="flex items-center mb-6 p-3 bg-gray-800 rounded-lg hover:bg-gray-750 transition-all duration-300">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 mr-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <span className="text-lg font-semibold text-blue-300">8888888888</span>
                        </div>
                        <p className="text-gray-400 italic">
                            We own a strong hold on local business information pan India.
                        </p>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                {[
                                    {
                                        icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
                                        name: 'Twitter', url: '#'
                                    },
                                    {
                                        icon: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
                                        name: 'Facebook', url: '#'
                                    },
                                    {
                                        icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                                        name: 'Instagram', url: '#'
                                    },
                                ].map((social) => (
                                    <div
                                        key={social.name}
                                        href={social.url}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1"
                                        aria-label={social.name}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 relative">
                            Our Services
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'B2B Portal', href: '/b2b' },
                                { name: 'Packers and Movers', href: '/packers-movers' },
                                { name: 'Order Food Online', href: '/food-delivery' },
                                { name: 'Free Listings', href: '/listings' },
                                { name: 'Best Deals', href: '/deals' },
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href}>
                                        <div className="text-gray-300 hover:text-white transition-colors flex items-center group">
                                            <span className="w-2 h-2 rounded-full bg-blue-700 mr-3 group-hover:bg-blue-400 transition-colors"></span>
                                            {service.name}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cities */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 relative">
                            Major Cities
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-purple-500"></span>
                        </h4>
                        <ul className="grid grid-cols-2 gap-3">
                            {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Pune', 'Kolkata'].map((city) => (
                                <li key={city}>
                                    <Link href={``}>
                                        <div className="text-gray-300 hover:text-white transition-colors text-sm block p-2 hover:bg-gray-800 rounded-lg transition-all duration-200">
                                            {city}
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 relative">
                            Newsletter
                            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-blue-500"></span>
                        </h4>
                        <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        {subscribed ? (
                            <div className="p-3 bg-green-900 bg-opacity-20 text-green-400 rounded-lg text-center">
                                Thank you for subscribing!
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Business Categories */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-gray-700 relative inline-block">
                        Business Categories
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            'Hotels', 'Restaurants', 'Auto Core', 'Home Deco',
                            'Personal Core', 'Pet Core', 'Fitness', 'Insurance',
                            'Real Estate', 'Sports', 'Schools', 'Medical'
                        ].map((category) => (
                            <Link
                                key={category}
                                href={``}
                            >
                                <div className="text-gray-300 hover:text-white transition-colors text-sm block p-2 text-center bg-gray-800 hover:bg-gray-750 rounded-lg transition-all duration-200 hover:shadow-lg">
                                    {category}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Justdid. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy">
                            <div className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                                Privacy Policy
                            </div>
                        </Link>
                        <Link href="/terms">
                            <div className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                                Terms of Service
                            </div>
                        </Link>
                        <Link href="/contact">
                            <div className="text-gray-400 hover:text-white transition-colors text-sm hover:underline">
                                Contact Us
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;