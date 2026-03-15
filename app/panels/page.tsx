import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import { panelsMetadata } from "@/lib/meta"
import StatsSection from "@/components/stats"
import { weddingGalleries } from "@/lib/assets"
import { FocusCards } from "@/components/ui/focus-cards"

export const metadata = panelsMetadata

function page() {
    const organizationSchema = generateOrganizationSchema(
        "SM Electrical",
        "https://sm-electrical.in"
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://sm-electrical.in" },
        { name: "Electrical Panels", url: "https://sm-electrical.in/panels" },
    ])

    const panelSolutions = [
        "Starter Panels", "SSB Panels", "Changeover Panels", "MV Panels",
        "Drive Panels", "APFC Panels", "Fuse Panels", "LTCT Panels",
        "ATS Panels", "Service Panels", "Double Pole Structures", "Lightning Arrestor Systems"
    ]

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
                    src="/image/hero-3.jpg"
                    alt="SM Electrical Panels"
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-foreground">Electrical Panels</h2>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                                <p>
                                    SM Electrical manufactures a comprehensive range of high-performance electrical panels designed for industrial, commercial, and infrastructure applications.
                                </p>
                                <p>
                                    Our panels are engineered to provide efficient power distribution, system protection, and reliable electrical control. Each panel is built using high-quality components and undergoes strict quality testing before delivery.
                                </p>
                                <p>
                                    Whether for industrial plants, commercial complexes, or infrastructure projects, SM Electrical delivers panels designed for safety, performance, and durability.
                                </p>
                            </div>

                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
                                <h3 className="text-2xl font-bold mb-6 text-foreground">Custom Engineering</h3>
                                <p className="text-muted-foreground text-lg italic">
                                    Our team designs panels tailored to specific electrical loads, operational environments, and project requirements.
                                </p>
                            </div>
                        </div>

                        <div className="bg-muted/50 p-8 rounded-3xl border border-muted shadow-sm">
                            <h3 className="text-2xl font-bold mb-8 text-foreground">Our Panel Solutions Include</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {panelSolutions.map((solution, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-lg font-medium text-muted-foreground">{solution}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="py-16 border-t border-b mb-20">
                        <h2 className="text-4xl font-bold text-center mb-12">Why Choose SM Electrical Panels?</h2>
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

                    {/* Stats Section */}
                    <StatsSection />

                    {/* Works Section */}
                    <div className="py-12 md:py-20">
                        <h2 className="text-4xl font-bold mb-12 text-center">Featured Installations</h2>
                        <FocusCards
                            cards={weddingGalleries.map((gallery) => ({
                                title: gallery.title,
                                src: gallery.coverImage || "/image/hero-1.jpg",
                                subtitle: gallery.subtitle,
                                href: gallery.href,
                            }))}
                            gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page
