import { SITE_CONFIG, SITE_SCHEMA } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { webVitals } from '@/lib/web-vitals';
import { useEffect } from 'react';

const font = Inter({ subsets: ["latin"] });

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Initialize web vitals monitoring
    useEffect(() => {
        webVitals();
    }, []);

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
                />
            </head>
            <body
                className={cn(
                    "antialiased bg-background text-foreground transition min-h-screen overflow-x-hidden !scrollbar-hide",
                    font.className
                )}
            >
                {children}
            </body>
        </html>
    );
}