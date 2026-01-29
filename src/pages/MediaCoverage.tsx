import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { ZoomIn, X } from 'lucide-react';

// Import media images (reusing existing press assets or placeholders)
// @ts-ignore
import press1 from '../assets/images/press1.jpg';
// @ts-ignore
// import press2 from '../assets/images/press2.jpg';
// @ts-ignore
import press3 from '../assets/images/press3.jpg';
// @ts-ignore
import press4 from '../assets/images/press4.jpg';
// @ts-ignore
import press5 from '../assets/images/press5.jpg';

import press7 from '../assets/images/press7.jpeg';

import press8 from '../assets/images/press8.jpeg';
import press9 from '../assets/images/press9.jpeg';
import press10 from '../assets/images/press10.jpeg';
import press11 from '../assets/images/press11.jpeg';
import press12 from '../assets/images/press12.jpeg';
import press13 from '../assets/images/press13.jpeg';
import press14 from '../assets/images/press14.jpeg';
import press15 from '../assets/images/press15.jpeg';
import press16 from '../assets/images/press16.jpeg';
import press17 from '../assets/images/press17.jpeg';
import press18 from '../assets/images/press18.jpeg';
import press19 from '../assets/images/press19.jpeg';
import press20 from '../assets/images/press20.jpeg';
import press21 from '../assets/images/press21.jpeg';
// import press22 from '../assets/images/press22.jpeg';
import press23 from '../assets/images/press23.jpeg';
import press24 from '../assets/images/press24.jpeg';
import press25 from '../assets/images/press25.jpeg';
import press26 from '../assets/images/press26.jpeg';
import press27 from '../assets/images/press27.jpeg';


const mediaItems = [
    { src: press1, },
    // { src: press2, },
    { src: press10, },
    { src: press3, },
    { src: press4, },
    { src: press5, },
    { src: press7, },
    { src: press8, },
    { src: press9, },
    // { src: press10, title: 'U-19 National Tennis Cricket Team Selection' },
    { src: press11, },
    { src: press12, },
    { src: press13, },
    { src: press14, },
    { src: press15, },
    { src: press16, },
    { src: press17, },
    { src: press18, },
    { src: press19, },
    { src: press20, },
    { src: press21, },
    // { src: press22, title: 'U-19 National Tennis Cricket Team Selection' },
    { src: press23, },
    { src: press24, },
    { src: press25, },
    { src: press26, },
    { src: press27, },
    // Add duplicates for grid fullness if needed, or placeholders
    // { src: press1, title: 'Press Feature: Rising Stars', date: 'October 25, 2023', desc: 'Local newspaper covers the journey of our top performing players.' },
];

const MediaCoverage = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <SEO
                title="Media Coverage & Press Notes – T10 Tennis Cricket Bihar"
                description="Explore the latest media coverage, newspaper updates, and press releases regarding T10 Tennis Ball Cricket Association of Bihar."
            />

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Media Coverage</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Headlines, highlights, and history in the making. See how the media captures our journey.
                    </p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <div className="relative overflow-hidden h-64">
                                <motion.img
                                    layoutId={`media-img-${index}`}
                                    src={item.src}
                                    // alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ZoomIn className="text-white w-10 h-10" />
                                </div>
                                {/* <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                    {item.date}
                                </div> */}
                            </div>

                            <div className="p-6">
                                {/* <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-brand-blue transition-colors">
                                    {item.title}
                                </h3> */}
                                {/* <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <motion.img
                            src={selectedImage}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MediaCoverage;
