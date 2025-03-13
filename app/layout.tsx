import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata as NextMetadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: NextMetadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "Mike Wayne - Portfolio",
    description:
    "Mike Wayne's professional portfolio showcasing projects and skills in frontend and full-stack development.",
    generator: "Next.js",
    applicationName: "Mike Wayne Portfolio",
    keywords: [
        "Mike Wayne",
        "Portfolio",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Mike Wayne - Portfolio",
        description:
      "Mike Wayne's professional portfolio showcasing projects and skills in frontend and full-stack development.",
        url: "https://www.mikewayne.com/",
        siteName: "Mike Wayne Portfolio",
        images: [
            {
                url: "/logo.svg",
                width: 1200,
                height: 630,
                alt: "Mike Wayne Portfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mike Wayne - Portfolio",
        description:
      "Mike Wayne's professional portfolio showcasing projects and skills in frontend and full-stack development.",
        creator: "@mikewayne",
        creatorId: "0000000000",
        images: ["/logo.svg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/favicon.svg', type: 'image/svg+xml' }
        ],
        shortcut: ['/favicon.svg'],
        apple: [
            { url: '/apple-touch-icon.png' }
        ],
        other: [
            {
                rel: 'manifest',
                url: '/site.webmanifest'
            }
        ]
    }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
