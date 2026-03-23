import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo"
import { faqs } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/PageHero"

export default function Page() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.smelectricals.tech" },
        { name: "FAQ", url: "https://www.smelectricals.tech/faq" },
    ])

    const faqSchema = generateFAQSchema()

    return (
        <>
            <title>FAQ - Electrical Panels in Salem | SM ELECTRICAL</title>
            <meta name="description" content="Find answers to common questions about electrical panels in Salem, Tamil Nadu. Learn about panel types, certifications, installation, and maintenance. Expert guidance from SM ELECTRICAL." />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <PageHero 
                title="Frequently Asked Questions" 
                subtitle="Common questions about electrical panels, our products, and services in Salem, Tamil Nadu." 
                imageSrc="/images/our-services.png" 
            />

            <MaxWidthWrapper>
                {/* Breadcrumb */}
                <div className="py-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>FAQ</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* FAQ Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-8">
                            Electrical Panels FAQ for Salem Industries
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none p-6 bg-card rounded-lg hover:bg-muted/50 transition-colors">
                                        <span className="font-medium pr-4">{faq.question}</span>
                                        <span className="w-5 h-5 text-muted-foreground shrink-0 group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <CardContent className="pt-0 pb-6 px-6 text-muted-foreground">
                                        {faq.answer}
                                    </CardContent>
                                </details>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    Still Have Questions?
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Can&apos;t find the answer you&apos;re looking for? Our team is here to help with your electrical panel requirements in Salem.
                                </p>
                                <Button asChild className="w-full">
                                    <Link href="/contact">
                                        Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Links</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button asChild variant="link" className="w-full justify-start">
                                    <Link href="/services">Our Services</Link>
                                </Button>
                                <Button asChild variant="link" className="w-full justify-start">
                                    <Link href="/about">About Us</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </MaxWidthWrapper>
        </>
    )
}