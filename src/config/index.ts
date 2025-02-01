import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "SAHAN HUB & Teachnlogy - Technology Solutions & Educational Innovation",
        template: `%s | SAHAN HUB & Teachnlogy`
    },
    description: "SAHAN HUB combines Teachnlogy innovation with comprehensive technology solutions including custom software development, educational technology, data analytics, AI/ML, digital transformation, cloud solutions, and cybersecurity services.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.svg",
                href: "/icons/favicon.svg",
            }
        ]
    },
    openGraph: {
        title: "SAHAN HUB & Teachnlogy - Technology Solutions & Educational Innovation",
        description: "Transform your business and educational practices with SAHAN HUB's comprehensive technology solutions and Teachnlogy integration. Expert software development, educational technology, data analytics, AI/ML implementation, and strategic consulting services.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ],
        type: "website",
        locale: "en",
        siteName: "SAHAN HUB & Teachnlogy"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@sahanhub",
        title: "SAHAN HUB & Teachnlogy - Technology Solutions & Educational Innovation",
        description: "Transform your business and educational practices with SAHAN HUB's comprehensive technology solutions and Teachnlogy integration. Expert software development, educational technology, data analytics, AI/ML implementation, and strategic consulting services.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    keywords: [
        "teachnlogy",
        "educational technology",
        "e-learning solutions",
        "technology solutions",
        "software development",
        "data analytics",
        "AI/ML",
        "digital transformation",
        "cloud solutions",
        "cybersecurity",
        "Djibouti",
        "East Africa",
        "IT services",
        "educational innovation",
        "teaching technology"
    ],
    authors: [
        {
            name: "SAHAN HUB",
            url: "https://sahanhub.com"
        }
    ],
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    metadataBase: new URL("https://sahanhub.com"),
};

// Optional: Additional configuration for features and settings
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