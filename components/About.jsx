// components/About.jsx
'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function About() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="py-20 md:py-32 bg-black">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden border border-gold-500/20">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                                alt="Delposh Gym Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-lg hidden md:block border-glow-gold">
                            <p className="text-black text-3xl font-bold">10+</p>
                            <p className="text-black text-sm tracking-wider">
                                Years Experience
                            </p>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <p className="text-gold-400 tracking-[0.3em] text-sm mb-4">
                            ABOUT US
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                            MORE THAN A GYM,
                            <br />
                            <span className="text-gold-500">A LIFESTYLE</span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6 font-light">
                            At Delposh Fitness, we believe fitness is a journey,
                            not a destination. Our state-of-the-art facility
                            spans over 25,000 square feet, equipped with premium
                            Matrix and Life Fitness equipment. Whether you're a
                            beginner or a professional athlete, our certified
                            trainers are committed to helping you achieve your
                            goals.
                        </p>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {[
                                { number: '25K+', label: 'Sq Ft Space' },
                                { number: '50+', label: 'Classes Weekly' },
                                { number: '5K+', label: 'Active Members' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-gold-400 text-2xl md:text-3xl font-bold">
                                        {stat.number}
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#contact"
                            className="inline-block bg-gold-500 text-black px-8 py-3 rounded font-bold tracking-wider hover:bg-gold-400 transition-all"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
