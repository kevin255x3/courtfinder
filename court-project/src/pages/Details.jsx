// Details.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Details = () => {
    return (
        <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-black transition-colors">
            <Navbar />

            <div className="flex-1 flex items-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="max-w-xl mx-auto">
                        <p className="text-sm mb-16 text-black dark:text-white">
                            Court.finder is a Vancouver-based court discovery platform designed to help basketball players locate and explore local courts.
                        </p>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                CONTACT
                            </p>
                            <a
                                href="mailto:info@courtfinder.com"
                                className="text-sm text-black dark:text-white hover:opacity-50"
                            >
                                info@courtfinder.com
                            </a>
                        </div>

                        <div className="mb-12">
                            <p className="text-sm uppercase opacity-50 mb-2 text-black dark:text-white">
                                SOCIALS
                            </p>
                            <div className="text-sm space-y-1 text-black dark:text-white">
                                <p>Instagram</p>
                                <p>Twitter</p>
                                <p>GitHub</p>
                                <p>LinkedIn</p>
                            </div>
                        </div>

                        <p className="text-sm text-black dark:text-white">
                            Website by Kevin Lazo
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Details;