import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

// Track if popup has been shown in the current page session (resets on refresh)
let hasShownPopup = false;

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Only show if not shown yet in this module's lifecycle (page refresh resets this)
        if (!hasShownPopup) {
            setIsOpen(true);
            hasShownPopup = true;
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in">
            <div className="relative w-full max-w-lg md:max-w-2xl bg-transparent rounded-xl shadow-2xl overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-300 flex flex-col">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-2 bg-white/80 text-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-200 shadow-lg backdrop-blur-sm"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center">
                    <img
                        src="/events/event4.jpg"
                        alt="Welcome Event"
                        className="w-full h-auto object-contain max-h-[70vh]"
                    />

                    {/* Register Button */}
                    <div className="p-6 w-full flex justify-center bg-transparent backdrop-blur-md border-t border-white/20">
                        <a
                            href="https://forms.gle/Qjeto8PoEMhWUJea8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-3 bg-brand-red text-white text-lg font-bold rounded-lg hover:bg-red-600 transition-all shadow-md hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Register Now <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Click outside to close area */}
            <div className="absolute inset-0 -z-10" onClick={handleClose}></div>
        </div>
    );
};

export default WelcomePopup;
