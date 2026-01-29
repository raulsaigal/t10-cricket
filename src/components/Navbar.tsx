import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
// @ts-ignore
import logo from '../assets/images/logo 4.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Association Members', path: '/members' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Media Coverage', path: '/media-coverage' },
        { name: 'District Association', path: '/district-association' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-brand-blue text-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="T10 Cricket Logo" className="h-16 w-16 object-contain" />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none tracking-wider">T10 TENNIS BALL CRICKET</span>
                            <span className="font-bold text-sm leading-tight tracking-wider text-brand-red">ASSOCIATION OF BIHAR</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={clsx(
                                        'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
                                        isActive(link.path)
                                            ? 'bg-brand-dark text-brand-red'
                                            : 'hover:bg-brand-dark hover:text-white'
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-brand-dark focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-blue border-t border-brand-dark">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    'block px-3 py-2 rounded-md text-base font-medium',
                                    isActive(link.path)
                                        ? 'bg-brand-dark text-brand-red'
                                        : 'text-white hover:bg-brand-dark hover:text-white'
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
