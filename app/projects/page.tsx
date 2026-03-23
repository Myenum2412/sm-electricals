import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/lib/seo"
import Image from "next/image"
import StatsSection from "@/components/stats"
import { BlurFade } from "@/components/ui/blur-fade"
import { PageHero } from "@/components/PageHero"

export const metadata = {
    title: "Our Projects | SM ELECTRICAL",
    description: "Explore SM ELECTRICAL's successful electrical projects and installations across industrial and commercial sectors.",
}

import { projects } from "@/lib/data"

function ProjectsPage() {
    const organizationSchema = generateOrganizationSchema(
        "SM ELECTRICAL",
        "https://sm-electrical.in"
    )

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://sm-electrical.in" },
        { name: "Projects", url: "https://sm-electrical.in/projects" },
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

            <PageHero 
                title="Our Projects" 
                subtitle="POWERING EXCELLENCE ACROSS INDUSTRIES" 
                imageSrc="/images/projects-banner.png" 
            />

            <MaxWidthWrapper>
                <div className="py-16">
                    <Breadcrumb className="mb-8">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Projects</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className="mb-16">
                        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
                            A trusted provider of high-performance electrical solutions, committed to excellence in safety, efficiency, and reliability for industrial and commercial operations.
                        </p>
                    </div>

                    {/* Masonry Gallery */}
                    <section id="photos">
                        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
                            {projects.map((project, i) => (
                                <BlurFade key={i} delay={0.25 + i * 0.05} inView>
                                    <div className="group relative mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border/50">
                                        <img
                                            className="size-full object-contain transition-transform duration-500 group-hover:scale-105 bg-muted/20"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                                            <h3 className="text-white text-base md:text-lg font-bold tracking-tight">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                </BlurFade>
                            ))}
                        </div>
                    </section>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default ProjectsPage
