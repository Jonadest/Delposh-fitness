// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';

export default function Navbar2() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        'Home',
        'About',
        'Classes',
        'Trainers',
        'Membership',
        'Contact',
    ];

    return (
        <nav
            className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
                scrolled
                    ? 'bg-black/95 shadow-lg shadow-gold-900/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a href="#" className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-bold tracking-tighter">
                            <span className="text-gold-500">DELPOSH</span>
                            <span className="text-white"> FITNESS</span>
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-gray-300 hover:text-gold-400 transition-colors tracking-wider text-sm font-medium"
                            >
                                {link.toUpperCase()}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-gold-500 text-black px-5 py-2 rounded font-bold tracking-wider hover:bg-gold-400 transition-all text-sm"
                        >
                            FREE TRIAL
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    mobileOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16M4 18h16'
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="md:hidden pb-6 space-y-3 bg-black/95 rounded-b-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setMobileOpen(false)}
                                className="block text-gray-300 hover:text-gold-400 py-2 tracking-wider px-4"
                            >
                                {link.toUpperCase()}
                            </a>
                        ))}
                        <div className="px-4">
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="block w-full text-center bg-gold-500 text-black py-3 rounded font-bold tracking-wider"
                            >
                                FREE TRIAL
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
