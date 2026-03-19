import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import { aboutUsMetadata } from "@/lib/meta"
import AboutPageContent from "@/components/about-content"

export const metadata = aboutUsMetadata

export default function AboutPage() {
    const organizationSchema = generateOrganizationSchema(
        "SM ELECTRICAL",
        "https://sm-electrical.in"
    );

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://sm-electrical.in" },
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
