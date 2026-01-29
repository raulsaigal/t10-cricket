
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// @ts-ignore
import logo from '../assets/images/logo 4.png';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={logo} alt="T10 Bihar Logo" className="h-12 w-12 object-contain" />
                            <span className="font-bold text-xl">T10 BIHAR</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Promoting tennis ball cricket across Bihar. Developing talent, organizing tournaments, and building a community of sportsmanship.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-brand-red mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/" className="hover:text-brand-red transition">Home</a></li>
                            <li><a href="/about" className="hover:text-brand-red transition">About Us</a></li>
                            <li><a href="/members" className="hover:text-brand-red transition">Members</a></li>
                            <li><a href="/gallery" className="hover:text-brand-red transition">Gallery</a></li>
                            <li><a href="/contact" className="hover:text-brand-red transition">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-brand-red mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-brand-red" />
                                <span>3rd Floor Parmar Complex, South Ramna Road, Ara, Bihar</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-brand-red" />
                                <span>+91 8757305645,</span>
                                <span>9123480329</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-brand-red" />
                                <span>t10tbcabihar@gmail.com</span>
                            </div>

                            <div className="flex space-x-4 mt-6">
                                <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="h-6 w-6" /></a>
                                <a href="https://www.instagram.com/t10tbcab/" className="text-gray-400 hover:text-white transition"><Instagram className="h-6 w-6" /></a>
                                {/* <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="h-6 w-6" /></a> */}
                                <a href="https://www.youtube.com/@T10_SPORTS" className="text-gray-400 hover:text-white transition"><Youtube className="h-6 w-6" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} T10 Tennis Ball Cricket Association of Bihar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
