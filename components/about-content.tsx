"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Building2, PhoneCall, MailOpen } from "lucide-react"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import StatsSection from "@/components/stats"
import { BlurFade } from "@/components/ui/blur-fade"

export default function AboutPageContent() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start center", "end center"]
    });

    const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.9], [0, 1]);

    return (
        <>
            {/* Full width hero */}
            <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
                <BlurFade inView={true} duration={0.8}>
                    <Image
                        src="/images/about-us-banner.png"
                        alt="About SM ELECTRICAL"
                        fill
                        className="object-cover object-center scale-105"
                        priority
                        quality={100}
                    />
                </BlurFade>

                {/* Gradient overlay for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

                {/* Centered Text Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <BlurFade inView={true} delay={0.2} direction="down">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
                            About SM ELECTRICAL
                        </h1>
                        <div className="h-1.5 w-24 bg-primary mx-auto mb-8 rounded-full shadow-lg" />
                        <p className="text-white/90 text-sm md:text-lg lg:text-xl tracking-[0.2em] uppercase font-bold leading-relaxed drop-shadow-xl">
                            DEPENDABLE ELECTRICAL SOLUTIONS THAT POWER PROGRESS
                        </p>
                    </BlurFade>
                </div>
            </div>

            {/* Content container */}
            <MaxWidthWrapper>
                <div className="pt-12 md:pt-16 pb-0">
                    <br />
                    <BlurFade inView={true} delay={0.1}>
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
                    </BlurFade>

                    <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        {/* Left side - Content */}
                        <div className="space-y-8">
                            <BlurFade inView={true} delay={0.25} direction="up">
                                <section>
                                    <h1 className="text-4xl font-bold lg:text-5xl mb-6 text-foreground">About SM ELECTRICAL</h1>
                                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                        <p>
                                            Founded in 2013 by **Karthi V** (Founder) and led by **Gowtham** (Managing Director), SM ELECTRICAL is a trusted manufacturer and supplier of high-quality electrical panels and power distribution solutions designed for modern industrial, commercial, and infrastructure needs.
                                        </p>
                                        <p>
                                            With over a decade of experience in the electrical industry, SM ELECTRICAL has built a reputation for delivering safe, reliable, and efficient electrical systems. Our expertise lies in designing and manufacturing electrical panels that meet the operational demands of contractors, builders, industrial facilities, and electrical professionals.
                                        </p>
                                        <p>
                                            As a manufacturer and supplier, we maintain strict quality control at every stage from design and component selection to fabrication and final testing. This ensures that every product leaving our facility performs with durability, safety, and long-term reliability.
                                        </p>
                                        <p>
                                            Our electrical solutions power factories, commercial buildings, residential projects, and large infrastructure developments.
                                        </p>
                                    </div>
                                </section>
                            </BlurFade>

                            <BlurFade inView={true} delay={0.35} direction="up">
                                <section>
                                    <h2 className="text-3xl font-semibold mb-4 text-foreground">Our Story</h2>
                                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                        <p>
                                            The journey of SM ELECTRICAL began in 2013 with a clear purpose: to provide dependable electrical equipment that businesses and communities can rely on every day.
                                        </p>
                                        <p>
                                            Starting with a focus on electrical panel manufacturing, the company steadily expanded its capabilities by combining technical expertise, industry experience, and customer-focused service. Over time, SM ELECTRICAL has grown into a trusted partner for contractors, builders, and industries seeking reliable electrical solutions.
                                        </p>
                                        <p>
                                            We are a proud member of the **BNI Capital Chapter**, which reflects our commitment to professional excellence, integrity, and building strong business relationships within our community.
                                        </p>
                                        <p>
                                            Our growth has been driven by a dedication to quality craftsmanship, continuous improvement, and strong client relationships. Every project we undertake reflects our commitment to delivering electrical systems that are efficient, safe, and built to last.
                                        </p>
                                        <p>
                                            Today, SM ELECTRICAL continues to evolve by adopting modern manufacturing practices while maintaining the values that shaped our foundation: integrity, quality, and reliability.
                                        </p>
                                    </div>
                                </section>
                            </BlurFade>

                            <BlurFade inView={true} delay={0.45} direction="up">
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
                                            SM ELECTRICAL aims to build long-term partnerships with clients by consistently delivering trusted electrical solutions that power businesses, industries, and communities.
                                        </p>
                                    </div>
                                </section>
                            </BlurFade>
                        </div>

                        {/* Right side - Images & Quick Links */}
                        <div className="space-y-12 sticky top-24">
                            <BlurFade inView={true} delay={0.5} direction="left">
                                <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-3xl shadow-2xl group border border-border/50">
                                    {/* Image 1 */}
                                    <motion.div 
                                        style={{ opacity: opacity1 }}
                                        className="absolute inset-0 z-10"
                                    >
                                        <Image
                                            src="/about-us-1.png"
                                            alt="About SM ELECTRICAL 1"
                                            fill
                                            priority
                                            quality={95}
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </motion.div>

                                    {/* Image 2 */}
                                    <motion.div 
                                        style={{ opacity: opacity2 }}
                                        className="absolute inset-0 z-20"
                                    >
                                        <Image
                                            src="/about-us-2.png"
                                            alt="About SM ELECTRICAL 2"
                                            fill
                                            priority
                                            quality={95}
                                            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </motion.div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-30" />
                                </div>
                            </BlurFade>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground px-2">Quick Links</h3>
                                <div className="grid gap-4">
                                    <BlurFade delay={0.6} inView>
                                        <Link href="/panels" className="group flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                                    <Building2 className="h-4 w-4" />
                                                </div>
                                                <span className="text-base font-semibold tracking-wide">Explore Panel Solutions</span>
                                            </div>
                                            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        </Link>
                                    </BlurFade>

                                    <BlurFade delay={0.7} inView>
                                        <Link href="/services" className="group flex items-center justify-between bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                                    <MailOpen className="h-4 w-4" />
                                                </div>
                                                <span className="text-base font-semibold tracking-wide">Our Services</span>
                                            </div>
                                            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        </Link>
                                    </BlurFade>

                                    <BlurFade delay={0.8} inView>
                                        <Link href="/contact" className="group flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                            <div className="flex items-center gap-3">
                                                <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                                                    <PhoneCall className="h-4 w-4" />
                                                </div>
                                                <span className="text-base font-semibold tracking-wide">Contact Us</span>
                                            </div>
                                            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                        </Link>
                                    </BlurFade>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Overview Video */}
                    <div className="py-20">
                        <div className="mb-8 md:mb-12">
                            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-foreground">
                                Company Overview
                            </h2>
                        </div>
                        <BlurFade delay={0.2} duration={0.8} inView>
                            <div className="relative overflow-hidden px-2">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <video
                                        className="bg-background aspect-15/8 relative rounded-2xl w-full h-full object-cover"
                                        src="/into.mp4"
                                        controls
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>
                        </BlurFade>
                    </div>

                    {/* Stats Section */}
                    <StatsSection />
                </div>
            </MaxWidthWrapper>
        </>
    );
}
