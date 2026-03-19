"use client";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming these are your shadcn Card components
import { Button } from "@/components/ui/button"; // Assuming shadcn Button component
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility for merging class names
import Link from "next/link";

// Define the type for a single drop item
export interface DropItem {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  size: string;
  benefits: string[];
}

// Define the props for the main component
export interface ProductDropCardProps {
  title: string;
  subtitle: string;
  items: DropItem[];
}

export const ProductDropCard = ({
  title,
  subtitle,
  items,
}: ProductDropCardProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsToShow = 3; // Number of items visible at once

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < items.length - itemsToShow;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Card className="w-full border-none bg-background shadow-none mx-auto overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous drop"
              className="bg-primary hover:bg-background hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next drop"
              className="bg-primary hover:bg-background hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-hidden">
        {/* Carousel container with smooth transition */}
        <div
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full rounded-lg border bg-card p-4 text-card-foreground"
              style={{ flexBasis: `calc((100% / ${itemsToShow}) - (${(itemsToShow - 1) * 16}px / ${itemsToShow}))` }}
            >
            <Link href={`/products/${item.id}`} key={index}>
              <div className="space-y-3">
                <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full bg-white object-contain object-center"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description?.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};