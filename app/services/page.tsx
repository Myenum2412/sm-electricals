import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import { servicesMetadata } from "@/lib/meta"

import { HoverEffect } from "@/components/ui/card-hover-effect"

export const metadata = servicesMetadata

import { services, projects } from "@/lib/data"
import { ProductsCarousel } from "@/components/products/ProductsCarousel"
import { PageHero } from "@/components/PageHero"
import CustomEngineeringCTA from "@/components/custom-engineering-cta"


function page() {
    const organizationSchema = generateOrganizationSchema(
        "SM ELECTRICAL",
        "https://www.smelectricals.tech"
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.smelectricals.tech" },
        { name: "Services", url: "https://www.smelectricals.tech/services" },
    ])

    const projectProducts = projects.map((project, index) => ({
        id: index + 1,
        name: project.title,
        price: "",
        originalPrice: "",
        image: project.image,
        description: "",
        rating: 5,
        reviewCount: 0,
        size: "",
        benefits: []
    }));


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

            <PageHero 
                title="Our Services" 
                subtitle="SUPPORTING CONTRACTORS, BUSINESSES, AND INDUSTRIAL CLIENTS" 
                imageSrc="/images/our-services.png" 
            />

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
                                <BreadcrumbPage>Services</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-6">Expert Electrical Services in Tamil Nadu</h2>
                        <p className="text-xl text-muted-foreground w-full leading-relaxed">
                            Beyond manufacturing, SM ELECTRICAL provides a range of services to support contractors, businesses, and industrial clients across Tamil Nadu. From our base in Salem, we serve major industrial hubs including Chennai, Coimbatore, Madurai, Trichy, and Erode, ensuring that your power distribution systems are designed, delivered, and maintained to the highest standards.
                        </p>
                    </div>

                    <div className="mb-12 py-16 bg-secondary/10 rounded-3xl px-8 border border-secondary/20">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Our Comprehensive Electrical Solutions</h1>
                        <HoverEffect items={services} />
                    </div>

                    <ProductsCarousel
                        title="Explore Our Recent Projects"
                        description="A showcase of our high-quality electrical installations and custom panel solutions across various industries."
                        products={projectProducts}
                        showImageOnly={true}
                        showImagePopup={true}
                        redirectPath="/projects"
                    />


                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/our-services-sm.png"
                                alt="SM ELECTRICAL Quality Assurance"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Commitment to Quality</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Our commitment to quality craftsmanship and continuous improvement is at the heart of every service we provide. We don't just supply products; we provide solutions that power businesses and communities.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium">Strict Quality Control at every stage</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium">On-time Delivery Schedules</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium">24/7 Technical Support</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <CustomEngineeringCTA />
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page