'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import {
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  ArrowDownLeft,
  MessageCircle,
} from 'lucide-react';

const data = () => ({
  navigation: {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Contact', href: '/contact' },
    ],
    industries: [
      { name: 'Textile Mills', href: '/projects' },
      { name: 'Steel Industries', href: '/projects' },
      { name: 'Food Processing', href: '/projects' },
      { name: 'Automotive', href: '/projects' },
      { name: 'Healthcare', href: '/projects' },
    ],
    resources: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  },
  socialLinks: [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: MessageCircle, label: 'WhatsApp', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ],
  bottomLinks: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ],
});

export default function FooterMain() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentYear = new Date().getFullYear();

  if (!mounted) return null;

  return (
    <footer className="mt-20 w-full overflow-hidden">
      <div className="animate-energy-flow via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-30" />
      <div className="relative w-full px-5">
        {/* Top Section */}
        <div className="container m-auto grid grid-cols-1 gap-12 py-12 items-center text-center lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-6 flex flex-col items-center lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Logo className="text-2xl" />
            </Link>
            <p className="text-muted-foreground max-w-md">
              SM ELECTRICAL is a leading manufacturer of high-quality electrical panels and power distribution solutions for industrial and commercial sectors.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {data().socialLinks.map(({ icon: Icon, label, href }) => (
                  <Button
                    key={label}
                    size="icon"
                    variant="outline"
                    asChild
                    className="hover:bg-primary dark:hover:bg-primary !border-primary/30 !hover:border-primary cursor-pointer shadow-none transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:text-white hover:shadow-md"
                  >
                    <Link href={href}>
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hover:bg-primary dark:hover:bg-primary !border-primary/30 !hover:border-primary cursor-pointer shadow-none transition-all duration-1000 hover:scale-110 hover:-rotate-12 hover:text-white hover:shadow-md"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <h1 className="from-muted-foreground/15 bg-gradient-to-b bg-clip-text text-5xl font-extrabold text-transparent lg:text-7xl">
              SM ELECTRICAL
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-start justify-center gap-8 px-5 lg:col-span-3 text-center">
            {(['company', 'industries', 'resources'] as const).map(
              (section) => (
                <div key={section} className="w-full flex flex-col items-center">
                  <h3 className="border-primary mb-4 border-l-2 pl-5 text-sm font-semibold tracking-wider uppercase">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <ul className="space-y-3">
                    {data().navigation[section].map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group text-muted-foreground hover:text-foreground decoration-primary inline-flex items-center gap-2 underline-offset-8 transition-all duration-500 hover:underline"
                        >
                          <ArrowDownLeft className="text-primary rotate-[225deg] opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 sm:group-hover:rotate-[225deg] md:rotate-0" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="animate-rotate-3d via-primary h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="text-muted-foreground container m-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-4 text-xs md:px-0 md:text-sm">
          <p>
            &copy; {currentYear} SM ELECTRICAL | All rights reserved
          </p>
          <span className="hidden sm:inline opacity-30">|</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {data().bottomLinks.map(({ href, label }) => (
              <Link key={label} href={href} className="hover:text-foreground">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <span className="from-primary/20 absolute inset-x-0 bottom-0 left-0 -z-10 h-1/3 w-full bg-gradient-to-t" />
      </div>

      {/* Animations */}
      <style jsx>{`
        /* ===== Animation Presets ===== */
        .animate-rotate-3d {
          animation: rotate3d 8s linear infinite;
        }

        .animate-energy-flow {
          animation: energy-flow 4s linear infinite;
          background-size: 200% 100%;
        }

        /* ===== Keyframes ===== */
        @keyframes rotate3d {
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes energy-flow {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </footer>
  );
}
