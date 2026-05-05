'use client';
import { useState, useEffect, useRef } from 'react';

export default function Location() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 },
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <section id="location" className="py-20 md:py-28 bg-zinc-950">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-gold-400 tracking-[0.3em] text-xs sm:text-sm mb-3">
                        FIND US
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
                        OUR <span className="text-gold-500">LOCATION</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="bg-black border border-zinc-800 rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-5">
                        {/* Map - Takes 3 columns on desktop */}
                        <div className="md:col-span-3 h-[300px] sm:h-[350px] md:h-auto md:min-h-[450px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1022500177937!2d3.3088101771199248!3d6.508739893483587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f377bc6e111%3A0x20926253dad4b48a!2sDelposh%20beauty%20and%20Fitness!5e0!3m2!1sen!2sng!4v1777982248782!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Delposh Beauty and Fitness - Lagos, Nigeria"
                                className="grayscale-[30%] contrast-110"
                            />
                            {/* Map overlay with subtle gradient */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-black/20" />
                        </div>

                        {/* Info - Takes 2 columns on desktop */}
                        <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                            {/* Brand */}
                            <div className="mb-8">
                                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-2">
                                    <span className="text-gold-500">
                                        DELPOSH
                                    </span>
                                    <span className="text-white">
                                        {' '}
                                        BEAUTY & FITNESS
                                    </span>
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Visit our premium beauty and fitness
                                    facility in Lagos, Nigeria.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-4">
                                {/* Address */}
                                <div className="group flex gap-3 p-3 -mx-3 rounded-lg hover:bg-zinc-900/50 transition-all cursor-default">
                                    <span className="text-xl flex-shrink-0">
                                        📍
                                    </span>
                                    <div>
                                        <p className="text-gold-400 text-xs tracking-wider mb-1 font-medium">
                                            ADDRESS
                                        </p>
                                        <p className="text-gray-300 text-sm leading-relaxed capitalize">
                                            Delposh Beauty and Fitness, 68 Ago
                                            Palace Way, buss top, 
                                            Lagos
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <a
                                    href="tel:+2341234567890"
                                    className="group flex gap-3 p-3 -mx-3 rounded-lg hover:bg-zinc-900/50 transition-all"
                                >
                                    <span className="text-xl flex-shrink-0">
                                        📞
                                    </span>
                                    <div>
                                        <p className="text-gold-400 text-xs tracking-wider mb-1 font-medium">
                                            PHONE
                                        </p>
                                        <p className="text-gray-300 text-sm group-hover:text-gold-400 transition-colors">
                                            +234 123 456 7890
                                        </p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:info@delposhfitness.com"
                                    className="group flex gap-3 p-3 -mx-3 rounded-lg hover:bg-zinc-900/50 transition-all"
                                >
                                    <span className="text-xl flex-shrink-0">
                                        ✉️
                                    </span>
                                    <div>
                                        <p className="text-gold-400 text-xs tracking-wider mb-1 font-medium">
                                            EMAIL
                                        </p>
                                        <p className="text-gray-300 text-sm group-hover:text-gold-400 transition-colors">
                                            info@delposhfitness.com
                                        </p>
                                    </div>
                                </a>

                                {/* Hours */}
                                <div className="group flex gap-3 p-3 -mx-3 rounded-lg hover:bg-zinc-900/50 transition-all cursor-default">
                                    <span className="text-xl flex-shrink-0">
                                        🕐
                                    </span>
                                    <div>
                                        <p className="text-gold-400 text-xs tracking-wider mb-1 font-medium">
                                            HOURS
                                        </p>
                                        <div className="text-gray-300 text-sm space-y-0.5">
                                            <p>
                                                Mon - Fri{' '}
                                                <span className="text-gold-500">
                                                    5AM - 10PM
                                                </span>
                                            </p>
                                            <p>
                                                Sat - Sun{' '}
                                                <span className="text-gold-500">
                                                    7AM - 8PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=6.508739893483587,3.3088101771199248"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 bg-gold-500 text-black py-3 px-6 rounded-lg font-bold tracking-wider hover:bg-gold-400 transition-all text-sm text-center inline-flex items-center justify-center gap-2 group"
                            >
                                GET DIRECTIONS
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
