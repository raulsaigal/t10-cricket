import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const DistrictAssociation = () => {
    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <SEO
                title="District Associations – T10 Tennis Cricket Bihar"
                description="Our District Association Committee. Join the T10 Tennis Ball Cricket Association in your district."
            />

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">District Association Committee</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Connecting cricket enthusiasts from every corner of Bihar.
                    </p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-lg w-full bg-white p-2 border border-gray-100">
                            <img
                                src="/districts/bhojpur.jpg"
                                alt="Bhojpur District Tennis Ball Cricket Association"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-lg w-full bg-white p-2 border border-gray-100">
                            <img
                                src="/districts/jehanabad.jpg"
                                alt="T10 Tennis Ball Cricket Association of Jehanabad"
                                className="w-full h-auto object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DistrictAssociation;
