import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "SAHAN HUB & Technology | Educational Technology Solutions in East Africa",
        template: `%s | SAHAN HUB & Technology`
    },
    description: "Leading Tech solutions provider in Djibouti and East Africa. SAHAN HUB offers custom software development, AI/ML integration, cloud solutions, and innovative educational technology services to transform your business.",
    icons: {
        icon: [
            {
                url: "/images/logo.jpg",
            sizes: "512x512",
            type: "image/jpeg"
            },
            {
                url: "/icons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/icons/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            }
        ],
        apple: [
            {
                url: "/icons/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            }
        ]
    },
    manifest: "/site.webmanifest",
    openGraph: {
        title: "SAHAN HUB & Technology | Educational Technology Solutions in East Africa",
        description: "Transform your educational and business practices with SAHAN HUB's comprehensive technology solutions. Specialized in Tech, AI/ML, cloud computing, and digital transformation in Djibouti and global level.",
        url: "https://sahanhub.com",
        images: [
            {
                url: "/images/logo.jpg",
                width: 512,
                height: 512,
                alt: "SAHAN HUB & Technology Logo",
            }
        ],
        type: "website",
        locale: "en",
        siteName: "SAHAN HUB & Technology"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@sahanhub",
        site: "@sahanhub",
        title: "SAHAN HUB & Technology | Educational Technology Solutions",
        description: "Leading EdTech solutions provider in Djibouti. Custom software development, AI/ML integration, and innovative educational technology services.",
        images: [
            {
                url: "/images/logo.jpg",
            width: 512,
            height: 512,
            alt: "SAHAN HUB & Technology Logo",
            }
        ]
    },
    keywords: [
        "EdTech Djibouti",
        "educational technology East Africa",
        "e-learning solutions Djibouti",
        "custom software development",
        "AI ML implementation",
        "digital transformation Djibouti",
        "cloud computing East Africa",
        "cybersecurity services",
        "Djibouti technology company",
        "educational innovation",
        "teaching technology",
        "SAHAN HUB",
        "Technology",
        "IT services Djibouti",
        "business technology solutions"
    ],
    authors: [
        {
            name: "SAHAN HUB",
            url: "https://sahanhub.com"
        }
    ],
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
            noimageindex: false,
        },
    },
    verification: {
        google: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // Replace with your actual Google verification code
    },
    alternates: {
        canonical: "https://sahanhub.com",
        languages: {
            'en': 'https://sahanhub.com',
            'fr': 'https://sahanhub.com/fr',
            'ar': 'https://sahanhub.com/ar',
        }
    },
    metadataBase: new URL("https://sahanhub.com"),
};

// Schema.org metadata (separate from Next.js Metadata)
export const SITE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAHAN HUB & Technology",
    description: "Leading EdTech solutions provider in Djibouti and East Africa",
    url: "https://sahanhub.com",
    logo: "https://sahanhub.com/images/logo.jpg",
    sameAs: [
        "https://twitter.com/sahanhub",
        "https://linkedin.com/company/sahanhub",
        "https://facebook.com/sahanhub"
    ],
    address: {
        "@type": "PostalAddress",
        streetAddress: "Djibouti City",
        addressRegion: "Djibouti",
        addressCountry: "DJ"
    }
};

export const FEATURES_CONFIG = {
    businessHours: {
        start: "09:00",
        end: "18:00",
        timezone: "EAT"
    },
    contact: {
        email: "contact@sahanhub.com",
        phone: "+253 XX-XX-XX-XX",
        address: "Djibouti City, Djibouti"
    },
    social: {
        twitter: "https://twitter.com/sahanhub",
        linkedin: "https://linkedin.com/company/sahanhub",
        facebook: "https://facebook.com/sahanhub"
    }
};