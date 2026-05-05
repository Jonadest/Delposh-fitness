export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-zinc-800 py-12">
            <div className="max-w-7xl mx-auto px-4">
                {/* Grid - Mobile: Logo top, Quick Links + Hours side by side, Follow Us below */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description - Full width on mobile, 1 column on desktop */}
                    <div className="sm:col-span-2 md:col-span-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-gold-500">DELPOSH</span>
                            <span className="text-white"> FITNESS</span>
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Premium fitness facility dedicated to transforming
                            lives through expert coaching and world-class
                            equipment.
                        </p>
                    </div>

                    {/* Quick Links & Hours side by side on mobile */}
                    <div className="flex justify-center gap-8 sm:col-span-2 md:col-span-2">
                        {/* Quick Links */}
                        <div className="text-center md:text-left">
                            <h4 className="text-gold-400 font-semibold mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    'Home',
                                    'About',
                                    'Classes',
                                    'Trainers',
                                    'Membership',
                                    'Contact',
                                ].map((link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            className="text-gray-400 hover:text-gold-400 text-sm transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hours */}
                        <div className="text-center md:text-left">
                            <h4 className="text-gold-400 font-semibold mb-4">
                                Hours
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>Mon - Fri: 5AM - 10PM</li>
                                <li>Saturday: 7AM - 8PM</li>
                                <li>Sunday: 7AM - 8PM</li>
                            </ul>
                        </div>
                    </div>

                    {/* Follow Us - Below on mobile, last column on desktop */}
                    <div className="sm:col-span-2 md:col-span-1 text-center md:text-left sm:pt-0 pt-2">
                        <h4 className="text-gold-400 font-semibold mb-4">
                            Follow Us
                        </h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            {[
                                'Facebook',
                                'Instagram',
                                'Twitter',
                                'YouTube',
                            ].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-gray-400 hover:border-gold-500 hover:text-gold-400 transition-all text-sm"
                                    aria-label={social}
                                >
                                    {social[0]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-zinc-800 pt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        © {currentYear} Delposh Fitness. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
