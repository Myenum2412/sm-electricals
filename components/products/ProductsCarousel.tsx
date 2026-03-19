"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  showImageOnly?: boolean;
  redirectPath?: string;
  products: {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    image: string;
    description: string;
    rating: number;
    reviewCount: number;
    size: string;
    type?: string;
    benefits: string[];
  }[];
}

const ProductsCarousel = ({
  products = [],
  title = "Our Best Selling Products",
  description = "Discover our best selling products and see why they are the best.",
  showImageOnly = false,
  redirectPath = "",
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left mt-2">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto bg-none"
            >
              <ArrowLeft className="size-5 text-primary " />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto bg-none"
            >
              <ArrowRight className="size-5 text-primary " />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          
        >
          <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
            {products.map((product) => (
              <CarouselItem
                key={product.id.toString()}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <div 
                  onClick={() => {
                    if (redirectPath) {
                      window.location.href = redirectPath;
                    } else {
                      setSelectedProduct(product);
                    }
                  }}
                  className="group rounded-xl cursor-pointer"
                >
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    {!showImageOnly && (
                      <>
                        <div className="absolute inset-0 h-full bg-gradient-to-b from-primary/0 to-black/80 mix-blend-multiply " />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                          <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                            {product.name}
                          </div>
                          <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                            {product.description}
                          </div>
                          <div className="flex items-center text-sm font-medium">
                            View Details{" "}
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 " />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {products.map((product, index) => (
            <button
              key={product.id}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background border-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto h-[400px] md:h-full">
              <Image
                src={selectedProduct?.image || ""}
                alt={selectedProduct?.name || ""}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-3xl font-bold text-foreground">
                  {selectedProduct?.name}
                </DialogTitle>
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
                <div className="pt-8">
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
};

export { ProductsCarousel };
