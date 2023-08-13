import './globals.css';
import type {Metadata} from 'next';
import {Roboto_Mono, Sofia_Sans, Montserrat} from 'next/font/google';
import React from "react";

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono'
});
const sofiaSans = Sofia_Sans({
    subsets: ['latin'],
    variable: '--font-sofia-sans'
});
const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat'
});

export const metadata: Metadata = {
    name: "Hoang's Portfolio",
    description: "Hoang's Portfolio",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${robotoMono.variable} ${sofiaSans.variable} ${montserrat.variable}`}>{children}</body>
        </html>
    )
};
