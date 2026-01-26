
import { Target, TrendingUp, ShieldCheck, Medal, Eye } from 'lucide-react';

const OfferingsSection = () => {
    const offerings = [
        {
            title: 'National Tournaments',
            description: 'Organizing premier national-level tournaments to showcase talent.',
            icon: Target,
        },
        {
            title: 'Player Development',
            description: 'Comprehensive coaching and training programs for all ages.',
            icon: TrendingUp,
        },
        {
            title: 'Fair Play',
            description: 'Upholding the highest standards of sportsmanship and integrity.',
            icon: ShieldCheck,
        },
        {
            title: 'Recognition',
            description: 'Awards and accolades for outstanding performances.',
            icon: Medal,
        },
        {
            title: 'Talent Scouting',
            description: 'Identifying and nurturing promising young cricketers.',
            icon: Eye,
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-cricket-dark">Our Offerings</h2>
                    <div className="w-24 h-1 bg-cricket-gold mx-auto mt-4 rounded-full"></div>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We are dedicated to the growth and professional management of tennis ball cricket.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offerings.map((offer, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-transparent hover:border-brand-blue transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                                <offer.icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">{offer.title}</h3>
                            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                                {offer.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferingsSection;
