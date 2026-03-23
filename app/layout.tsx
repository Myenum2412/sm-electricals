import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/header";
import Footer from "@/components/mvpblocks/footer-main";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Toaster } from "@/components/ui/sonner";
import { defaultMetadata } from "@/lib/meta";
import { generateDetailedOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";

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

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateDetailedOrganizationSchema()
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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