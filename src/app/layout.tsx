import { SITE_CONFIG, SITE_SCHEMA } from "@/config";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { Viewport } from 'next';

const font = Inter({ 
  subsets: ["latin"],
  display: 'swap' 
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
};

const { viewport: _, ...metadataWithoutViewport } = SITE_CONFIG;
export const metadata = metadataWithoutViewport;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html 
            lang="en" 
            suppressHydrationWarning
            className={cn("scroll-smooth")}
        >
            <head>
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_SCHEMA) }}
                />
                <Script 
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <link rel="canonical" href="https://sahan-hub.com" />
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