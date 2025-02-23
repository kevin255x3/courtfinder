// Landing.jsx
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

function Landing() {
    const navigate = useNavigate()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const containerRef = useRef(null)
    const curtainLeftRef = useRef(null)
    const curtainRightRef = useRef(null)
    const textLeftRef = useRef(null)
    const textRightRef = useRef(null)

    const images = [
        "/images/SVG/logo1.svg",
        "/images/SVG/logo2.svg",
        "/images/SVG/logo3.svg",
        "/images/SVG/logo4.svg",
        "/images/SVG/logo5.svg"
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleNavigate = () => {
        const tl = gsap.timeline({
            defaults: { ease: "power3.inOut" }
        });

        gsap.set([textLeftRef.current, textRightRef.current], { opacity: 0 });

        tl.to([curtainLeftRef.current, curtainRightRef.current], {
            width: "50%",
            duration: 1,
            stagger: 0.1
        })
            .to([textLeftRef.current, textRightRef.current], {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.8")
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => navigate('/home')
            }, "-=0.5");
    }

    return (
        <>
            <div ref={curtainLeftRef} className="fixed top-0 left-0 w-0 h-full bg-black dark:bg-white z-50 flex items-center justify-end transition-colors">
                <span ref={textLeftRef} className="text-white dark:text-black text-4xl mr-4 opacity-0 transition-colors">COURT</span>
            </div>
            <div ref={curtainRightRef} className="fixed top-0 right-0 w-0 h-full bg-black dark:bg-white z-50 flex items-center justify-start transition-colors">
                <span ref={textRightRef} className="text-white dark:text-black text-4xl ml-4 opacity-0 transition-colors">FINDER</span>
            </div>

            <div
                ref={containerRef}
                onClick={handleNavigate}
                className="h-screen w-screen cursor-pointer bg-white dark:bg-black flex items-center justify-center"
            >
                <div className="relative w-[600px] h-[400px]">
                    {images.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Image ${index + 1}`}
                            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 dark:invert
                                ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Landing