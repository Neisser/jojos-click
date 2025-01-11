import { Inter } from "next/font/google";
import "./globals.css";
import React, { Suspense } from "react";
import { Metadata } from "next";


const geistInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "jojo's",
    description: 'URL shortener service',
    openGraph: {
        title: 'Shorten links',
        description: 'Efficient and easy-to-use URL shortening service'
    },
}


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistInter.variable}`}>
                <Suspense>
                    <section className="layout">
                        {children}
                    </section>
                </Suspense>
            </body>
        </html>
    );
}
