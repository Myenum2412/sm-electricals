import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import { servicesMetadata } from "@/lib/meta"
import StatsSection from "@/components/stats"

export const metadata = servicesMetadata

function page() {
    const organizationSchema = generateOrganizationSchema(
        "SM Electrical",
        "https://sm-electrical.in"
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://sm-electrical.in" },
        { name: "Services", url: "https://sm-electrical.in/services" },
    ])

    const services = [
        {
            title: "Custom Panel Manufacturing",
            description: "We design and fabricate electrical panels tailored to the specific needs of each project, ensuring optimal performance and compliance with industry standards.",
            icon: "⚡"
        },
        {
            title: "Bulk Supply for Projects",
            description: "We work closely with contractors, developers, and electrical suppliers to deliver large-scale orders with consistent quality and on-time delivery.",
            icon: "📦"
        },
        {
            title: "Electrical System Consultation",
            description: "Our experienced team helps clients choose the right panel configurations and electrical systems based on their operational requirements.",
            icon: "🤝"
        },
        {
            title: "Installation Guidance",
            description: "We provide technical support and guidance during installation to ensure that electrical panels operate safely and efficiently.",
            icon: "🛠️"
        },
        {
            title: "Quality Testing & Assurance",
            description: "Every panel manufactured by SM Electrical undergoes thorough inspection and testing to guarantee reliability, safety, and long service life.",
            icon: "✅"
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
                    src="/images/our-services.png"
                    alt="SM Electrical Services"
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
                        Our Services
                    </h1>
                    <p className="text-white/90 text-sm lg:text-xl tracking-wide mt-2 uppercase font-medium">SUPPORTING CONTRACTORS, BUSINESSES, AND INDUSTRIAL CLIENTS</p>
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
                                <BreadcrumbPage>Services</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-6">Expert Electrical Services</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                            Beyond manufacturing, SM Electrical provides a range of services to support contractors, businesses, and industrial clients. Our team ensures that your power distribution systems are designed, delivered, and maintained to the highest standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-muted/50 border border-muted hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300">
                                <span className="text-4xl mb-4 block">{service.icon}</span>
                                <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/image/hero-1.jpg"
                                alt="SM Electrical Quality Assurance"
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

                    {/* Stats Section */}
                    <StatsSection />
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default page
