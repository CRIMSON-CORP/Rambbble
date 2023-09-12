import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ModalContextProvider from '@/context/modalContext';
import type { Metadata } from 'next';
import { Poppins, Raleway } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    display: 'swap',
    adjustFontFallback: false,
    preload: false,
});

const raleway = Raleway({
    subsets: ['latin'],
    style: 'normal',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-raleway',
    display: 'swap',
    adjustFontFallback: false,
    preload: false,
});

export const metadata: Metadata = {
    title: 'Rambbble',
    description: 'Find your travel buddy!',
    authors: [{ name: 'Oluwatowo Rosanwo', url: 'https://crim-son.space' }],
    applicationName: 'Rambbble',
    creator: 'Oluwatowo Rosanwo',
    generator: 'Next.js',
    keywords: ['travel', 'social', 'people', 'connect', 'planes', 'meet'],
    openGraph: {
        type: 'website',
        url: 'https://rambbble.com',
        title: 'Rambbble',
        description: 'Find your travel buddy!',
        siteName: 'Rambbble',
        images: [
            {
                url: '/logo.svg',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={[poppins.variable, raleway.variable].join(' ')}>
                <ModalContextProvider>
                    <Header />
                    {children}
                    <Footer />
                </ModalContextProvider>
            </body>
        </html>
    );
}
