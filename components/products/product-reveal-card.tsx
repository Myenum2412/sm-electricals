"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ProductRevealCardProps {
  id?: number;
  name?: string;
  price?: string;
  originalPrice?: string;
  image?: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  onAdd?: () => void;
  onFavorite?: () => void;
  enableAnimations?: boolean;
  className?: string;
  size?: string;
  type?: string;
}

export function ProductRevealCard({
  id,
  description,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  onAdd,
  onFavorite,
  size,
  type,
  enableAnimations = true,
  className,
}: ProductRevealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = enableAnimations && !shouldReduceMotion;
  const router = useRouter();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    onFavorite?.();
  };

  const handleCardClick = () => {
    if (id) {
      router.push(`/products/${id}`);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (id) {
      router.push(`/products/${id}`);
    }
    onAdd?.();
  };

  const containerVariants = {
    rest: {
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate
      ? {
          scale: 1.03,
          y: -8,
          filter: "blur(0px)",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          },
        }
      : {},
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const overlayVariants = {
    rest: {
      y: "100%",
      opacity: 0,
      filter: "blur(4px)",
    },
    hover: {
      y: "0%",
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    rest: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  };

  const buttonVariants_motion = {
    rest: { scale: 1, y: 0 },
    hover: shouldAnimate
      ? {
          scale: 1.05,
          y: -2,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
          },
        }
      : {},
    tap: shouldAnimate ? { scale: 0.95 } : {},
  };

  const favoriteVariants = {
    rest: { scale: 1, rotate: 0 },
    favorite: {
      scale: [1, 1.3, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.div
      data-slot="product-reveal-card"
      initial="rest"
      whileHover="hover"
      variants={containerVariants as Variants}
      onClick={handleCardClick}
      className={cn(
        "relative rounded-2xl border border-border/50 bg-card text-card-foreground overflow-hidden",
        "shadow-lg shadow-black/5 cursor-pointer group",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-56 w-full object-contain"
          variants={imageVariants}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < Math.floor(rating || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {rating || 0} ({reviewCount || 0} reviews)
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <motion.h3
            className="text-lg font-semibold leading-tight tracking-tight"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {name} - {size} 
          </motion.h3>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-base text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Reveal Overlay */}
      <motion.div
        variants={overlayVariants as Variants}
        className="absolute inset-0 bg-background/96 backdrop-blur-xl flex flex-col justify-end"
      >
        <div className="p-6 space-y-4 flex flex-col justify-between h-full">
          {/* Product Description */}
          <motion.div variants={contentVariants as Variants}>
            <h4 className="font-semibold mb-2 text-lg">{name}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description?.split(".")[0]}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={contentVariants as Variants}
            className="space-y-3"
          >
            <motion.button
              onClick={handleButtonClick}
              variants={buttonVariants_motion as Variants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-full h-12 font-medium",
                "bg-gradient-to-r from-primary to-primary/90",
                "hover:from-primary/90 hover:to-primary",
                "shadow-lg shadow-primary/25"
              )}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Details
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
