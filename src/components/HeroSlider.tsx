
import { motion } from 'framer-motion';

// @ts-ignore
import hero1 from '../assets/images/hero1.jpg';
// @ts-ignore
import hero2 from '../assets/images/hero2.jpg';
// @ts-ignore
import hero3 from '../assets/images/hero3.jpg';
// @ts-ignore
import hero4 from '../assets/images/hero4.jpg';
// @ts-ignore
import hero5 from '../assets/images/hero5.jpg';
// @ts-ignore
import hero6 from '../assets/images/hero6.jpg';
// @ts-ignore
import hero7 from '../assets/images/hero7.jpg';
// @ts-ignore
// import hero8 from '../assets/images/hero8.jpg';
// @ts-ignore
import hero9 from '../assets/images/hero9.jpg';

const HeroSlider = () => {
    // Placeholder images - using gradients and text for now until assets are provided
    const slides = [
        {
            id: 1,
            title: "Academy Highlights",
            subtitle: "Training the next generation of stars",
            color: "bg-gradient-to-r from-green-800 to-green-600",
            image: hero1
        },
        {
            id: 2,
            title: "Tournament Wins",
            subtitle: "Celebrating our champions",
            color: "bg-gradient-to-r from-yellow-600 to-yellow-400",
            image: hero2
        },
        {
            id: 3,
            title: "Team Players",
            subtitle: "Meet our dedicated athletes",
            color: "bg-gradient-to-r from-blue-800 to-blue-600",
            image: hero3
        },
        {
            id: 4,
            title: "Leadership",
            subtitle: "Guided by experienced directors",
            color: "bg-gradient-to-r from-gray-800 to-gray-600",
            image: hero4
        },
        {
            id: 5,
            title: "Community",
            subtitle: "Building a strong cricket family",
            color: "bg-gradient-to-r from-red-800 to-red-600",
            image: hero5
        },
        {
            id: 6,
            title: "Rising Stars",
            subtitle: "Future of Cricket",
            color: "bg-gradient-to-r from-purple-800 to-purple-600",
            image: hero6
        },
        {
            id: 7,
            title: "Victory Moments",
            subtitle: "Cherishing the wins",
            color: "bg-gradient-to-r from-indigo-800 to-indigo-600",
            image: hero7
        },
        // {
        //     id: 8,
        //     title: "Team Spirit",
        //     subtitle: "United we play",
        //     color: "bg-gradient-to-r from-pink-800 to-pink-600",
        //     image: hero8
        // },
        {
            id: 9,
            title: "Game Day",
            subtitle: "Ready for action",
            color: "bg-gradient-to-r from-orange-800 to-orange-600",
            image: hero9
        }
    ];

    return (
        <div className="relative w-full h-[610px] overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-10 bg-black/40" /> {/* Overlay */}

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-400 drop-shadow-2xl filter">
                        T10 Tennis Ball Cricket Association
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-xl md:text-3xl font-medium text-gray-200 tracking-wide drop-shadow-md bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm"
                >
                    Bihar's Premier Cricket Organization
                </motion.p>
            </div>

            {/* Sliding Background */}
            <motion.div
                className="flex h-full"
                animate={{
                    x: [0, -100 * slides.length + "%"], // Translate left
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 700, // Adjust speed
                }}
                style={{ width: `${slides.length * 100}%` }}
            >
                {/* Duplicate slides to create seamless loop effect effectively or just long strip */}
                {[...slides, ...slides, ...slides].map((slide, index) => (
                    <div
                        key={`${slide.id}-${index}`}
                        className="flex-shrink-0 w-screen h-full relative"
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-10 left-10 z-20 text-white bg-black/50 p-4 rounded-lg backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-brand-red">{slide.title}</h3>
                            <p>{slide.subtitle}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HeroSlider;
