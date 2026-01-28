import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { ChevronDown, MapPin, Phone, User } from 'lucide-react';

// Mock Data for Districts
const districts = [
    {
        name: 'Patna',
        secretary: 'Rajesh Kumar',
        contact: '+91 98765 43210',
        members: [
            { name: 'Amit Singh', role: 'President' },
            { name: 'Rajesh Kumar', role: 'Secretary' },
            { name: 'Suresh Yadav', role: 'Treasurer' },
            { name: 'Vikram Singh', role: 'Coach' },
        ]
    },
    {
        name: 'Gaya',
        secretary: 'Manoj Tiwari',
        contact: '+91 87654 32109',
        members: [
            { name: 'Prakash Jha', role: 'President' },
            { name: 'Manoj Tiwari', role: 'Secretary' },
            { name: 'Ravi Kishan', role: 'Treasurer' },
        ]
    },
    {
        name: 'Muzaffarpur',
        secretary: 'Sanjay Gupta',
        contact: '+91 76543 21098',
        members: [
            { name: 'Dinesh Lal', role: 'President' },
            { name: 'Sanjay Gupta', role: 'Secretary' },
            { name: 'Pawan Singh', role: 'Joint Secretary' },
        ]
    },
    {
        name: 'Bhagalpur',
        secretary: 'Vijay Roy',
        contact: '+91 65432 10987',
        members: [
            { name: 'Khesari Lal', role: 'President' },
            { name: 'Vijay Roy', role: 'Secretary' },
        ]
    },
    {
        name: 'Darbhanga',
        secretary: 'Alok Nath',
        contact: '+91 54321 09876',
        members: [
            { name: 'Manoj Bajpayee', role: 'President' },
            { name: 'Alok Nath', role: 'Secretary' },
            { name: 'Pankaj Tripathi', role: 'Mentor' },
        ]
    },
];

const DistrictAssociation = () => {
    const [openDistrict, setOpenDistrict] = useState<string | null>(null);

    const toggleDistrict = (name: string) => {
        setOpenDistrict(openDistrict === name ? null : name);
    };

    return (
        <div className="min-h-screen py-20 bg-gray-50">
            <SEO
                title="District Associations – T10 Tennis Cricket Bihar"
                description="Find details of T10 Tennis Cricket associations across various districts of Bihar. Contact district secretaries and view committee members."
            />

            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">Our District Associations</h1>
                    <p className="text-lg text-gray-600">
                        Connecting cricket enthusiasts from every corner of Bihar. Find your local association below.
                    </p>
                    <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full mt-6" />
                </motion.div>

                <div className="space-y-4">
                    {districts.map((district, index) => (
                        <motion.div
                            key={district.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                        >
                            <button
                                onClick={() => toggleDistrict(district.name)}
                                className={`w-full flex items-center justify-between p-6 transition-colors duration-300 ${openDistrict === district.name ? 'bg-brand-blue text-white' : 'bg-white text-gray-800 hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex items-center space-x-4">
                                    <div className={`p-3 rounded-full ${openDistrict === district.name ? 'bg-white/20' : 'bg-brand-blue/10 text-brand-blue'}`}>
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-xl font-bold">{district.name} District Association</h3>
                                        <p className={`text-sm ${openDistrict === district.name ? 'text-blue-100' : 'text-gray-500'}`}>
                                            Secretary: {district.secretary}
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openDistrict === district.name ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openDistrict === district.name && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 bg-gray-50 border-t border-gray-100">
                                            <div className="mb-6 flex items-center space-x-2 text-brand-blue font-semibold">
                                                <Phone className="w-5 h-5" />
                                                <span>Contact: {district.contact}</span>
                                            </div>

                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Committee Members</h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {district.members.map((member, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                                        <div className="bg-brand-yellow/20 p-2 rounded-full text-brand-dark">
                                                            <User className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-800">{member.name}</p>
                                                            <p className="text-xs text-gray-500 font-medium">{member.role}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DistrictAssociation;
