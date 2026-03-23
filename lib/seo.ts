import { businessLocation, panelSolutions, faqs, testimonials } from "./data"

export function generateOrganizationSchema(name: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": name,
        "url": url,
        "logo": `${url}/logo.png`,
    }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url,
        })),
    }
}

// Local Business Schema with full NAP for Salem
export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": businessLocation.name,
        "description": businessLocation.description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessLocation.address.street,
            "addressLocality": businessLocation.address.city,
            "addressRegion": businessLocation.address.state,
            "postalCode": businessLocation.address.postalCode,
            "addressCountry": businessLocation.address.country
        },
        "telephone": businessLocation.phone,
        "email": businessLocation.email,
        "url": businessLocation.website,
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": businessLocation.geo.latitude,
            "longitude": businessLocation.geo.longitude
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": businessLocation.rating,
            "reviewCount": businessLocation.reviewCount
        },
        "areaServed": {
            "@type": "State",
            "name": "Tamil Nadu"
        },
        "serviceType": [
            "Electrical Panel Manufacturing",
            "Control Panel Supply",
            "Power Distribution Solutions",
            "Industrial Electrical Services"
        ]
    }
}

// Product Schema for structured data
export function generateProductSchema(product: {
    name: string
    description: string
    image: string
    price?: string
    rating?: number
    reviewCount?: number
    brand?: string
    sku?: string
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": {
            "@type": "Brand",
            "name": product.brand || "SM ELECTRICAL"
        },
        "sku": product.sku || product.name.toLowerCase().replace(/\s+/g, "-"),
        "offers": {
            "@type": "Offer",
            "price": product.price || "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": product.rating ? {
            "@type": "AggregateRating",
            "ratingValue": product.rating,
            "reviewCount": product.reviewCount || 0
        } : undefined
    }
}

// FAQ Schema for rich snippets
export function generateFAQSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }
}

// Review/Testimonial Schema
export function generateReviewSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": businessLocation.name,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": businessLocation.rating,
            "reviewCount": businessLocation.reviewCount,
            "bestRating": 5
        },
        "review": testimonials.map(t => ({
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": 5
            },
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "reviewBody": t.text,
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": businessLocation.name
            }
        }))
    }
}

// Product List Schema for category pages
export function generateProductListSchema(category?: string) {
    const products = category
        ? panelSolutions.filter(p => p.category.toLowerCase() === category.toLowerCase())
        : panelSolutions

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.shortDescription,
                "image": product.image,
                "brand": {
                    "@type": "Brand",
                    "name": "SM ELECTRICAL"
                },
                "offers": {
                    "@type": "Offer",
                    "price": product.price || "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                }
            },
            "url": `${businessLocation.website}/products/${product.slug}`
        }))
    }
}

// Organization schema with additional details
export function generateDetailedOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": businessLocation.name,
        "description": businessLocation.description,
        "url": businessLocation.website,
        "logo": `${businessLocation.website}/logo.png`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessLocation.address.street,
            "addressLocality": businessLocation.address.city,
            "addressRegion": businessLocation.address.state,
            "postalCode": businessLocation.address.postalCode,
            "addressCountry": businessLocation.address.country
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": businessLocation.phone,
            "contactType": "sales",
            "email": businessLocation.email,
            "availableLanguage": ["English", "Tamil"]
        },
        "sameAs": [
            "https://www.facebook.com/smelectrical",
            "https://www.instagram.com/smelectrical",
            "https://www.linkedin.com/company/smelectrical"
        ],
        "areaServed": {
            "@type": "State",
            "name": "Tamil Nadu"
        },
        "serviceType": [
            "Electrical Panel Manufacturing",
            "Industrial Electrical Solutions",
            "Power Distribution Systems",
            "Control Panel Design"
        ],
        "foundingYear": 1998,
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": 50,
            "maxValue": 100
        }
    }
}