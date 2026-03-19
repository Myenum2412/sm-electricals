"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  image: string;
  category?: string;
}

interface RefinedProductCardProps {
  product: Product;
  onClick: () => void;
  className?: string;
}

export function RefinedProductCard({ product, onClick, className }: RefinedProductCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group cursor-pointer bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-muted/20",
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-[#F5F5F5] dark:bg-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
          {product.name}
        </h3>
        {product.category && (
          <p className="text-sm text-muted-foreground mt-1 opacity-80 uppercase tracking-wider font-medium">
            {product.category}
          </p>
        )}
      </div>
    </div>
  );
}
