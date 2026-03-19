import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/mvpblocks/footer-main";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SM ELECTRICAL",
  description: "High-quality Electrical Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
          <Footer />
          <FloatingWhatsApp />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
