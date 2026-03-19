"use client";
import React, { useState } from "react";
import { RefinedProductCard } from "./RefinedProductCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  category?: string;
  description: string;
  benefits?: string[];
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: string[] = ["ALL", ...Array.from(new Set(products.map((p) => p.category).filter((c): c is string => !!c)))];

  const filteredProducts = selectedCategory === "ALL"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={cn(
              "px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border",
              selectedCategory === cat
                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                : "bg-background text-muted-foreground border-muted-foreground/20 hover:border-primary/40 hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <RefinedProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Shared Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background border-none rounded-[2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto h-[400px] md:h-full bg-[#F5F5F5] dark:bg-zinc-800">
              <Image
                src={selectedProduct?.image || ""}
                alt={selectedProduct?.name || ""}
                fill
                className="object-contain p-12"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl font-bold text-foreground">
                  {selectedProduct?.name}
                </DialogTitle>
                {selectedProduct?.category && (
                    <span className="text-sm font-medium text-primary uppercase tracking-widest mt-1 block">
                        {selectedProduct.category}
                    </span>
                )}
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedProduct?.description}
                </p>
                {selectedProduct?.benefits && selectedProduct.benefits.length > 0 && (
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="pt-8 text-center md:text-left">
                  <Button className="w-full rounded-full py-6 text-lg" onClick={() => setSelectedProduct(null)}>
                    Contact Us for Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
