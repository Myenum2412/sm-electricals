import { cn } from '../lib/utils'
import Image from 'next/image'
import React from 'react'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('flex items-center gap-2 text-foreground text-xl font-bold tracking-tight', className)} style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image src="/images/logo.png" alt="SM ELECTRICAL Logo" fill className="object-contain" priority />
            </div>
            <span>ELECTRICALS</span>
        </span>
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-foreground text-xl font-bold tracking-tight', className)} style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            SM
        </span>
    )
}
