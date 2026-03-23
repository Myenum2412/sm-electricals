import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { BreadcrumbItem, BreadcrumbPage, Breadcrumb, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb"
import Link from "next/link"
import React from "react"
import { generateBreadcrumbSchema, generateProductSchema } from "@/lib/seo"
import { panelSolutions, getProductBySlug, PanelProduct } from "@/lib/data"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle2, ArrowRight } from "lucide-react"
import { productMetadata } from "@/lib/meta"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return panelSolutions.map((product) => ({
        slug: product.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const product = getProductBySlug(slug)
    if (!product) return {}
    return productMetadata(product.name, product.description)
}

function generateProductPageSchema(product: PanelProduct) {
    return generateProductSchema({
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        rating: product.rating,
        reviewCount: product.reviewCount,
        brand: "SM ELECTRICAL"
    })
}

async function Page({ params }: Props) {
    const { slug } = await params
    const product = getProductBySlug(slug)

    if (!product) {
        notFound()
    }

    // Get related products (same category)
    const relatedProducts = panelSolutions
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.smelectricals.tech" },
        { name: product.name, url: `https://www.smelectricals.tech/products/${product.slug}` },
    ])

    const productSchema = generateProductPageSchema(product)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={`${product.name} - SM ELECTRICAL Salem, Tamil Nadu`}
                    fill
                    className="object-cover object-center"
                    priority
                    quality={95}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center">
                    <MaxWidthWrapper>
                        <div className="text-white">
                            <Badge className="mb-4">{product.category} in Salem</Badge>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                                {product.name} in Salem
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                {product.shortDescription} - Available in Salem and across Tamil Nadu
                            </p>
                        </div>
                    </MaxWidthWrapper>
                </div>
            </div>

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
                                <BreadcrumbPage>{product.name}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Product Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
                    {/* Image */}
                    <div className="aspect-square relative rounded-xl overflow-hidden bg-muted">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        <Badge className="absolute top-4 right-4" variant="default">
                            {product.subcategory}
                        </Badge>
                    </div>

                    {/* Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < product.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {product.certifications.map((cert, index) => (
                                <Badge key={index} variant="outline" className="flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" />
                                    {cert}
                                </Badge>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {product.usage.map((use, index) => (
                                <Badge key={index} variant="secondary">
                                    {use}
                                </Badge>
                            ))}
                            <Badge variant="secondary">
                                {product.voltage}
                            </Badge>
                        </div>

                        <div className="pt-4 border-t">
                            <Button asChild size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black">
                                <Link href="/contact">
                                    Get Quote in Salem <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <p className="text-sm text-muted-foreground mt-2">
                                Available across Salem and Tamil Nadu
                            </p>
                        </div>
                    </div>
                </div>

                {/* Specifications */}
                <section className="py-12 border-t">
                    <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
                    <Card>
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <div key={key} className="flex justify-between py-3 border-b last:border-0">
                                        <span className="font-medium text-muted-foreground capitalize">
                                            {key.replace(/([A-Z])/g, ' $1').trim()}
                                        </span>
                                        <span className="font-semibold">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Features */}
                <section className="py-12 border-t">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {product.features.map((feature, index) => (
                            <Card key={index}>
                                <CardContent className="p-4 flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                    <span>{feature}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Applications */}
                <section className="py-12 border-t">
                    <h2 className="text-3xl font-bold mb-8">Applications</h2>
                    <div className="flex flex-wrap gap-3">
                        {product.applications.map((app, index) => (
                            <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                                {app}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Industries Served */}
                <section className="py-12 border-t">
                    <h2 className="text-3xl font-bold mb-8">Industries Served</h2>
                    <div className="flex flex-wrap gap-3">
                        {product.industries.map((industry, index) => (
                            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                                {industry}
                            </Badge>
                        ))}
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-12 border-t">
                    <h2 className="text-3xl font-bold mb-8">Benefits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {product.benefits.map((benefit, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        {benefit}
                                    </CardTitle>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="py-12 border-t">
                        <h2 className="text-3xl font-bold mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Card key={relProduct.id} className="group hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
                                        <Image
                                            src={relProduct.image}
                                            alt={relProduct.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{relProduct.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {relProduct.shortDescription}
                                        </p>
                                        <Button asChild variant="outline" className="w-full">
                                            <Link href={`/products/${relProduct.slug}`}>
                                                View Details
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="py-12 border-t">
                    <Card className="bg-primary text-primary-foreground">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Interested in {product.name} for your Salem Project?
                            </h2>
                            <p className="text-lg opacity-90 mb-6">
                                Get a competitive quote for {product.name} in Salem, Tamil Nadu. Our team will respond within 24 hours with detailed pricing and specifications.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                    <Link href="/contact">
                                        Get Free Quote in Salem <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                                    <Link href="/">
                                        Back to Home
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>

            </MaxWidthWrapper>
        </>
    )
}

export default Page