'use client';

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Classes', href: '#classes' },
        { name: 'Trainers', href: '#trainers' },
        { name: 'Membership', href: '#membership' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="navbar fixed top-10 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 min-h-14 md:min-h-16">
            {/* Navbar Start - Logo */}
            <div className="navbar-start">
                <a
                    href="#"
                    className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter no-underline"
                >
                    <span className="text-gold-500">DELPOSH</span>
                    <span className="text-white"> FITNESS</span>
                </a>
            </div>

            {/* Navbar Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-gray-300 hover:text-gold-400 text-xs xl:text-sm tracking-wider font-medium"
                            >
                                {link.name.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End - Desktop CTA + Mobile Dropdown */}
            <div className="navbar-end gap-2">
                {/* Desktop CTA Button */}
                <a
                    href="#contact"
                    className="btn btn-gold btn-sm hidden sm:inline-flex text-xs lg:text-sm tracking-wider"
                >
                    FREE TRIAL
                </a>

                {/* Mobile Dropdown */}
                <div className="dropdown dropdown-end lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-sm text-white hover:text-gold-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu mt-2 w-56 shadow-xl z-50"
                    >
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm tracking-wider py-3"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="sm:hidden">
                            <a
                                href="#contact"
                                className="btn btn-gold btn-sm my-2 mx-2 text-center justify-center"
                            >
                                FREE TRIAL
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
