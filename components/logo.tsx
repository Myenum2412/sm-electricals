import { cn } from '../lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <span className={cn('text-foreground text-xl font-bold tracking-tight', className)} style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            SM ELECTRICAL
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
