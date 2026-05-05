// components/Contact.jsx
'use client';
import { useState } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

export default function Contact() {
    const [ref, isVisible] = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-zinc-950">
            <div
                ref={ref}
                className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
                    isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                }`}
            >
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left - Info */}
                    <div>
                        <p className="text-gold-400 tracking-[0.3em] text-sm mb-4">
                            GET IN TOUCH
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                            START YOUR{' '}
                            <span className="text-gold-500">
                                TRANSFORMATION
                            </span>
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            Ready to change your life? Fill out the form and our
                            team will get back to you within 24 hours. Let's
                            discuss your fitness goals and find the perfect plan
                            for you.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    emoji: '📍',
                                    label: 'Address',
                                    value: '123 Fitness Avenue, Muscle City, FC 10001',
                                },
                                {
                                    emoji: '📞',
                                    label: 'Phone',
                                    value: '(555) 123-4567',
                                },
                                {
                                    emoji: '✉️',
                                    label: 'Email',
                                    value: 'info@delposhfitness.com',
                                },
                                {
                                    emoji: '🕐',
                                    label: 'Hours',
                                    value: 'Mon-Fri: 5AM-10PM | Sat-Sun: 7AM-8PM',
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex gap-3 items-start"
                                >
                                    <span className="text-xl">
                                        {item.emoji}
                                    </span>
                                    <div>
                                        <span className="text-gold-400 font-semibold">
                                            {item.label}:
                                        </span>
                                        <span className="text-gray-400 ml-2">
                                            {item.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-black border border-zinc-800 rounded-lg p-8 hover:border-gold-500/30 transition-all"
                        >
                            <h3 className="text-2xl font-bold mb-6">
                                Claim Your{' '}
                                <span className="text-gold-400">
                                    Free Trial
                                </span>
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors"
                                        placeholder="(123) 456-7890"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-white focus:border-gold-500 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your fitness goals..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full mt-6 bg-gold-500 text-black py-3 rounded font-bold tracking-wider hover:bg-gold-400 transition-all disabled:opacity-50"
                            >
                                {status === 'sending'
                                    ? 'SENDING...'
                                    : 'GET FREE TRIAL'}
                            </button>

                            {status === 'success' && (
                                <p className="mt-4 text-green-400 text-center">
                                    ✓ Message sent successfully! We'll contact
                                    you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="mt-4 text-red-400 text-center">
                                    ✗ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
