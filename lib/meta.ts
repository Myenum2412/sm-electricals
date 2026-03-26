import type { Metadata } from "next"

const siteUrl = "https://www.smelectricals.tech"

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "SM ELECTRICAL - Electrical Panels Manufacturer in Salem, Tamil Nadu",
        template: "%s | SM ELECTRICAL"
    },
    description: "Leading manufacturer and supplier of electrical panels in Salem and across Tamil Nadu. We supply LT, HT, Control, MCC, PCC, and APFC Panels to Chennai, Coimbatore, Madurai, Trichy, Erode, and Tiruppur. ISO 9001:2015 certified.",
    keywords: [
        "Electrical Panels Tamil Nadu",
        "Panel Board Suppliers Chennai",
        "Industrial Electrical Panels Coimbatore",
        "LT Panels Madurai",
        "HT Panels Trichy",
        "Control Panels manufacturer Salem",
        "MCC Panels Tiruppur",
        "APFC Panels Erode",
        "Distribution Boards Hosur",
        "Electrical Panel Manufacturer South India",
        "Power Factor Correction Panels Tamil Nadu",
        "Motor Control Center Salem"
    ],
    authors: [{ name: "SM ELECTRICAL" }],
    creator: "SM ELECTRICAL",
    publisher: "SM ELECTRICAL",
    formatDetection: {
        email: false,
        address: false,
        telephone: false
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    alternates: {
        canonical: siteUrl
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteUrl,
        siteName: "SM ELECTRICAL",
        title: "SM ELECTRICAL - Electrical Panels Manufacturer in Salem, Tamil Nadu",
        description: "Leading manufacturer and supplier of electrical panels in Salem, Tamil Nadu. We supply LT Panels, HT Panels, Control Panels, MCC Panels, PCC Panels, APFC Panels, ATS Panels, and Distribution Boards for industrial and commercial applications.",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "SM ELECTRICAL - Electrical Panels Manufacturer in Salem"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "SM ELECTRICAL - Electrical Panels Manufacturer in Salem, Tamil Nadu",
        description: "Leading manufacturer and supplier of electrical panels in Salem, Tamil Nadu.",
        images: ["/images/og-image.png"],
        creator: "@smelectrical"
    },
    verification: {
        google: "google-site-verification-code"
    },
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "SM ELECTRICAL",
    },
}

export const aboutUsMetadata: Metadata = {
    title: "About Us - SM ELECTRICAL | 25+ Years Experience in Salem",
    description: "Learn about SM ELECTRICAL's 25+ years of experience in providing professional electrical solutions in Salem, Tamil Nadu. We specialize in manufacturing high-quality electrical panels for industrial and commercial applications across South India.",
    keywords: [
        "About SM ELECTRICAL",
        "Electrical company Salem",
        "Panel manufacturer Tamil Nadu",
        "Electrical contractors Salem",
        "Industrial electrical solutions"
    ],
    openGraph: {
        title: "About Us - SM ELECTRICAL | 25+ Years Experience",
        description: "Learn about SM ELECTRICAL's 25+ years of experience in providing professional electrical solutions in Salem, Tamil Nadu."
    }
}

export const servicesMetadata: Metadata = {
    title: "Our Services - SM ELECTRICAL | Panel Manufacturing & Installation in Salem",
    description: "Explore the wide range of electrical services provided by SM ELECTRICAL in Salem, Tamil Nadu. From custom panel manufacturing to installation guidance and annual maintenance contracts (AMC). ISO 9001:2015 certified.",
    keywords: [
        "Electrical services Salem",
        "Panel manufacturing Tamil Nadu",
        "Custom electrical panels",
        "AMC services electrical panels",
        "Electrical installation Salem"
    ],
    openGraph: {
        title: "Our Services - SM ELECTRICAL | Panel Manufacturing & Installation",
        description: "Explore the wide range of electrical services provided by SM ELECTRICAL in Salem, Tamil Nadu."
    }
}

export const contactMetadata: Metadata = {
    title: "Contact Us - SM ELECTRICAL | Get Quote for Electrical Panels in Salem",
    description: "Contact SM ELECTRICAL for electrical panels and solutions in Salem, Tamil Nadu. Get free quotes for LT Panels, HT Panels, Control Panels, MCC Panels, and more. Call now or visit our office in Salem.",
    keywords: [
        "Contact SM ELECTRICAL Salem",
        "Get quote electrical panels Salem",
        "Panel supplier phone number Tamil Nadu",
        "Electrical panel consultation Salem"
    ],
    openGraph: {
        title: "Contact Us - SM ELECTRICAL | Get Quote for Electrical Panels in Salem",
        description: "Contact SM ELECTRICAL for electrical panels and solutions in Salem, Tamil Nadu."
    }
}

export const productMetadata = (productName: string, productDescription: string): Metadata => {
    return {
        title: `${productName} in Tamil Nadu | Chennai, Coimbatore, Madurai, Salem`,
        description: `${productName} available across Tamil Nadu, including Chennai, Coimbatore, Madurai, and Salem. ${productDescription} High-quality panels from leading manufacturer in South India.`,
        keywords: [
            `${productName} Chennai`,
            `${productName} Coimbatore`,
            `${productName} Madurai`,
            `${productName} Trichy`,
            `${productName} Tamil Nadu`,
            `${productName} manufacturer India`,
            `Electrical Panels in Tamil Nadu`,
            `Panel Board Suppliers South India`,
            `Industrial ${productName} Salem`
        ],
        openGraph: {
            title: `${productName} | SM ELECTRICAL - Salem`,
            description: `${productName} available in Salem, Tamil Nadu. ISO 9001:2015 certified manufacturer.`
        }
    }
}

export const faqMetadata: Metadata = {
    title: "FAQ - Electrical Panels in Salem | Common Questions Answered",
    description: "Find answers to common questions about electrical panels in Salem, Tamil Nadu. Learn about panel types, certifications, installation, and maintenance. Expert guidance from SM ELECTRICAL.",
    keywords: [
        "FAQ electrical panels Salem",
        "Electrical panel questions Tamil Nadu",
        "Panel selection guide Salem",
        "Electrical panel maintenance FAQ"
    ],
    openGraph: {
        title: "FAQ - Electrical Panels in Salem | Common Questions Answered",
        description: "Find answers to common questions about electrical panels in Salem, Tamil Nadu."
    }
}

export const blogMetadata: Metadata = {
    title: "Blog - Electrical Panels & Industry Insights | SM ELECTRICAL Salem",
    description: "Read the latest articles about electrical panels, industrial power solutions, and best practices from SM ELECTRICAL. Expert insights for Salem industries.",
    keywords: [
        "Electrical panel blog Salem",
        "Industrial power solutions Tamil Nadu",
        "Electrical industry insights",
        "Panel selection guide"
    ],
    openGraph: {
        title: "Blog - Electrical Panels & Industry Insights | SM ELECTRICAL",
        description: "Read the latest articles about electrical panels and industrial power solutions."
    }
}