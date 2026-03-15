import HeroSection from "@/components/hero-section";
import * as React from "react";
import StatsSection from "@/components/stats";
import CTA2 from "@/components/mvpblocks/cta-2";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CTA2 />
    </>
  );
}
