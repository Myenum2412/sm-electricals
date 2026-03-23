'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Check, X, Minus, Plus, ArrowRight, Info } from 'lucide-react'
import type { PanelProduct } from '@/lib/data'

interface ProductComparisonProps {
    products: PanelProduct[]
}

const comparisonSpecs = [
    { key: 'voltage', label: 'Voltage Rating', unit: '' },
    { key: 'currentRating', label: 'Current Rating', unit: '' },
    { key: 'shortCircuitRating', label: 'Short Circuit Rating', unit: '' },
    { key: 'protectionDegree', label: 'Protection Degree', unit: '' },
    { key: 'ambientTemp', label: 'Ambient Temperature', unit: '' },
]

export function ProductComparison({ products }: ProductComparisonProps) {
    const [selectedProducts, setSelectedProducts] = useState<PanelProduct[]>([])
    const [isComparing, setIsComparing] = useState(false)
    const maxProducts = 4

    const toggleProduct = (product: PanelProduct) => {
        const isSelected = selectedProducts.some(p => p.id === product.id)
        if (isSelected) {
            setSelectedProducts(selectedProducts.filter(p => p.id !== product.id))
        } else if (selectedProducts.length < maxProducts) {
            setSelectedProducts([...selectedProducts, product])
        }
    }

    const clearSelection = () => {
        setSelectedProducts([])
        setIsComparing(false)
    }

    const getSpecValue = (product: PanelProduct, key: string) => {
        const spec = product.specifications as Record<string, string | undefined>
        return spec[key] || '-'
    }

    if (isComparing && selectedProducts.length > 0) {
        return (
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Compare Electrical Panels</h2>
                    <Button variant="outline" onClick={clearSelection}>
                        Clear Selection
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 text-left bg-muted/50 border min-w-[200px]">Specifications</th>
                                {selectedProducts.map(product => (
                                    <th key={product.id} className="p-4 bg-muted/50 border min-w-[220px]">
                                        <div className="space-y-3">
                                            <div className="relative aspect-square w-full max-w-[150px] mx-auto rounded-lg overflow-hidden bg-muted">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="font-semibold text-sm">{product.name}</h3>
                                            <Button asChild variant="outline" size="sm" className="w-full">
                                                <Link href={`/products/${product.slug}`}>View Details</Link>
                                            </Button>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 border font-semibold">Category</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center">
                                        {product.subcategory}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 border font-semibold">Usage</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center">
                                        {product.usage.join(', ')}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 border font-semibold">Voltage</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center">
                                        {product.voltage}
                                    </td>
                                ))}
                            </tr>
                            {comparisonSpecs.map(spec => (
                                <tr key={spec.key}>
                                    <td className="p-4 border font-semibold">{spec.label}</td>
                                    {selectedProducts.map(product => (
                                        <td key={product.id} className="p-4 border text-center">
                                            {getSpecValue(product, spec.key)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-4 border font-semibold">Certifications</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center text-sm">
                                        {product.certifications.join(', ')}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 border font-semibold">Applications</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center text-sm">
                                        {product.applications.slice(0, 3).join(', ')}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="p-4 border font-semibold">Action</td>
                                {selectedProducts.map(product => (
                                    <td key={product.id} className="p-4 border text-center">
                                        <Button asChild size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                                            <Link href={`/products/${product.slug}`}>
                                                Get Quote <ArrowRight className="ml-1 w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">Compare Products</h2>
                    <p className="text-muted-foreground">
                        Select up to {maxProducts} products to compare ({selectedProducts.length}/{maxProducts} selected)
                    </p>
                </div>
                {selectedProducts.length >= 2 && (
                    <Button onClick={() => setIsComparing(true)} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        Compare Now
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => {
                    const isSelected = selectedProducts.some(p => p.id === product.id)
                    return (
                        <Card
                            key={product.id}
                            className={`cursor-pointer transition-all ${
                                isSelected ? 'ring-2 ring-yellow-500 bg-yellow-50 dark:bg-yellow-950/20' : 'hover:shadow-md'
                            }`}
                            onClick={() => toggleProduct(product)}
                        >
                            <CardContent className="p-4">
                                <div className="relative aspect-square mb-3 rounded-lg overflow-hidden bg-muted">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 bg-yellow-500 rounded-full p-1">
                                            <Check className="w-4 h-4 text-black" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-semibold text-sm mb-1 line-clamp-1">{product.name}</h3>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                    {product.shortDescription}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}