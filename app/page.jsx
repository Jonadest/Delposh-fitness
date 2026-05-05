'use client';
import { useState, useEffect } from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Classes from '@/components/Classes';
import Trainers from '@/components/Trainers';
import Membership from '@/components/Membership';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Location from '@/components/Location';

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    const handleIntroFinish = () => {
        setShowIntro(false);
    };

    return (
        <>
            {showIntro && <Intro onFinish={handleIntroFinish} />}

            {/* ✅ DO NOT use display:none */}
            <div
                className={`${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
            >
                <AnnouncementBar />
                <Navbar />
                <Hero />
                <About />
                <Classes />
                <Trainers />
                <Membership />
                <Testimonials />
                <Location/>
                <Contact />
                <Footer />
            </div>
        </>
    );
}
