import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema } from "@/lib/seo"
import { blogMetadata } from "@/lib/meta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import { PageHero } from "@/components/PageHero"

export const metadata = blogMetadata

const blogPosts = [
    {
        slug: "how-to-choose-right-electrical-panel-salem",
        title: "How to Choose the Right Electrical Panel in Salem",
        excerpt: "A comprehensive guide for Salem industries on selecting the appropriate electrical panel based on power requirements, voltage, and application needs.",
        content: "Choosing the right electrical panel is crucial for the efficiency and safety of your industrial facility. In Salem, where industries range from textiles to steel manufacturing, understanding your power requirements is essential...",
        category: "Panel Selection Guide",
        date: "2024-01-15",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["electrical panel Salem", "panel selection guide", "industrial panels Tamil Nadu"]
    },
    {
        slug: "benefits-apfc-panels-tamil-nadu",
        title: "Benefits of APFC Panels for Tamil Nadu Industries",
        excerpt: "Discover how Automatic Power Factor Correction panels can help reduce electricity bills and improve power quality for your Salem factory.",
        content: "Power factor correction has become increasingly important for industries in Tamil Nadu. With the Tamil Nadu Electricity Board (TNEB) offering incentives for maintaining good power factor, investing in APFC panels has become a smart business decision...",
        category: "Energy Efficiency",
        date: "2024-01-10",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["APFC panels Salem", "power factor correction Tamil Nadu", "energy savings panels"]
    },
    {
        slug: "best-electrical-panel-manufacturer-salem",
        title: "Best Electrical Panel Manufacturer in Salem: What to Look For",
        excerpt: "Finding the right panel manufacturer in Salem, Tamil Nadu. Key factors to consider including certifications, experience, and after-sales support.",
        content: "When searching for the best electrical panel manufacturer in Salem, there are several factors that industrial buyers should consider. Quality certifications, manufacturing experience, and after-sales support are crucial...",
        category: "Buyer Guide",
        date: "2024-01-08",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["best panel manufacturer Salem", "electrical panel suppliers Tamil Nadu", "ISO certified panel maker Salem"]
    },
    {
        slug: "industrial-electrical-panels-salem-industries",
        title: "Industrial Electrical Panels for Salem's Growing Industries",
        excerpt: "How Salem's textile, steel, and manufacturing industries benefit from modern electrical panel solutions.",
        content: "Salem is home to a diverse range of industries including textile mills, steel plants, and automotive component manufacturers. Each of these sectors has unique electrical requirements...",
        category: "Industry Insights",
        date: "2024-01-05",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["industrial panels Salem", "textile industry panels Tamil Nadu", "manufacturing electrical panels"]
    },
    {
        slug: "maintenance-tips-electrical-panels",
        title: "Essential Maintenance Tips for Electrical Panels",
        excerpt: "Learn the best practices for maintaining your electrical panels to ensure longevity and safe operation in industrial environments.",
        content: "Regular maintenance of electrical panels is essential to prevent unexpected breakdowns and ensure safety. Here are the key maintenance practices that every industrial facility in Salem should follow...",
        category: "Maintenance",
        date: "2024-01-05",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["panel maintenance Salem", "electrical panel care Tamil Nadu", "industrial panel upkeep"]
    },
    {
        slug: "lt-vs-ht-panels-guide",
        title: "LT vs HT Panels: A Complete Comparison for Salem Industries",
        excerpt: "Understanding the difference between Low Voltage and High Voltage panels to make the right choice for your facility.",
        content: "When it comes to power distribution in industrial facilities, understanding the difference between LT and HT panels is crucial. This guide will help Salem industries make informed decisions...",
        category: "Technical Guide",
        date: "2023-12-28",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["LT panels vs HT panels", "low voltage high voltage panels", "panel voltage selection Salem"]
    },
    {
        slug: "mcc-panels-salem-manufacturing",
        title: "MCC Panels: Essential for Salem's Manufacturing Sector",
        excerpt: "How Motor Control Center panels streamline operations in Salem's factories and industrial plants.",
        content: "Motor Control Centers (MCC) panels are fundamental to efficient motor management in industrial facilities. For Salem's manufacturing sector, MCC panels offer centralized control and protection...",
        category: "Technical Guide",
        date: "2023-12-22",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["MCC panels Salem", "motor control center Tamil Nadu", "industrial motor panels"]
    },
    {
        slug: "electrical-safety-standards-tamil-nadu",
        title: "Electrical Safety Standards for Tamil Nadu Industries",
        excerpt: "Stay compliant with Tamil Nadu Electrical Inspectorate requirements and ensure workplace safety.",
        content: "Electrical safety is paramount in industrial settings. This article covers the essential safety standards and regulations that industries in Tamil Nadu must adhere to...",
        category: "Safety",
        date: "2023-12-20",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["electrical safety Salem", "Tamil Nadu electrical standards", "IS 8623 compliance panels"]
    },
    {
        slug: "future-electrical-panels-automation",
        title: "The Future of Electrical Panels: Smart Automation Trends",
        excerpt: "Explore how IoT and smart automation are revolutionizing electrical panel design and functionality.",
        content: "The electrical panel industry is undergoing a transformation with the integration of smart technologies. Learn about the latest trends in automation and digitalization...",
        category: "Trends",
        date: "2023-12-15",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["smart panels Salem", "IoT electrical panels", "automation panels Tamil Nadu"]
    },
    {
        slug: "control-panels-salem-automation",
        title: "Control Panels for Industrial Automation in Salem",
        excerpt: "Implementing PLC and automation control panels in Salem's manufacturing facilities for enhanced productivity.",
        content: "Industrial automation is transforming manufacturing in Salem. Control panels with PLC, VFD, and HMI integration are becoming essential for modern industrial facilities...",
        category: "Automation",
        date: "2023-12-10",
        author: "SM ELECTRICAL Team",
        image: "/images/product-hero.png",
        keywords: ["control panels Salem", "PLC automation Tamil Nadu", "industrial automation panels"]
    }
]

function Page() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.smelectricals.tech" },
        { name: "Blog", url: "https://www.smelectricals.tech/blog" },
    ])

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <PageHero 
                title="Electrical Panel Insights" 
                subtitle="EXPERT GUIDANCE ON CHOOSING, INSTALLING, AND MAINTAINING ELECTRICAL PANELS" 
                imageSrc="/images/product-hero.png" 
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
                                <BreadcrumbPage>Blog</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
                    {blogPosts.map((post) => (
                        <Card key={post.slug} className="group hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <Badge className="absolute top-3 right-3" variant="secondary">
                                    {post.category}
                                </Badge>
                            </div>
                            <CardHeader>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-4 h-4" />
                                        {post.author}
                                    </div>
                                </div>
                                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href={`/blog/${post.slug}`}>
                                        Read More <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <section className="py-12 border-t">
                    <Card className="bg-muted">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                Stay Updated
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                                Subscribe to our newsletter for the latest insights on electrical panels, industry trends, and maintenance tips for Salem industries.
                            </p>
                            <div className="flex gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 p-2 border rounded-md"
                                />
                                <Button>Subscribe</Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

            </MaxWidthWrapper>
        </>
    )
}

export default Page