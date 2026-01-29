import { motion } from 'framer-motion';

const AcademyPartnerSection = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-brand-blue mb-4"
                    >
                        Our Academy Partner
                    </motion.h2>
                    <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-6" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full border-4 border-gray-100">
                        <img
                            src="/partners/academy-partner.jpg"
                            alt="Bhojpur United Cricket Academy - BUCA"
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay for slight depth */}
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AcademyPartnerSection;
