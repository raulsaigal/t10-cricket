
import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import OfferingsSection from '../components/OfferingsSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="flex flex-col">
            <SEO
                title="T10 Tennis Ball Cricket Association of Bihar – Bihar Cricket & Tournaments"
                description="Join the leading Bihar cricket association for tennis ball tournaments, player development, and registrations. Explore winning moments, academy highlights, and register today."
            />
            {/* Hero Section */}
            <HeroSlider />

            {/* Stats Section */}
            <StatsSection />

            {/* Offerings Content */}
            <OfferingsSection />

            {/* Leadership Preview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Meet Our Leaders</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full" />
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Guiding the association towards excellence and integrity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { src: '/members/uploaded_media_0_1769412046397.jpg', name: 'Rahul Singh Sarkar', role: 'Chairman - BT10PL', position: 'top' },
                            { src: '/members/uploaded_media_1_1769412046397.jpg', name: 'Dr. Vikash Kumar', role: 'President - T10TBCAB', position: 'top' },
                            { src: '/members/uploaded_media_2_1769412046397.jpg', name: 'Anisha Kumari', role: 'Treasurer - T10TBCAB', position: 'center' }
                        ].map((leader, index) => (
                            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl h-[400px] cursor-pointer">
                                <img
                                    src={leader.src}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    style={{ objectPosition: leader.position }}
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                                    <p className="text-yellow-400 font-semibold text-lg">{leader.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/members"
                            className="inline-flex items-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-dark transition-colors shadow-lg hover:shadow-xl"
                        >
                            View All Members <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-brand-dark text-white py-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join the League?</h2>
                    <p className="text-xl text-gray-300 mb-10">
                        Register your team for the upcoming season or contact us for more information about the association.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-brand-red text-white font-bold rounded-lg text-lg hover:bg-red-600 transition-colors flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Register Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg text-lg hover:bg-white hover:text-brand-dark transition-colors flex items-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
