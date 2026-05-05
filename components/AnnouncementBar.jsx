// components/AnnouncementBar.jsx
'use client';

export default function AnnouncementBar() {
    return (
        <div className="bg-gradient-to-r from-black via-gold-700 to-black overflow-hidden py-2 fixed top-0 left-0 right-0 z-50">
            <div className="animate-marquee whitespace-nowrap">
                <span className="text-gold-400 font-semibold tracking-widest text-sm md:text-base">
                    🔥 LIMITED TIME OFFER: JOIN NOW & GET 30% OFF FIRST 3 MONTHS
                    • NEW EVENING CLASSES AVAILABLE • FREE PERSONAL TRAINING
                    SESSION WITH ANNUAL MEMBERSHIP • DELPOSH FITNESS - WHERE
                    CHAMPIONS ARE MADE 🔥
                </span>
            </div>
        </div>
    );
}
