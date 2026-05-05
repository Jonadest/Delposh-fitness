import { Oswald } from 'next/font/google';
import './globals.css';

// Oswald font from next/font/google
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-oswald',
    display: 'swap',
});

// Domain
const baseUrl = 'https://delposh-fitness.vercel.app';

// OG Image (ImageKit CDN)
const ogImage = 'https://ik.imagekit.io/jonadest/delposh.jpg';

export const metadata = {
    title: 'Delposh Beauty & Fitness | Premium Fitness & Beauty Center',
    description:
        'Transform your body and mind at Delposh Beauty & Fitness. World-class training, premium beauty services, and expert coaches in Lagos, Nigeria. Join today!',

    metadataBase: new URL(baseUrl),

    openGraph: {
        title: 'Delposh Beauty & Fitness | Premium Fitness & Beauty Center',
        description:
            'World-class training, premium beauty services, and expert coaches in Lagos, Nigeria. Start your transformation today!',
        url: baseUrl,
        siteName: 'Delposh Beauty & Fitness',
        images: [
            {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: 'Delposh Beauty & Fitness - Where Champions Are Made',
                type: 'image/png',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Delposh Beauty & Fitness | Premium Fitness & Beauty Center',
        description:
            'World-class training, premium beauty services, and expert coaches in Lagos, Nigeria.',
        images: [ogImage],
        creator: '@delposhfitness',
    },

    alternates: {
        canonical: baseUrl,
    },

    robots: {
        index: true,
        follow: true,
    },

    keywords: [
        'gym',
        'fitness',
        'beauty',
        'delposh',
        'lagos',
        'nigeria',
        'personal training',
        'beauty salon',
        'fitness center',
        'lekki gym',
        'premium gym lagos',
    ],
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#0a0a0a',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="delposh" className={oswald.variable}>
            <head>
                {/* Theme */}
                <meta name="theme-color" content="#0a0a0a" />

                {/* PWA */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Delposh Fitness"
                />

                {/* Favicons */}
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* Manifest */}
                <link rel="manifest" href="/manifest.json" />

                {/* Additional Social Meta Tags for WhatsApp/Facebook */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Delposh Beauty & Fitness"
                />
                <meta property="og:image:type" content="image/png" />
                <meta
                    name="twitter:image:alt"
                    content="Delposh Beauty & Fitness"
                />
            </head>

            <body className="font-oswald antialiased">{children}</body>
        </html>
    );
}
