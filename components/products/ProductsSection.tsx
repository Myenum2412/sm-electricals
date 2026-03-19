import React from "react";
// import { FramerCarousel } from "../framer-carousel";
import ProductsList from "./ProductsList";
// import { productsData } from "@/data/products";

const ProductsSection = () => {
  return (
    <section className="py-28 md:pb-32 lg:mx-6 mx-2">
      <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
        Products
      </h2>
      <p className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left my-5">
        We are here to help you. Please contact us using the form below.
      </p>
      {/* <FramerCarousel/> */}
      <div className="my-5 border-t border-neutral-600/50 max-w-xl mx-auto" />
      <ProductsList products={[]}/>
    </section>
  );
};

export default ProductsSection;
