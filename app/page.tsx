"use client";
import HeroSection from "@/components/hero-section";
import * as React from "react";
import CTA2 from "@/components/mvpblocks/cta-2";
import { ProductsCarousel } from "@/components/products/ProductsCarousel";
import { panelSolutions, projects, services } from "@/lib/data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { BlurFade } from "@/components/ui/blur-fade";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projectProducts = projects.map((project, index) => ({
  id: index + 1,
  name: project.title,
  price: "",
  originalPrice: "",
  image: project.image,
  description: "",
  rating: 5,
  reviewCount: 0,
  size: "",
  benefits: []
}));

export default function Home() {
  return (
    <>
      <HeroSection />
      <MaxWidthWrapper>
        <ProductsCarousel
          title="Explore Our Recent Projects"
          description="A showcase of our high-quality electrical installations and custom panel solutions across various industries."
          products={projectProducts}
          showImageOnly={true}
          redirectPath="/projects"
        />

        <div className="py-20 bg-secondary/10 border-y border-secondary/20">
          <MaxWidthWrapper>
            <BlurFade delay={0.25} inView>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-center">
                Our Comprehensive Electrical Solutions
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6">
                Beyond manufacturing, we provide end-to-end support for your electrical infrastructure needs.
              </p>
            </BlurFade>
            <HoverEffect items={services} />
          </MaxWidthWrapper>
        </div>

        <div className="py-20 px-4">
          <div className="mb-6">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Company Overview
            </h2>
          </div>
          <BlurFade delay={0.2} duration={0.8} inView>
            <div className="relative overflow-hidden px-2">
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                <video
                  className="bg-background aspect-15/8 relative rounded-2xl w-full h-full object-cover"
                  src="/into.mp4"
                  controls
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
          </BlurFade>
        </div>
      </MaxWidthWrapper>
      <CTA2 />
    </>
  );
}
