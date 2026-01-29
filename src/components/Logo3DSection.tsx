// import React from 'react';
// @ts-ignore
import logo from '../assets/images/logo 4.png';

const Logo3DSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="max-w-12xl mx-auto px-4 flex justify-center items-center">
                <div className="relative group perspective-container">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform scale-110 group-hover:scale-125 transition-transform duration-500 opacity-60"></div>

                    {/* Animated Logo */}
                    <img
                        src={logo}
                        alt="T10 Cricket Logo"
                        className="relative w-100 h-100 md:w-90 md:h-90 object-contain animate-3d-spin cursor-pointer transition-all duration-300"
                    />
                </div>
            </div>

            <style>{`
                .perspective-container {
                    perspective: 1000px;
                }
                
                .animate-3d-spin {
                    animation: spin3d 10s linear infinite;
                    transform-style: preserve-3d;
                }
                
                /* Pause and enhance on hover */
                .group:hover .animate-3d-spin {
                    animation-play-state: paused;
                    filter: drop-shadow(0 0 25px rgba(37, 99, 235, 0.6));
                    transform: scale(1.1) rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
                    /* Optional: reset rotation on hover or just pause. 
                       Resetting might be jerky. Let's just pause and bloom. */
                }

                /* If we want it to just pause at current angle: */
                .group:hover .animate-3d-spin {
                   transform: scale(1.05);
                }

                @keyframes spin3d {
                    0% {
                        transform: rotateY(0deg) rotateX(10deg) rotateZ(5deg);
                    }
                    25% {
                        transform: rotateY(90deg) rotateX(-10deg) rotateZ(-5deg);
                    }
                    50% {
                        transform: rotateY(180deg) rotateX(10deg) rotateZ(5deg);
                    }
                    75% {
                        transform: rotateY(270deg) rotateX(-10deg) rotateZ(-5deg);
                    }
                    100% {
                        transform: rotateY(360deg) rotateX(10deg) rotateZ(5deg);
                    }
                }
            `}</style>
        </section>
    );
};

export default Logo3DSection;
