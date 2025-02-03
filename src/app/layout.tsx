import { SITE_CONFIG, SITE_SCHEMA } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { Viewport } from 'next';

const font = Inter({ subsets: ["latin"] });

// Separate viewport configuration from metadata
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

// Remove viewport from metadata
const { viewport: _, ...metadataWithoutViewport } = SITE_CONFIG;
export const metadata = metadataWithoutViewport;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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