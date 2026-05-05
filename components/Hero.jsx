// components/Hero.jsx
'use client';
import { useEffect, useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Hero() {
    const [ref, isVisible] = useScrollAnimation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 md:bg-gradient-to-r md:from-black md:via-black/80 md:to-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Delposh Fitness Hero"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
            </div>

            <div
                ref={ref}
                className={`relative z-20 text-center px-4 max-w-5xl mx-auto py-20 transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <p className="text-gold-400 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm lg:text-base mb-4">
                    ELITE TRAINING FACILITY
                </p>
                <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
                    <span className="text-white">BUILD YOUR</span>
                    <br />
                    <span className="text-gradient-gold">LEGACY</span>
                </h1>
                <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-10 tracking-wide font-light px-2">
                    World-class training, premium equipment, and expert coaches
                    in an environment designed to transform champions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                    <a
                        href="#membership"
                        className="bg-gold-500 text-black px-6 md:px-10 py-3 md:py-4 rounded font-bold tracking-wider hover:bg-gold-400 transition-all text-base md:text-lg w-full sm:w-auto"
                    >
                        START YOUR JOURNEY
                    </a>
                    <a
                        href="#classes"
                        className="border-2 border-white text-white px-6 md:px-10 py-3 md:py-4 rounded font-bold tracking-wider hover:bg-white hover:text-black transition-all text-base md:text-lg w-full sm:w-auto"
                    >
                        EXPLORE CLASSES
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
                <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-gold-400 animate-bounce-slow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </section>
    );
}
