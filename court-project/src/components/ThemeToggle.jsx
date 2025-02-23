// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            ) : (
                <Moon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            )}
        </button>
    );
};

export default ThemeToggle;