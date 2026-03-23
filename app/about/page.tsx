import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import { aboutUsMetadata } from "@/lib/meta"
import AboutPageContent from "@/components/about-content"

export const metadata = aboutUsMetadata

export default function AboutPage() {
    const organizationSchema = generateOrganizationSchema(
        "SM ELECTRICAL",
        "https://www.smelectricals.tech"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.smelectricals.tech" },
        { name: "About Us", url: "https://sm-electrical.in/about" },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <AboutPageContent />
        </>
    )
}
