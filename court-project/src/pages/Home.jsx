// Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { courtsData } from '../data/courtsData';
import gsap from 'gsap';

const Home = () => {
    const containerRef = useRef(null);
    const curtainLeftRef = useRef(null);
    const curtainRightRef = useRef(null);
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" }
        });

        // Initial state
        gsap.set(containerRef.current, { opacity: 0 });
        gsap.set([textLeftRef.current, textRightRef.current], { opacity: 1 });

        // Animate curtains away and fade in content
        tl.to([curtainLeftRef.current, curtainRightRef.current], {
            width: 0,
            duration: 1.5,
            stagger: 0.1
        })
            .to([textLeftRef.current, textRightRef.current], {
                opacity: 0,
                duration: 0.5
            }, "<") // Start with curtain animation
            .to(containerRef.current, {
                opacity: 1,
                duration: 1
            }, "-=1"); // Overlap with curtain animation

    }, []);

    return (
        <div className="min-h-screen flex flex-col font-inter bg-white dark:bg-black transition-colors">
            {/* Curtain elements with text */}
            <div ref={curtainLeftRef} className="fixed top-0 left-0 w-1/2 h-full bg-black dark:bg-white z-50 flex items-center justify-end transition-colors">
                <span ref={textLeftRef} className="text-white dark:text-black text-4xl mr-4 transition-colors">COURT</span>
            </div>
            <div ref={curtainRightRef} className="fixed top-0 right-0 w-1/2 h-full bg-black dark:bg-white z-50 flex items-center justify-start transition-colors">
                <span ref={textRightRef} className="text-white dark:text-black text-4xl ml-4 transition-colors">FINDER</span>
            </div>

            <Navbar />

            <div
                ref={containerRef}
                className="flex-1 max-w-7xl mx-auto px-4 py-6 mt-16"
            >
                <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                    {courtsData.map((court) => (
                        <Link to={`/court/${court.id}`} key={court.id}>
                            <div>
                                <div className="max-w-2xl max-h-96 overflow-hidden">
                                    <img
                                        src={court.mainImage}
                                        alt={court.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="mt-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <h2 className="font-medium text-black dark:text-white">
                                            {court.title}
                                        </h2>
                                        <span className="opacity-50 text-black dark:text-white">
                                            {court.location}
                                        </span>
                                    </div>
                                    <p className="opacity-50 text-black dark:text-white">
                                        {court.type}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;