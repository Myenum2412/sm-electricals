import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import { aboutUsMetadata } from "@/lib/meta"
import StatsSection from "@/components/stats"
import { LinkPreview } from "@/components/ui/link-preview"

export const metadata = aboutUsMetadata

function page() {
    const organizationSchema = generateOrganizationSchema(
        "SM Electrical",
        "https://sm-electrical.in"
    )

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

            {/* Full width hero */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src="/image/hero-1.jpg"
                    alt="About SM Electrical"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                />

                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Bottom Center Text */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-4 w-full">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        About SM Electrical
                    </h1>
                    <p className="text-white/90 text-sm lg:text-xl tracking-wide mt-2 uppercase font-medium">DEPENDABLE ELECTRICAL SOLUTIONS THAT POWER PROGRESS</p>
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
                                <BreadcrumbPage>About Us</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left side - Content */}
                        <div className="space-y-8">
                            <section>
                                <h1 className="text-4xl font-bold lg:text-5xl mb-6 text-foreground">About SM Electrical</h1>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        SM Electrical is a trusted manufacturer and supplier of high-quality electrical panels and power distribution solutions designed for modern industrial, commercial, and infrastructure needs.
                                    </p>
                                    <p>
                                        With years of experience in the electrical industry, SM Electrical has built a reputation for delivering safe, reliable, and efficient electrical systems. Our expertise lies in designing and manufacturing electrical panels that meet the operational demands of contractors, builders, industrial facilities, and electrical professionals.
                                    </p>
                                    <p>
                                        As a manufacturer and supplier, we maintain strict quality control at every stage — from design and component selection to fabrication and final testing. This ensures that every product leaving our facility performs with durability, safety, and long-term reliability.
                                    </p>
                                    <p>
                                        Our electrical solutions power factories, commercial buildings, residential projects, and large infrastructure developments.
                                    </p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-3xl font-semibold mb-4 text-foreground">Our Story</h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        The journey of SM Electrical began with a clear purpose: to provide dependable electrical equipment that businesses and communities can rely on every day.
                                    </p>
                                    <p>
                                        Starting with a focus on electrical panel manufacturing, the company steadily expanded its capabilities by combining technical expertise, industry experience, and customer-focused service. Over time, SM Electrical has grown into a trusted partner for contractors, builders, and industries seeking reliable electrical solutions.
                                    </p>
                                    <p>
                                        Our growth has been driven by a dedication to quality craftsmanship, continuous improvement, and strong client relationships. Every project we undertake reflects our commitment to delivering electrical systems that are efficient, safe, and built to last.
                                    </p>
                                    <p>
                                        Today, SM Electrical continues to evolve by adopting modern manufacturing practices while maintaining the values that shaped our foundation: integrity, quality, and reliability.
                                    </p>
                                </div>
                            </section>

                            <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                    <p>
                                        Our vision is to become a leading provider of electrical panels and power distribution solutions, recognized for quality, innovation, and reliability.
                                    </p>
                                    <p>
                                        We strive to support industries and infrastructure by delivering products that meet the highest safety standards while improving energy efficiency and system performance.
                                    </p>
                                    <p>
                                        SM Electrical aims to build long-term partnerships with clients by consistently delivering trusted electrical solutions that power businesses, industries, and communities.
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Right side - Images & Quick Links */}
                        <div className="space-y-8 sticky top-24">
                            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src="/image/hero-2.jpg"
                                    alt="SM Electrical Manufacturing"
                                    fill
                                    priority
                                    quality={95}
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <p className="text-white text-xl font-medium">Quality craftsmanship in every panel.</p>
                                </div>
                            </div>
                            
                            <div className="bg-muted p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/panels" className="text-primary hover:underline flex items-center gap-2">
                                            <span>Explore Panel Solutions</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-primary hover:underline flex items-center gap-2">
                                            <span>Our Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-primary hover:underline flex items-center gap-2">
                                            <span>Contact Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <StatsSection />
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page
