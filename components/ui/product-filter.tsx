"use client"

import React, { useState, useMemo } from "react"
import { PanelProduct, PanelCategory } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Filter, ArrowUpDown } from "lucide-react"

interface ProductFilterProps {
    products: PanelProduct[]
    children: (filteredProducts: PanelProduct[]) => React.ReactNode
}

type SortOption = "name-asc" | "name-desc" | "rating" | "newest"

export function ProductFilter({ products, children }: ProductFilterProps) {
    const [selectedTypes, setSelectedTypes] = useState<PanelCategory[]>([])
    const [selectedUsage, setSelectedUsage] = useState<string[]>([])
    const [selectedVoltage, setSelectedVoltage] = useState<string[]>([])
    const [selectedIndustry, setSelectedIndustry] = useState<string[]>([])
    const [sortBy, setSortBy] = useState<SortOption>("name-asc")
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    // Unique values
    const allTypes = useMemo(() => Array.from(new Set(products.map(p => p.subcategory))), [products])
    const allUsage = useMemo(() => Array.from(new Set(products.flatMap(p => p.usage))), [products])
    const allVoltage = useMemo(() => Array.from(new Set(products.map(p => p.voltage))), [products])
    const allIndustries = useMemo(() => Array.from(new Set(products.flatMap(p => p.industries))).slice(0, 10), [products])

    const filteredProducts = useMemo(() => {
        let result = [...products]

        // Filter by type
        if (selectedTypes.length > 0) {
            result = result.filter(p => selectedTypes.includes(p.subcategory))
        }

        // Filter by usage
        if (selectedUsage.length > 0) {
            result = result.filter(p => p.usage.some(u => selectedUsage.includes(u)))
        }

        // Filter by voltage
        if (selectedVoltage.length > 0) {
            result = result.filter(p => selectedVoltage.includes(p.voltage))
        }

        // Filter by industry
        if (selectedIndustry.length > 0) {
            result = result.filter(p => p.industries.some(i => selectedIndustry.includes(i)))
        }

        // Sort
        switch (sortBy) {
            case "name-asc":
                result.sort((a, b) => a.name.localeCompare(b.name))
                break
            case "name-desc":
                result.sort((a, b) => b.name.localeCompare(a.name))
                break
            case "rating":
                result.sort((a, b) => b.rating - a.rating)
                break
            case "newest":
                result.sort((a, b) => b.id - a.id)
                break
        }

        return result
    }, [products, selectedTypes, selectedUsage, selectedVoltage, selectedIndustry, sortBy])

    const clearFilters = () => {
        setSelectedTypes([])
        setSelectedUsage([])
        setSelectedVoltage([])
        setSelectedIndustry([])
    }

    const hasActiveFilters = selectedTypes.length > 0 || selectedUsage.length > 0 || selectedVoltage.length > 0 || selectedIndustry.length > 0

    const filterContent = (
        <div className="space-y-6">
            {/* Sort */}
            <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4" />
                    Sort By
                </h3>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full p-2 border rounded-md"
                >
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                </select>
            </div>

            {/* Panel Type */}
            <div>
                <h3 className="font-semibold mb-3">Panel Type</h3>
                <div className="space-y-2">
                    {allTypes.map((type) => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(type as PanelCategory)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedTypes([...selectedTypes, type as PanelCategory])
                                    } else {
                                        setSelectedTypes(selectedTypes.filter(t => t !== type))
                                    }
                                }}
                                className="rounded border-gray-300"
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Usage */}
            <div>
                <h3 className="font-semibold mb-3">Usage</h3>
                <div className="space-y-2">
                    {allUsage.map((usage) => (
                        <label key={usage} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedUsage.includes(usage)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedUsage([...selectedUsage, usage])
                                    } else {
                                        setSelectedUsage(selectedUsage.filter(u => u !== usage))
                                    }
                                }}
                                className="rounded border-gray-300"
                            />
                            <span>{usage}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Voltage */}
            <div>
                <h3 className="font-semibold mb-3">Voltage</h3>
                <div className="space-y-2">
                    {allVoltage.map((voltage) => (
                        <label key={voltage} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedVoltage.includes(voltage)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedVoltage([...selectedVoltage, voltage])
                                    } else {
                                        setSelectedVoltage(selectedVoltage.filter(v => v !== voltage))
                                    }
                                }}
                                className="rounded border-gray-300"
                            />
                            <span>{voltage}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Industry */}
            <div>
                <h3 className="font-semibold mb-3">Industry</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                    {allIndustries.map((industry) => (
                        <label key={industry} className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={selectedIndustry.includes(industry)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedIndustry([...selectedIndustry, industry])
                                    } else {
                                        setSelectedIndustry(selectedIndustry.filter(i => i !== industry))
                                    }
                                }}
                                className="rounded border-gray-300"
                            />
                            <span>{industry}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="w-full">
                    <X className="w-4 h-4 mr-2" />
                    Clear Filters
                </Button>
            )}
        </div>
    )

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
                <Button
                    variant="outline"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full"
                >
                    <Filter className="w-4 h-4 mr-2" />
                    Filters {hasActiveFilters && `(${selectedTypes.length + selectedUsage.length + selectedVoltage.length + selectedIndustry.length})`}
                </Button>
                {isFilterOpen && (
                    <Card className="mt-4">
                        <CardContent className="p-4">
                            {filterContent}
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
                <Card className="sticky top-24">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Filter className="w-4 h-4" />
                            Filters
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {filterContent}
                    </CardContent>
                </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                    <p className="text-muted-foreground">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>
                    {hasActiveFilters && (
                        <Badge variant="secondary">
                            {filteredProducts.length} results
                        </Badge>
                    )}
                </div>
                {children(filteredProducts)}
            </div>
        </div>
    )
}