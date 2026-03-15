"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LinkPreviewProps {
    children: React.ReactNode
    url: string
    className?: string
}

export const LinkPreview = ({ children, url, className }: LinkPreviewProps) => {
    return (
        <Link
            href={url}
            className={cn("text-primary hover:underline", className)}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    )
}
