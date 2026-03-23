"use client"

import React, { useState } from "react"
import { PanelProduct } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Plus, CheckCircle2, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductComparisonProps {
    products: PanelProduct[]
    onClose: () => void
}

export function ProductComparison({ products, onClose }: ProductComparisonProps) {
    const maxProducts = 3

    if (products.length === 0) {
        return (
            <Card className="fixed bottom-4 right-4 z-50 w-80 shadow-lg">
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                        <CardTitle>Compare Products</CardTitle>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                        Add products to compare their specifications side by side.
                    </p>
                    <Button asChild className="w-full">
                        <Link href="/panels">Browse Products</Link>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    // Get all unique specification keys
    const allSpecKeys = Array.from(
        new Set(products.flatMap(p => Object.keys(p.specifications)))
    )

    return (
        <Card className="fixed bottom-4 right-4 z-50 w-[95vw] max-w-4xl shadow-lg max-h-[80vh] overflow-hidden flex flex-col">
            <CardHeader className="pb-2 flex-shrink-0">
                <div className="flex justify-between items-center">
                    <CardTitle>Compare Products ({products.length})</CardTitle>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={onClose}>
                            Minimize
                        </Button>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="overflow-auto flex-1">
                <div className="grid grid-cols-[150px_repeat(auto-fit,minmax(200px,1fr))] gap-4">
                    {/* Header Row */}
                    <div className="font-semibold">Product</div>
                    {products.map((product) => (
                        <div key={product.id} className="text-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute -top-2 -right-2 h-6 w-6"
                                onClick={() => {
                                    const updated = products.filter(p => p.id !== product.id)
                                    if (updated.length === 0) {
                                        onClose()
                                    }
                                }}
                            >
                                <X className="w-3 h-3" />
                            </Button>
                            <div className="aspect-square relative mb-2 rounded-lg overflow-hidden bg-muted">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="font-semibold text-sm line-clamp-2">{product.name}</p>
                            <Badge variant="secondary" className="mt-1">{product.subcategory}</Badge>
                        </div>
                    ))}

                    {/* Empty slots */}
                    {Array.from({ length: maxProducts - products.length }).map((_, i) => (
                        <div key={`empty-${i}`} className="flex items-center justify-center border-2 border-dashed rounded-lg min-h-[200px]">
                            <div className="text-center text-muted-foreground">
                                <Plus className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                <p className="text-sm">Add product</p>
                            </div>
                        </div>
                    ))}

                    {/* Specification Rows */}
                    <div className="font-semibold pt-4">Specifications</div>
                    <div className="col-span-full border-b my-2" />

                    {allSpecKeys.map((key) => (
                        <>
                            <div key={`label-${key}`} className="font-medium text-sm py-2">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            {products.map((product) => (
                                <div key={`${product.id}-${key}`} className="text-sm py-2 text-center">
                                    {(product.specifications as Record<string, string>)[key] || "-"}
                                </div>
                            ))}
                            {Array.from({ length: maxProducts - products.length }).map((_, i) => (
                                <div key={`empty-${i}-spec`} className="py-2">-</div>
                            ))}
                        </>
                    ))}

                    {/* Features */}
                    <div className="font-semibold pt-4">Key Features</div>
                    <div className="col-span-full border-b my-2" />

                    <div className="font-medium text-sm py-2">Features</div>
                    {products.map((product) => (
                        <div key={`${product.id}-features`} className="py-2">
                            <ul className="text-xs space-y-1">
                                {product.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                        <span className="line-clamp-2">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {Array.from({ length: maxProducts - products.length }).map((_, i) => (
                        <div key={`empty-${i}-feat`} className="py-2">-</div>
                    ))}

                    {/* CTA */}
                    <div className="pt-4"></div>
                    {products.map((product) => (
                        <div key={`${product.id}-cta`} className="pt-4">
                            <Button asChild size="sm" className="w-full">
                                <Link href={`/products/${product.slug}`}>
                                    View Details <ArrowRight className="w-3 h-3 ml-1" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                    {Array.from({ length: maxProducts - products.length }).map((_, i) => (
                        <div key={`empty-${i}-cta`} className="pt-4"></div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export function useProductComparison(products: PanelProduct[]) {
    const [compareProducts, setCompareProducts] = useState<PanelProduct[]>([])

    const addToCompare = (product: PanelProduct) => {
        if (compareProducts.length < 3 && !compareProducts.find(p => p.id === product.id)) {
            setCompareProducts([...compareProducts, product])
        }
    }

    const removeFromCompare = (productId: number) => {
        setCompareProducts(compareProducts.filter(p => p.id !== productId))
    }

    const clearCompare = () => {
        setCompareProducts([])
    }

    const isInCompare = (productId: number) => {
        return compareProducts.some(p => p.id === productId)
    }

    return {
        compareProducts,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare
    }
}