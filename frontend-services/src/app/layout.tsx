import { Inter } from "next/font/google";
import "./globals.css";
import React, { FC } from "react";


const geistInter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
})

const RectangleSvg: FC<React.SVGProps<SVGSVGElement>> = ({...props}) => {
    return (
        <svg {...props} width="505" height="527" viewBox="0 0 505 527" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bdd_1_89)">
                <rect x="15.0293" y="276.401" width="335.736" height="335.736" rx="59.217" transform="rotate(-45 15.0293 276.401)" fill="#0E131E" />
            </g>
            <defs>
                <filter id="filter0_bdd_1_89" x="-46.5759" y="-22.6054" width="598.012" height="598.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="43.0669" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_89" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="10.7667" />
                    <feGaussianBlur stdDeviation="13.4584" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect1_backgroundBlur_1_89" result="effect2_dropShadow_1_89" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-24" />
                    <feGaussianBlur stdDeviation="19.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0139583 0 0 0 0 0.0176389 0 0 0 0 0.025 0 0 0 1 0" />
                    <feBlend mode="normal" in2="effect2_dropShadow_1_89" result="effect3_dropShadow_1_89" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_89" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

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
                <section className="animated-elements-bg">
                    <RectangleSvg className="animated-svg" />
                    <RectangleSvg className="animated-svg" />
                    <RectangleSvg className="animated-svg" />
                    <RectangleSvg className="animated-svg" />
                </section>
            </body>
        </html>
    );
}
