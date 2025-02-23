import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import gsap from "gsap";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { courtsData } from "../data/courtsData";

const About = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const court = courtsData.find(court => court.id === id);

    const contentRef = useRef(null);
    const curtainRef = useRef(null);
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" }
        });

        gsap.set(contentRef.current, { opacity: 0 });
        gsap.set(curtainRef.current, { width: "100%" });
        gsap.set([textLeftRef.current, textRightRef.current], { opacity: 1 });

        if (textLeftRef.current) textLeftRef.current.textContent = "COURT";
        if (textRightRef.current) textRightRef.current.textContent = "FINDER";

        tl.to(curtainRef.current, {
            width: "0%",
            duration: 1,
            transformOrigin: "left"
        })
            .to([textLeftRef.current, textRightRef.current], {
                opacity: 0,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.8")
            .to(contentRef.current, {
                opacity: 1,
                duration: 0.5
            }, "-=0.5");
    }, []);

    const handleBack = () => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            onComplete: () => navigate('/home')
        });

        // Update text content
        if (textLeftRef.current) textLeftRef.current.textContent = "BACK TO";
        if (textRightRef.current) textRightRef.current.textContent = "COURTS";

        // Fade out content first
        tl.to(contentRef.current, {
            opacity: 0,
            duration: 0.5
        })
            // Reset curtain width and text opacity
            .set(curtainRef.current, {
                width: "0%",
                left: 0
            })
            .set([textLeftRef.current, textRightRef.current], {
                opacity: 0
            })
            // Animate curtain and text to match Home component timing
            .to(curtainRef.current, {
                width: "100%",
                duration: 1.5
            })
            .to([textLeftRef.current, textRightRef.current], {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
            }, "<"); // Start with curtain animation
    };

    if (!court) return <div>Court not found</div>;

    return (
        <>
            {/* Wipe curtain */}
            <div
                ref={curtainRef}
                className="fixed top-0 right-0 w-full h-full bg-black dark:bg-white z-50 flex items-center justify-center"
            >
                <div className="flex items-center whitespace-nowrap">
                    <span ref={textLeftRef} className="text-white dark:text-black text-xl md:text-4xl mr-2 md:mr-4">COURT</span>
                    <span ref={textRightRef} className="text-white dark:text-black text-xl md:text-4xl">FINDER</span>
                </div>
            </div>

            {/* Main content */}
            <div ref={contentRef} className="min-h-screen flex flex-col font-inter bg-white dark:bg-black">
                <Navbar />

                {/* Desktop layout - unchanged from original */}
                <div className="hidden md:flex flex-1">
                    {/* Fixed centered text container */}
                    <div className="fixed inset-0 flex items-center pointer-events-none">
                        <div className="w-full max-w-7xl mx-auto px-4 flex justify-between items-center">
                            {/* Left side info */}
                            <div className="w-64 pointer-events-auto">
                                <button
                                    onClick={handleBack}
                                    className="text-sm opacity-50 text-black dark:text-white hover:opacity-100 transition-opacity mb-8"
                                >
                                    ← Back
                                </button>

                                <h1 className="text-sm font-medium text-black dark:text-white">{court.title}</h1>
                                <p className="text-sm opacity-50 text-black dark:text-white">{court.location}</p>

                                <div className="mt-8">
                                    <h2 className="text-sm mb-4 text-black dark:text-white">DETAILS</h2>
                                    {Object.entries(court.details).map(([key, value]) => (
                                        <div key={key} className="mb-4">
                                            <p className="text-sm opacity-50 uppercase text-black dark:text-white">{key}</p>
                                            <p className="text-sm text-black dark:text-white">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right side info */}
                            <div className="w-64 flex flex-col items-end pointer-events-auto">
                                <div className="text-right mb-4">
                                    <p className="text-sm opacity-50 text-black dark:text-white">STREAM</p>
                                    <a
                                        href={court.maps.apple}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm block text-black dark:text-white"
                                    >
                                        Apple Maps
                                    </a>
                                    <a
                                        href={court.maps.google}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm block text-black dark:text-white"
                                    >
                                        Google Maps
                                    </a>
                                </div>

                                <div className="text-right">
                                    <h2 className="text-sm opacity-50 text-black dark:text-white">FEATURES</h2>
                                    {court.features.map((feature, index) => (
                                        <p key={index} className="text-sm text-black dark:text-white">{feature}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scrollable images - desktop */}
                    <div className="w-full max-w-7xl mx-auto px-4 flex justify-center">
                        <div className="max-w-2xl px-12 pt-16">
                            <div className="space-y-6">
                                {court.images.map((image) => (
                                    <div key={image.id} className="max-h-[600px] overflow-hidden">
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex-1">
                    <div className="w-full max-w-7xl mx-auto px-4">
                        {/* Images first on mobile */}
                        <div className="w-full">
                            <div className="space-y-4">
                                {court.images.map((image) => (
                                    <div key={image.id} className="max-h-[50vh] overflow-hidden">
                                        <img
                                            src={image.url}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info panels below images */}
                        <div className="mt-8">
                            {/* Back button */}
                            <button
                                onClick={handleBack}
                                className="text-sm opacity-50 text-black dark:text-white hover:opacity-100 transition-opacity mb-8"
                            >
                                ← Back
                            </button>

                            <h1 className="text-sm font-medium text-black dark:text-white">{court.title}</h1>
                            <p className="text-sm opacity-50 text-black dark:text-white">{court.location}</p>

                            <div className="mt-8">
                                <h2 className="text-sm mb-4 text-black dark:text-white">DETAILS</h2>
                                {Object.entries(court.details).map(([key, value]) => (
                                    <div key={key} className="mb-4">
                                        <p className="text-sm opacity-50 uppercase text-black dark:text-white">{key}</p>
                                        <p className="text-sm text-black dark:text-white">{value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8">
                                <p className="text-sm opacity-50 text-black dark:text-white">STREAM</p>
                                <a
                                    href={court.maps.apple}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm block text-black dark:text-white"
                                >
                                    Apple Maps
                                </a>
                                <a
                                    href={court.maps.google}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm block text-black dark:text-white"
                                >
                                    Google Maps
                                </a>
                            </div>

                            <div className="mt-8 mb-8">
                                <h2 className="text-sm opacity-50 text-black dark:text-white">FEATURES</h2>
                                {court.features.map((feature, index) => (
                                    <p key={index} className="text-sm text-black dark:text-white">{feature}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default About;