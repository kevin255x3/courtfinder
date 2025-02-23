// Notes.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Notes = () => {
    return (
        <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-black transition-colors">
            <Navbar />

            <div className="flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <p className="text-sm mb-16 text-black dark:text-white">
                            Court.finder was developed as a portfolio project to demonstrate modern web development practices
                            and provide a practical solution for basketball players in Vancouver.
                        </p>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                TECH STACK
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">
                                <p>React + Vite</p>
                                <p>Tailwind CSS</p>
                                <p>GSAP Animations</p>
                                <p>React Router</p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                PURPOSE
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">
                                <p>Portfolio Development</p>
                                <p>Modern Web Practices</p>
                                <p>Community Resource</p>
                                <p>UI/UX Exploration</p>
                            </div>
                        </div>

                        <p className="text-sm text-black dark:text-white">
                            Developed Winter 2025
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Notes;