// components/Classes.jsx
'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const classData = [
    {
        title: 'Strength Training',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
        time: 'Mon - Fri | 6AM - 8PM',
        description:
            'Build lean muscle and increase strength with our progressive resistance programs.',
    },
    {
        title: 'HIIT Cardio',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
        time: 'Daily | Multiple Slots',
        description:
            'High-intensity interval training to torch calories and boost metabolism.',
    },
    {
        title: 'Yoga & Flexibility',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
        time: 'Mon - Sat | 7AM & 6PM',
        description:
            'Improve flexibility, balance, and mental clarity with guided sessions.',
    },
    {
        title: 'Boxing & MMA',
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
        time: 'Tue, Thu, Sat | Various',
        description:
            'Learn combat skills while getting in the best shape of your life.',
    },
];

export default function Classes() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="classes" className="py-20 md:py-32 bg-zinc-950">
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
                        OUR PROGRAMS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        CLASSES FOR{' '}
                        <span className="text-gold-500">EVERY GOAL</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {classData.map((cls) => (
                        <div
                            key={cls.title}
                            className="group bg-black rounded-lg overflow-hidden border border-zinc-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={cls.image}
                                    alt={cls.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gold-400">
                                    {cls.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-3">
                                    {cls.time}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {cls.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
