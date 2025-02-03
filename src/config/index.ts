import { Metadata } from "next";
export const SITE_CONFIG: Metadata = {
    title: {
        default: "SAHAN HUB & Technology | Leading Digital Solutions in East Africa",
        template: `%s | SAHAN HUB - Innovation Through Technology`
    },
    description: "Premier technology solutions provider in East Africa. Specializing in AI/ML, cloud computing, custom software development, and digital transformation. Transform your business with SAHAN HUB.",
    
    openGraph: {
        title: "SAHAN HUB & Technology | Digital Innovation Leader",
        description: "Revolutionize your business with cutting-edge technology solutions. AI/ML integration, cloud computing, and digital transformation experts in East Africa.",
        images: [{
            url: "/images/logo.jpg",
            width: 1200,
            height: 630,
            alt: "SAHAN HUB & Technology - Innovation Through Excellence"
        }],
        siteName: "SAHAN HUB & Technology"
    },
    
    keywords: [
        "digital transformation East Africa",
        "AI ML solutions Djibouti",
        "enterprise technology solutions",
        "cloud computing services",
        "custom software development",
        "IT consulting Djibouti",
        "technology innovation hub",
        "digital infrastructure",
        "business automation solutions",
        "SAHAN HUB technology",
        "East Africa tech leader",
        "enterprise software solutions",
        "digital strategy consulting",
        "technology services provider",
        "IT modernization services"
    ]
};

export const SITE_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SAHAN HUB & Technology",
    description: "Leading digital transformation and technology solutions provider in East Africa",
    url: "https://sahanhub.com",
    logo: "https://sahanhub.com/images/logo.jpg",
    sameAs: [
        "https://twitter.com/sahanhub",
        "https://linkedin.com/company/sahanhub",
        "https://facebook.com/sahanhub"
    ],
    address: {
        "@type": "PostalAddress",
        streetAddress: "Quartier 7",
        addressLocality: "Djibouti City",
        addressRegion: "Djibouti",
        addressCountry: "DJ",
        areaServed: ["Djibouti", "East Africa", "Horn of Africa"]
    },
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+253-XX-XX-XX-XX",
        email: "contact@sahanhub.com",
        availableLanguage: ["English", "French", "Arabic"]
    }
};