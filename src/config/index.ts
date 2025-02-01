import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "SAHAN HUB - Technology Solutions & Digital Transformation",
        template: `%s | SAHAN HUB`
    },
    description: "SAHAN HUB offers comprehensive technology solutions including custom software development, data analytics, AI/ML, digital transformation, cloud solutions, and cybersecurity services.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.svg",
                href: "/icons/favicon.svg",
            }
        ]
    },
    openGraph: {
        title: "SAHAN HUB - Technology Solutions & Digital Transformation",
        description: "Transform your business with SAHAN HUB's comprehensive technology solutions. Expert software development, data analytics, AI/ML implementation, and strategic consulting services.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ],
        type: "website",
        locale: "en",
        siteName: "SAHAN HUB"
    },
    twitter: {
        card: "summary_large_image",
        creator: "@sahanhub",
        title: "SAHAN HUB - Technology Solutions & Digital Transformation",
        description: "Transform your business with SAHAN HUB's comprehensive technology solutions. Expert software development, data analytics, AI/ML implementation, and strategic consulting services.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    keywords: [
        "technology solutions",
        "software development",
        "data analytics",
        "AI/ML",
        "digital transformation",
        "cloud solutions",
        "cybersecurity",
        "Djibouti",
        "East Africa",
        "IT services"
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