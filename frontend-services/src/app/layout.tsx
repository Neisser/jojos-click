import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";


const geistInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistInter.variable}`}>
                <section className="layout">
                    {children}
                </section>
            </body>
        </html>
    );
}
