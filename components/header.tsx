'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { 
        name: 'Contact', 
        href: '/contact',
        subItems: [
            { name: 'Office', href: '/contact/office' },
            { name: 'Factories', href: '/contact/factories' },
        ]
    },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
    const [mobileOpenDropdown, setMobileOpenDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        if (typeof window === 'undefined') return

        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset
            setScrolled(scrollY > 20)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const blurIntensity = scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-md'
    const bgOpacity = scrolled ? 'bg-background/80 dark:bg-background/70' : 'bg-background/60 dark:bg-background/50'

    return (
        <header>
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-2rem)] max-w-6xl rounded-2xl p-px bg-gradient-to-r from-border/30 via-border/60 to-border/30">
                <nav
                    data-state={menuState && 'active'}
                    className={cn(
                        'w-full h-full rounded-2xl',
                        'shadow-lg shadow-black/5 dark:shadow-black/20',
                        'transition-all duration-300 ease-out',
                        bgOpacity,
                        blurIntensity,
                        scrolled && 'shadow-xl shadow-black/10 dark:shadow-black/30'
                    )}>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
                        <div className="relative flex flex-wrap items-center justify-between py-3 lg:gap-0 lg:py-4">
                            <div className="shrink-0 flex items-center justify-between w-full lg:w-auto">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="inline-flex items-center gap-3">
                                    <Logo />
                                </Link>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setMenuState(!menuState)}
                                    aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                    className="relative z-20 -m-2.5 ml-auto block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            {/* Navigation Menu - Centered */}
                            <div className="hidden lg:flex flex-1 justify-center">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="relative"
                                            onMouseEnter={() => (item as any).subItems && setOpenDropdown(item.name)}
                                            onMouseLeave={() => setOpenDropdown(null)}>
                                            {(item as any).subItems ? (
                                                <>
                                                    <Link
                                                        href={item.href}
                                                        className="relative text-muted-foreground hover:text-accent-foreground flex items-center gap-1 duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full">
                                                        <span>{item.name}</span>
                                                        <ChevronDown className={cn('size-4 transition-transform duration-200', openDropdown === item.name && 'rotate-180')} />
                                                    </Link>
                                                    {openDropdown === item.name && (
                                                        <div className="absolute left-0 top-full pt-2 w-56 z-50">
                                                            <div className="rounded-lg border border-border/50 bg-background/95 dark:bg-background/90 backdrop-blur-xl shadow-lg shadow-black/10 dark:shadow-black/20">
                                                                <ul className="py-2">
                                                                    {(item as any).subItems.map((subItem: any, subIndex: number) => (
                                                                        <li key={subIndex}>
                                                                            <Link
                                                                                href={subItem.href}
                                                                                className="relative text-muted-foreground hover:text-accent-foreground hover:bg-accent block px-4 py-2 text-sm duration-150 after:absolute after:bottom-0 after:left-4 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]">
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    target={(item as any).target}
                                                    className="relative text-muted-foreground hover:text-accent-foreground block duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full">
                                                    <span>{item.name}</span>
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Button - Right */}
                            <div className="hidden lg:flex shrink-0">
                                <Button
                                    asChild
                                    className="h-10 px-6 rounded-xl gap-2 font-medium">
                                    <Link href="/contact">
                                        <Phone className="size-4" />
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                            </div>

                            {/* Mobile Menu */}
                            <div className="bg-background/95 dark:bg-background/90 backdrop-blur-xl in-data-[state=active]:block mb-6 hidden w-full flex-wrap items-center justify-center space-y-8 rounded-3xl border border-border/50 p-6 shadow-2xl shadow-black/10 dark:shadow-black/20 md:flex-nowrap lg:hidden">
                                <div className="lg:hidden">
                                    <ul className="space-y-6 text-base">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                {(item as any).subItems ? (
                                                    <>
                                                        <div className="flex w-full items-center justify-between">
                                                            <Link
                                                                href={item.href}
                                                                className="relative text-muted-foreground hover:text-accent-foreground flex-1 duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full">
                                                                <span>{item.name}</span>
                                                            </Link>
                                                            <button
                                                                onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                                                                className="ml-2 p-1 text-muted-foreground hover:text-accent-foreground">
                                                                <ChevronDown className={cn('size-4 transition-transform duration-200', mobileOpenDropdown === item.name && 'rotate-180')} />
                                                            </button>
                                                        </div>
                                                        {mobileOpenDropdown === item.name && (
                                                            <ul className="mt-2 space-y-2 pl-4">
                                                                {(item as any).subItems.map((subItem: any, subIndex: number) => (
                                                                    <li key={subIndex}>
                                                                        <Link
                                                                            href={subItem.href}
                                                                            className="relative text-muted-foreground hover:text-accent-foreground block text-sm duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full">
                                                                            {subItem.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </>
                                                ) : (
                                                    <Link
                                                        href={item.href}
                                                        target={(item as any).target}
                                                        className="relative text-muted-foreground hover:text-accent-foreground block duration-150 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-foreground after:transition-all after:duration-300 hover:after:w-full">
                                                        <span>{item.name}</span>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex w-full justify-center mt-6">
                                    <Button
                                        asChild
                                        className="h-10 px-6 rounded-xl gap-2 font-medium">
                                        <Link href="/contact">
                                            <Phone className="size-4" />
                                            <span>Contact</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
