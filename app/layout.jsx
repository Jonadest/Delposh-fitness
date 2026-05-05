import './globals.css';

export const metadata = {
    title: 'Delposh Fitness - Elite Training & Transformation',
    description: 'Transform your body and mind at Delposh Fitness.',
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="delposh">
            <head>
                <meta name="theme-color" content="#0a0a0a" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="font-oswald antialiased">{children}</body>
        </html>
    );
}
