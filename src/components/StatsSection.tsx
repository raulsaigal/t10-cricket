import { Trophy, Users, Award, Star } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        { label: 'Tournaments Won', value: '150+', icon: Trophy, color: 'text-yellow-500' },
        { label: 'Active Players', value: '5000+', icon: Users, color: 'text-blue-500' },
        { label: 'Awards Won', value: '75', icon: Award, color: 'text-purple-500' },
        { label: 'Years Active', value: '10+', icon: Star, color: 'text-green-500' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <stat.icon className={`h-10 w-10 ${stat.color} mb-4`} />
                            <span className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</span>
                            <span className="text-sm md:text-base text-gray-600 font-medium mt-1">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
