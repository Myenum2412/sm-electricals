import type { MetadataRoute } from 'next'
import { panelSolutions as products } from '@/lib/data'
import { PanelProduct } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smelectricals.tech'
  
  // Base routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/contact/office',
    '/contact/factories',
    '/faq',
    '/blog',
    '/products',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product routes
  const productRoutes = products.map((product: PanelProduct) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...productRoutes]
}
