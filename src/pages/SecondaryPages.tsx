

import { useState } from 'react';
import { Send, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

// Gallery Images Imports
// @ts-ignore
import img1 from '../assets/images/hero1.jpg';
// @ts-ignore
import img2 from '../assets/images/hero2.jpg';
// @ts-ignore
import img3 from '../assets/images/hero3.jpg';
// @ts-ignore
import img4 from '../assets/images/hero4.jpg';
// @ts-ignore
import img5 from '../assets/images/hero5.jpg';
// @ts-ignore
import img6 from '../assets/images/hero6.jpg';
// @ts-ignore
import img7 from '../assets/images/hero7.jpg';
// @ts-ignore
import img8 from '../assets/images/hero8.jpg';
// @ts-ignore
import img9 from '../assets/images/hero9.jpg';
// @ts-ignore
import press1 from '../assets/images/press1.jpg';
// @ts-ignore
import press2 from '../assets/images/press2.jpg';
// @ts-ignore
import press3 from '../assets/images/press3.jpg';
// @ts-ignore
import press4 from '../assets/images/press4.jpg';
// @ts-ignore
import press5 from '../assets/images/press5.jpg';

const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    press1, press2, press3, press4, press5
];

import { Target, Eye, Heart, Trophy, Users, Award, Calendar } from 'lucide-react';

