import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
    {
        id: 1,
        title: "Bihar T10 Premier League",
        date: "Coming Soon - 2026",
        location: "Patna, Bihar",
        image: "/events/event4.jpg", // Poster
        description: "The biggest tennis ball cricket league in Bihar. 8 Teams, 1 League, 1 Crore Prize Pool. Get ready for the ultimate showdown!",
        status: "Upcoming"
    },
    {
        id: 2,
        title: "BT10PL U-16 Tournament",
        date: "Registration Open",
        location: "All Districts",
        image: "/events/event1.jpg", // BT10PL Log/Shield
        description: "A specialized tournament for Under-16 boys and girls. Showcase your talent and get a chance to be scouted for the main league.",
        status: "Registration"
    },
    {
        id: 3,
        title: "Ara'z Dandiya Night's",
        date: "Festive Season",
        location: "Ara, Bhojpur",
        image: "/events/event3.jpg", // Dandiya
        description: "Celebrating culture and sportsmanship together. Join us for a vibrant night of dance and community bonding organized by BDTBCA-Bhojpur.",
        status: "Cultural"
    },
    {
        id: 4,
        title: "Ara'z Sports Club",
        date: "Ongoing",
        location: "Ara, Bihar",
        image: "/events/event2.jpg", // Club Logo 1
        description: "Join the premier sports club in Ara for regular training sessions, practice matches, and fitness conditioning.",
        status: "Training"
    },
    {
        id: 5,
        title: "Club Championship",
        date: "TBA",
        location: "Bihar",
        image: "/events/event5.jpg", // Club Logo 2
        description: "Inter-club tournaments to foster competitive spirit and teamwork among local cricket clubs.",
        status: "Tournament"
    }
];

const EventsSection = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
                    >
                        Our Events
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-6" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        From high-stakes tournaments to community gatherings, experience the vibrant spirit of cricket in Bihar.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <motion.img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover object-center"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue shadow-sm uppercase tracking-wider">
                                    {event.status}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-red transition-colors">
                                    {event.title}
                                </h3>

                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1 text-brand-yellow" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-1 text-brand-red" />
                                        {event.location}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {event.description}
                                </p>

                                <a href="https://www.instagram.com/t10tbcab/">
                                    <button className="w-full py-3 rounded-xl bg-gray-50 text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300 flex items-center justify-center group/btn">
                                        View Details
                                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
