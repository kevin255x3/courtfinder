// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    return (
        <nav className="w-full py-8 px-4 fixed   transition-colors">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="h-5">
                    <img
                        src="/images/SVG/logo4.svg"
                        alt="Courtfinderworkmark"
                        className="h-full w-auto object-contain dark:invert"
                    />
                </Link>
                <div className="flex items-center gap-6">
                    <div className="flex gap-6 text-sm font-inter">
                        <Link
                            to="/home"
                            className="opacity-50 hover:opacity-100 transition-opacity text-black dark:text-white"
                        >
                            Courts
                        </Link>
                        <Link
                            to="/details"
                            className="opacity-50 hover:opacity-100 transition-opacity text-black dark:text-white"
                        >
                            About
                        </Link>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;