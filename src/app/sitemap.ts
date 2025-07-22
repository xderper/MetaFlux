import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metaflux.ru'
  const currentDate = new Date()
  
  // Основные страницы сайта
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Услуги (для будущих отдельных страниц услуг)
  const services = [
    'web-development',
    'ui-ux-design', 
    'mobile-apps',
    'branding',
    'digital-marketing',
    'consulting'
  ]

  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Проекты портфолио (для будущих отдельных страниц проектов)
  const projects = [
    'todo',
    'cosma',
    'hybrid-chess'
  ]

  const projectRoutes = projects.map(project => ({
    url: `${baseUrl}/portfolio/${project}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...routes,
    ...serviceRoutes,
    ...projectRoutes,
  ]
} 