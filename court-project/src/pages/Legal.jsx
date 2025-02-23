// Legal.jsx
import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Legal = () => {
    return (
        <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-black transition-colors">
            <Navbar />

            <div className="flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <p className="text-sm mb-16 text-black dark:text-white">
                            Court.finder is an educational project. All court information is provided for reference only.
                        </p>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                IMAGE RIGHTS
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">
                                <p>Images sourced under fair use education</p>
                                <p>Court images belong to their respective owners</p>
                                <p>Public location documentation only</p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                DISCLAIMER
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">
                                <p>Court availability not guaranteed</p>
                                <p>Hours may vary by location</p>
                                <p>Use courts at own risk</p>
                                <p>Check local regulations</p>
                            </div>
                        </div>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                ATTRIBUTIONS
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">

                                <p>Images from public domain</p>
                                <p>Built with React & Tailwind CSS</p>
                                <p>Enhanced with GSAP animations</p>
                            </div>
                        </div>

                        <p className="text-sm text-black dark:text-white">
                            Last updated February 2025
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Legal;