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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SAHAN HUB & Technology",
            "logo": "https://sahan-hub.com/images/logo.jpg",
            "image": "https://sahan-hub.com/images/logo.jpg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Heron Road, Quartier 7",
                "addressLocality": "Djibouti City",
                "addressRegion": "Djibouti",
                "postalCode": "BP 8987",
                "addressCountry": "DJ",
                "telephone": "+253 xx xx xx xx",
                "email": "contact@sahan-hub.com"
            },
            "url": "https://sahan-hub.com",
            "sameAs": [
                "https://www.facebook.com/SahanHub",
                "https://www.linkedin.com/company/sahan-hub"
            ]
        })}}
    />
    <meta property="og:image" content="https://sahan-hub.com/images/logo.jpg" />
    <meta name="twitter:image" content="https://sahan-hub.com/images/logo.jpg" />
    <link rel="icon" href="/images/favicon-32x32.jpg" sizes="32x32" type="image/jpeg" />
    <link rel="icon" href="/images/favicon-16x16.jpg" sizes="16x16" type="image/jpeg" />
    <meta property="og:image:width" content="1200"/>
    <meta property="og:image:height" content="630"/>
    <meta property="og:image:type" content="image/jpeg"/>
    <meta property="og:title" content="SAHAN HUB - Technology Solutions"/>
    <meta property="og:description" content="Comprehensive technology solutions and strategic consulting services"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.jpg"/>
    <link rel="manifest" href="/site.webmanifest"/>
    
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