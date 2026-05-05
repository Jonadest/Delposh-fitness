// components/Trainers.jsx
'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const trainers = [
    {
        name: 'Marcus Johnson',
        role: 'Head Coach & Founder',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
        bio: '15+ years of elite training experience. Former competitive bodybuilder.',
    },
    {
        name: 'Sarah Chen',
        role: 'Yoga & Flexibility Expert',
        image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
        bio: 'Certified RYT-500 instructor specializing in mobility and recovery.',
    },
    {
        name: 'David Rodriguez',
        role: 'Strength & Conditioning',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80',
        bio: 'CSCS certified. Specializes in powerlifting and athletic performance.',
    },
    {
        name: 'Priya Kapoor',
        role: 'HIIT & Cardio Specialist',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
        bio: 'NASM certified. High-energy trainer with a passion for transformation.',
    },
];

export default function Trainers() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="trainers" className="py-20 md:py-32 bg-black">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="text-center mb-16">
                    <p className="text-gold-400 tracking-[0.3em] text-sm mb-4">
                        MEET THE TEAM
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        EXPERT <span className="text-gold-500">COACHES</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer) => (
                        <div key={trainer.name} className="text-center group">
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold-500/30 group-hover:border-gold-500 transition-all duration-500">
                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gold-400">
                                {trainer.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                                {trainer.role}
                            </p>
                            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                {trainer.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
