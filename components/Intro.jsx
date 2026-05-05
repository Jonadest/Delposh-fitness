'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Intro({ onFinish }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [imgError, setImgError] = useState(false);

    useEffect(() => {
        // Start entrance animation
        const timer1 = setTimeout(() => {
            setIsAnimating(true);
        }, 300);

        // Start exit animation
        const timer2 = setTimeout(() => {
            setIsVisible(false);
        }, 2500);

        // Call onFinish after exit animation completes
        const timer3 = setTimeout(() => {
            if (onFinish) {
                console.log('Intro finished, showing main page');
                onFinish();
            }
        }, 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            style={{
                width: '100vw',
                height: '100dvh',
                position: 'fixed',
                top: 0,
                left: 0,
            }}
        >
            {/* Gold glow background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.15)_0%,transparent_70%)]" />
            </div>

            <div className="text-center relative z-10 px-4 w-full">
                {/* Logo */}
                <div
                    className={`mb-6 sm:mb-8 transition-all duration-1000 transform ${
                        isAnimating
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-50 translate-y-10'
                    }`}
                >
                    <div className="relative inline-block">
                        {/* Logo glow */}
                        <div className="absolute inset-0 bg-gold-500/20 rounded-full blur-2xl scale-150 animate-pulse" />

                        {/* Logo - try both ways to load */}
                        {!imgError ? (
                            <img
                                src="/logo.png"
                                alt="Delposh Fitness Logo"
                                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain relative z-10 mx-auto"
                                onError={() => {
                                    console.log('Logo failed to load');
                                    setImgError(true);
                                }}
                                onLoad={() => {
                                    console.log('Logo loaded successfully');
                                }}
                            />
                        ) : (
                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 relative z-10 mx-auto flex items-center justify-center">
                                <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-gold-500">
                                    D
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Company Name */}
                <div
                    className={`transition-all duration-1000 delay-300 transform ${
                        isAnimating
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                    }`}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-3">
                        <span className="text-gold-500">DELPOSH</span>
                        <span className="text-white"> FITNESS</span>
                    </h1>
                </div>

                {/* Tagline */}
                <div
                    className={`transition-all duration-1000 delay-500 transform ${
                        isAnimating
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-4'
                    }`}
                >
                    <p className="text-gold-400/80 tracking-[0.2em] sm:tracking-[0.3em] text-sm sm:text-base md:text-lg font-light px-4">
                        WHERE CHAMPIONS ARE MADE
                    </p>
                </div>

                {/* Loading bar */}
                <div
                    className={`mt-8 sm:mt-10 transition-all duration-700 delay-700 ${
                        isAnimating ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="w-48 sm:w-56 md:w-64 h-0.5 bg-zinc-800 rounded-full overflow-hidden mx-auto">
                        <div className="h-full bg-gradient-to-r from-gold-700 via-gold-500 to-gold-400 rounded-full animate-[loading_2.5s_ease-in-out_forwards]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
