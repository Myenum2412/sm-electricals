"use client"

import Image from "next/image"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export const Card = React.memo(
    ({
        card,
        index,
        hovered,
        setHovered,
    }: {
        card: any
        index: number
        hovered: number | null
        setHovered: React.Dispatch<React.SetStateAction<number | null>>
    }) => (
        <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
            )}
        >
            <Image
                src={card.src}
                alt={card.title}
                fill
                className="object-cover absolute inset-0"
            />
            <div
                className={cn(
                    "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
                    hovered === index ? "opacity-100" : "opacity-0"
                )}
            >
                <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                    {card.title}
                    {card.subtitle && <p className="text-sm text-neutral-300">{card.subtitle}</p>}
                    {card.href && (
                        <Link href={card.href} className="mt-2 inline-block text-xs text-white border border-white/30 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
                            Learn More
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
)

Card.displayName = "Card"

type Card = {
    title: string
    src: string
    subtitle?: string
    href?: string
}

export function FocusCards({ cards, gridCols }: { cards: Card[]; gridCols?: string }) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <div className={cn("grid gap-10 max-w-7xl mx-auto md:px-8 w-full", gridCols || "grid-cols-1 md:grid-cols-3")}>
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                />
            ))}
        </div>
    )
}
