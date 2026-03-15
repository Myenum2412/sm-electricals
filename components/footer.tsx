import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Mail } from 'lucide-react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/panels', label: 'Panels' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About us' },
    { href: '/contact', label: 'Contact' },
]

const legalLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
]

const socialLinks = [
    { href: '#', label: 'WhatsApp' },
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Facebook' },
    { href: '#', label: 'Email' },
]

const footerLinks = [
    {
        name: 'Quick Links',
        links: quickLinks,
    },
    {
        name: 'Legal',
        links: legalLinks,
    },
]

export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="mx-auto max-w-5xl space-y-16 px-5 py-16">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
                    <Link
                        href="/"
                        aria-label="go home">
                        <Logo />
                    </Link>
                    <div className="flex gap-4">
                        <Link
                            href="#"
                            aria-label="WhatsApp"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <WhatsAppIcon sx={{ fontSize: 24 }} />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="size-6" />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="size-6" />
                        </Link>
                        <Link
                            href="#"
                            aria-label="Email"
                            className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="size-6" />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="font-medium">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-primary text-muted-foreground hover-underline text-sm duration-150 inline-block">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <span className="text-sm font-medium">Connect</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-primary text-muted-foreground text-sm duration-150">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="bg-muted mt-16 flex items-center justify-between rounded-md p-4 px-6 py-3">
                    <span>&copy; SM Electrical 2026</span>
                    <span>All rights reserved by SM Electrical</span>
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-primary text-sm">
                            Licence
                        </Link>
                        <AnimatedThemeToggler className="h-8 w-8 rounded-lg border bg-background hover:bg-accent flex items-center justify-center shrink-0" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
