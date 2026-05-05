// components/Membership.jsx
'use client';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const plans = [
    {
        name: 'BASIC',
        price: '29',
        period: '/month',
        features: [
            'Access to gym floor',
            'Locker room access',
            '5 group classes/month',
            'Fitness assessment',
        ],
        popular: false,
    },
    {
        name: 'PRO',
        price: '59',
        period: '/month',
        features: [
            'Unlimited gym access',
            'All group classes',
            '2 PT sessions/month',
            'Nutrition guidance',
            'Access to sauna & steam',
            'Priority booking',
        ],
        popular: true,
    },
    {
        name: 'ELITE',
        price: '99',
        period: '/month',
        features: [
            'All PRO features',
            'Unlimited PT sessions',
            'Custom meal plans',
            'Recovery zone access',
            'Guest passes (4/month)',
            'Exclusive events',
            '24/7 access',
        ],
        popular: false,
    },
];

export default function Membership() {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="membership" className="py-20 md:py-32 bg-zinc-950">
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
                        JOIN THE FAMILY
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                        MEMBERSHIP <span className="text-gold-500">PLANS</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative bg-black border rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 ${
                                plan.popular
                                    ? 'border-gold-500 shadow-lg shadow-gold-500/20 scale-105 md:scale-110 border-glow-gold'
                                    : 'border-zinc-800 hover:border-gold-500/50'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black px-6 py-1 rounded-full text-sm font-bold tracking-wider">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="text-center mb-8 mt-4">
                                <h3 className="text-xl font-bold text-gold-400 mb-4">
                                    {plan.name}
                                </h3>
                                <p className="text-5xl font-bold">
                                    <span className="text-white">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-500 text-lg">
                                        {plan.period}
                                    </span>
                                </p>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-gray-300"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gold-400 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`block w-full text-center py-3 rounded font-bold tracking-wider transition-all ${
                                    plan.popular
                                        ? 'bg-gold-500 text-black hover:bg-gold-400'
                                        : 'border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black'
                                }`}
                            >
                                GET STARTED
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
