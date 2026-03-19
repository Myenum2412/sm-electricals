import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import { panelsMetadata } from "@/lib/meta"
import StatsSection from "@/components/stats"
import CustomEngineeringCTA from "@/components/custom-engineering-cta"
import { ProductGrid } from "@/components/products/ProductGrid"
import { panelSolutions } from "@/lib/data"

export const metadata = panelsMetadata

function page() {
    const organizationSchema = generateOrganizationSchema(
        "SM ELECTRICAL",
        "https://sm-electrical.in"
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://sm-electrical.in" },
        { name: "Electrical Panels", url: "https://sm-electrical.in/panels" },
    ])



    const highlights = [
        {
            title: "Manufacturer Direct Advantage",
            items: ["Competitive pricing", "Reliable product consistency", "Custom-built panel options"]
        },
        {
            title: "High Quality Manufacturing",
            items: ["Premium-grade electrical components", "Precision wiring and assembly", "Strict quality inspection and testing"]
        }
    ]

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

            {/* Full width hero */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src="/images/panels.png"
                    alt="SM ELECTRICAL Panels"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                />

                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Bottom Center Text */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4 w-full">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight">
                        Electrical Panels
                    </h1>
                    <p className="text-white/90 text-sm lg:text-xl tracking-wide mt-2 uppercase font-medium">HIGH-PERFORMANCE SOLUTIONS FOR INDUSTRIAL & COMMERCIAL NEEDS</p>
                </div>
            </div>

            {/* Content container */}
            <MaxWidthWrapper>
                <div className="py-12 md:py-16">
                    <Breadcrumb className="mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Panels</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="flex flex-col items-center text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">All Products</h1>
                        <div className="max-w-3xl text-muted-foreground text-lg leading-relaxed">
                            <p>SM ELECTRICAL manufactures a comprehensive range of high-performance electrical panels designed for industrial, commercial, and infrastructure. Our panels are engineered to provide efficient power distribution, system protection, and reliable electrical control.</p>
                        </div>
                    </div>

                    <ProductGrid products={panelSolutions} />

                    <div className="py-16 border-t border-b mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12">Why Choose SM ELECTRICAL Panels?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {highlights.map((highlight, index) => (
                                <div key={index} className="space-y-6">
                                    <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {highlight.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {highlight.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                                                <span className="text-lg text-muted-foreground leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Engineering*/}
                    <CustomEngineeringCTA />

                    {/* Stats Section */}
                    <StatsSection />

                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page