export const About = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const stats = [
        { icon: <Trophy className="w-8 h-8 text-yellow-500" />, count: "50+", label: "Tournaments Won" },
        { icon: <Users className="w-8 h-8 text-blue-500" />, count: "2000+", label: "Players Trained" },
        { icon: <Award className="w-8 h-8 text-green-500" />, count: "15+", label: "Awards Received" },
        { icon: <Calendar className="w-8 h-8 text-purple-500" />, count: "10+", label: "Years of Excellence" },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title="About T10 Tennis Ball Cricket Association of Bihar – Vision, Mission & Values"
                description="Learn about our journey from the ground to winning stages in Bihar cricket. Discover our vision, mission, values, and dedication to promoting tennis ball cricket across Bihar."
            />
            {/* Hero Banner */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={img9}
                        alt="Victory Moment"
                        className="w-full h-full object-center object-top"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                    >
                        Forging Champions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 font-light"
                    >
                        Success isn't just about winning; it's about the spirit, the struggle, and the glory.
                    </motion.p>
                </div>
            </div>

            {/* Vision, Mission, Values */}
            <div className="py-20 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-32 z-20">
                    {[
                        { icon: <Eye className="w-10 h-10" />, title: "Our Vision", desc: "To become the premier platform for tennis cricket, discovering and nurturing raw talent across every corner of the nation." },
                        { icon: <Target className="w-10 h-10" />, title: "Our Mission", desc: "Empowering athletes with world-class facilities, professional training, and opportunities to shine on the biggest stages." },
                        { icon: <Heart className="w-10 h-10" />, title: "Our Values", desc: "Integrity, Passion, and Inclusivity using sports as a medium to build character and community unity." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-brand-blue"
                        >
                            <div className="bg-brand-blue/10 w-20 h-20 rounded-full flex items-center justify-center text-brand-blue mb-6 mx-auto">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{item.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Storytelling Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img src={img1} alt="Our Journey" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-yellow rounded-full z-[-1]" />
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue rounded-full z-[-1]" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2"
                        >
                            <h4 className="text-brand-blue font-bold tracking-wider uppercase mb-2">Our Journey</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">From Humble Beginnings to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-red">National Glory</span></h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our story began with a simple dream: to give every street cricketer a chance to hold a real leather ball and play in a stadium. Starting with small local tournaments in Bihar, we faced challenges of funding, infrastructure, and recognition.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                But passion fueled our persistence. Year after year, we grew—attracting more teams, better sponsors, and wider audiences. Today, T10 Tennis Cricket is more than an organization; it's a movement that has launched the careers of hundreds of young athletes who now dream of wearing the national jersey. We stood firm on our belief that talent exists everywhere; it just needs an opportunity.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Achievements Section */}
            <div className="py-24 bg-brand-dark text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Milestones</h2>
                        <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-brand-yellow/50 transition-colors group"
                            >
                                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <h3 className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">{stat.count}</h3>
                                <p className="text-gray-300 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const memberImages = [
    { src: '/members/uploaded_media_0_1769412046397.jpg', name: 'Rahul Singh Sarkar', role: 'Chairman - BT10PL & G. Secretary T10TBCAB', position: 'top' },
    { src: '/members/uploaded_media_1_1769412046397.jpg', name: 'Dr. Vikash Kumar', role: 'Vice Chairman - BT10PL & President T10TBCAB', position: 'top' },
    { src: '/members/uploaded_media_2_1769412046397.jpg', name: 'Anisha Kumari', role: 'Treasurer T10TBCAB', position: 'center' },
    { src: '/members/uploaded_media_3_1769412046397.jpg', name: 'Sameer Srivastava', role: 'Mentor', position: 'top' },
    { src: '/members/uploaded_media_4_1769412046397.jpg', name: 'Komal Kumari', role: 'Club Representative', position: 'top' },
    { src: '/members/uploaded_media_0_1769412998928.jpg', name: 'Majhil Singh', role: 'Vice President', position: 'top' },
    { src: '/members/uploaded_media_1_1769412998928.jpg', name: 'Pritesh Kumar', role: 'Executive Member', position: 'top' },
    { src: '/members/uploaded_media_2_1769412998928.jpg', name: 'Pradeep Ranjan', role: 'Media Incharge', position: 'top' },
    { src: '/members/uploaded_media_3_1769412998928.jpg', name: 'Manoj Kr. Sinha', role: 'Mentor', position: 'top' },
    { src: '/members/uploaded_media_4_1769412998928.jpg', name: 'Association Member', role: 'Member', position: 'center' },
];

export const Members = () => (
    <div className="min-h-screen py-20 bg-gray-50">
        <SEO
            title="Association Members – Bihar T10 Tennis Ball Cricket Association"
            description="Meet the directors, coaches, and players of Bihar’s leading tennis ball cricket association. Explore profiles of key members shaping Bihar cricket tournaments and player growth."
        />
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Association Members</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet the dedicated team behind our success. Together, we drive the vision and future of cricket in Bihar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {memberImages.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-[400px] overflow-hidden rounded-2xl shadow-xl bg-white cursor-pointer"
                    >
                        <img
                            src={member.src}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{ objectPosition: member.position }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-yellow-400 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {member.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

export const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <SEO
                title="Bihar Cricket Gallery – Winning Moments & Academy Highlights"
                description="Browse our gallery of Bihar tennis ball cricket tournaments, academy players, and championship victories. Relive the winning spirit and cricket passion through animated image cards."
            />
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-brand-blue mb-8 text-center">Photo Gallery</h1>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Capturing the spirit of cricket, teamwork, media coverage, and victory across Bihar.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`gallery-img-${index}`}
                            onClick={() => openLightbox(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative group overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
                        >
                            <div className="aspect-w-16 aspect-h-12 w-full h-64 overflow-hidden">
                                <img
                                    src={img}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg border-2 border-white px-4 py-2 rounded-full backdrop-blur-sm">View Fullscreen</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
                        >
                            <ChevronLeft className="h-10 w-10" />
                        </button>

                        <motion.img
                            layoutId={`gallery-img-${selectedImage}`}
                            src={galleryImages[selectedImage]}
                            alt="Full Screen View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
                        />

                        <button
                            onClick={nextImage}
                            className="absolute right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden md:block"
                        >
                            <ChevronRight className="h-10 w-10" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission logic
        console.log('Form Submitted:', formData);
        setIsSubmitted(true);
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });

        // Optional: Hide message after some time? User said "display a confirmation message", didn't imply hiding it immediately.
    };

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <SEO
                title="Contact Bihar T10 Tennis Ball Cricket Association – Registrations & Queries"
                description="Get in touch with Bihar’s tennis ball cricket association for tournament registrations, academy details, and player development opportunities. We respond within 24–48 hours."
            />
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-brand-blue mb-8">Contact Us</h1>
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
                    {isSubmitted ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold text-green-800 mb-2">Thank you for your response!</h3>
                            <p className="text-green-700">We will get back to you within 24–48 hours.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-6 text-sm text-green-600 hover:text-green-800 font-medium underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50 p-2 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Phone Number"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50 p-2 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Email Address"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50 p-2 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Subject"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50 p-2 border"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Message"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring focus:ring-brand-blue focus:ring-opacity-50 p-2 border"
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-brand-blue text-white px-6 py-2 rounded-md hover:bg-brand-dark transition flex items-center">
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};
