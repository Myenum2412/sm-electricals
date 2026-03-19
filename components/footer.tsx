import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Mail, Phone, MapPin, Send, Youtube, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'
import MaxWidthWrapper from './MaxWidthWrapper'

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Contact", href: "/contact" },
        ]
    },
    {
        title: "Products",
        links: [
            { label: "Panels", href: "/panels" },
            { label: "Power Distribution", href: "/panels" },
            { label: "Industrial Control", href: "/panels" },
            { label: "Custom Solutions", href: "/panels" },
        ]
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ]
    }
]

const contactInfo = [
    { icon: Phone, text: "+91 98400 00000", href: "tel:+919840000000" },
    { icon: Mail, text: "info@sm-electrical.in", href: "mailto:info@sm-electrical.in" },
    { icon: MapPin, text: "Plot No. 12, Industrial Area, Chennai - 600001", href: "#" },
]

const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
    return (
        <footer className="bg-background border-t mt-20">
            <MaxWidthWrapper>
                <div className="py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <Link href="/" className="inline-block">
                                <Logo />
                            </Link>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                                SM ELECTRICAL is a leading manufacturer of high-quality electrical panels and power distribution solutions for industrial and commercial sectors.
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.label}
                                        href={social.href}
                                        className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="size-5 transition-transform group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Links Sections */}
                        {footerLinks.map((section) => (
                            <div key={section.title} className="space-y-6">
                                <h4 className="font-semibold text-lg">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Contact & Newsletter */}
                        <div className="space-y-6">
                            <h4 className="font-semibold text-lg">Contact Us</h4>
                            <ul className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                                        >
                                            <item.icon className="size-5 shrink-0" />
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                            <span>&copy; {new Date().getFullYear()} SM ELECTRICAL. All rights reserved.</span>
                            <span className="hidden md:inline text-muted-foreground/50">|</span>
                            <span>Built for Excellence.</span>
                        </div>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-4">
                                <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                                <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                            </div>
                            <AnimatedThemeToggler className="size-9" />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}
