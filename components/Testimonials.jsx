// components/Testimonials.jsx
'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const testimonials = [
    {
        name: 'James Wilson',
        role: 'Member since 2023',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
        quote: 'Delposh completely changed my approach to fitness. The trainers genuinely care about your progress. I lost 35 pounds in 6 months!',
    },
    {
        name: 'Emily Rodriguez',
        role: 'PRO Member',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
        quote: 'The facility is stunning, and the community here is incredible. I actually look forward to my workouts now!',
    },
    {
        name: 'Marcus Thompson',
        role: 'ELITE Member',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
        quote: 'As a competitive athlete, Delposh has everything I need. The recovery zone and expert coaching give me a real edge.',
    },
];

export default function Testimonials() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section className="py-20 md:py-32 bg-black">
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
                        TESTIMONIALS
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        WHAT OUR{' '}
                        <span className="text-gold-500">MEMBERS SAY</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-zinc-950 border border-zinc-800 rounded-lg p-8 hover:border-gold-500/30 transition-all"
                        >
                            <svg
                                className="w-10 h-10 text-gold-500/30 mb-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-300 leading-relaxed mb-6 italic">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                                />
                                <div>
                                    <p className="font-bold text-gold-400">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
