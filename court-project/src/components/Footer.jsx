// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full py-8 px-4 fixed bottom-0   transition-colors">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="h-6">
                        <img
                            src="/images/SVG/logo1.svg"
                            alt="Crosshair"
                            className="h-full w-auto object-contain dark:invert"
                        />
                    </div>
                </div>
                <div className="flex gap-6 text-xs font-inter">
                    <Link
                        to="/notes"
                        className="opacity-50 hover:opacity-100 transition-opacity text-black dark:text-white"
                    >
                        Notes
                    </Link>
                    <Link
                        to="/legal"
                        className="opacity-50 hover:opacity-100 transition-opacity text-black dark:text-white"
                    >
                        Legal
                    </Link>

                </div>
            </div>
        </footer>
    );
};

export default Footer;