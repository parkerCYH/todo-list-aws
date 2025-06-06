import './globals.css';

import type { Metadata } from 'next';

import { NavigationMenuDemo } from '@/components/Nav';

export const metadata: Metadata = {
    title: 'Parker Map',
    description: "All about Parker's Map",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header className="flex items-center justify-between p-4 sm:justify-normal sm:gap-16 sm:p-9">
                    <span className="text-xl font-bold sm:text-3xl">Parker Map</span>
                    <NavigationMenuDemo />
                </header>
                {children}
            </body>
        </html>
    );
}
