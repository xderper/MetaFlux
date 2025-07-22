import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const baseURL = 'https://metaflux.ru';

export const metadata: Metadata = {
  title: {
    default: "MetaFlux — Премиум Digital-агентство | Веб-разработка, UX/UI дизайн, мобильные приложения",
    template: "%s | MetaFlux — Digital-агентство премиум класса"
  },
  description: "MetaFlux — ведущее digital-агентство полного цикла в России. Создаём революционные веб-сайты, мобильные приложения, уникальный UX/UI дизайн и эффективные маркетинговые решения. ⚡ Быстро ⚡ Качественно ⚡ Современно",
  keywords: [
    // Основные ключевые слова
    "digital агентство", "веб-разработка", "UX/UI дизайн", "мобильные приложения", "брендинг",
    // Технологии
    "React", "Next.js", "TypeScript", "Node.js", "фронтенд разработка", "бэкенд разработка",
    // Услуги
    "создание сайтов", "разработка приложений", "дизайн интерфейсов", "digital маркетинг",
    "лендинг пейдж", "интернет-магазин", "корпоративный сайт", "MVP разработка",
    // Геолокация
    "веб-студия Россия", "разработка сайтов Москва", "IT агентство",
    // Качества
    "премиум разработка", "индивидуальный дизайн", "современные технологии",
    "быстрая разработка", "качественный код", "адаптивная верстка",
    // Дополнительные
    "портфолио веб-разработки", "заказать сайт", "стоимость разработки",
    "техническая поддержка", "SEO оптимизация", "производительность сайта"
  ].join(", "),
  authors: [
    { name: "MetaFlux Team", url: baseURL },
    { name: "Alexander Ivanov", url: `${baseURL}/about` },
    { name: "Maria Petrova", url: `${baseURL}/about` }
  ],
  creator: "MetaFlux Digital Agency",
  publisher: "MetaFlux",
  category: "Technology",
  classification: "Digital Agency, Web Development, UX/UI Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/',
      'en': '/en',
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/icon.png', sizes: '152x152', type: 'image/png' },
      { url: '/icon.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon.png', sizes: '120x120', type: 'image/png' },
      { url: '/icon.png', sizes: '114x114', type: 'image/png' },
      { url: '/icon.png', sizes: '76x76', type: 'image/png' },
      { url: '/icon.png', sizes: '72x72', type: 'image/png' },
      { url: '/icon.png', sizes: '60x60', type: 'image/png' },
      { url: '/icon.png', sizes: '57x57', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon.png' },
      { rel: 'mask-icon', url: '/icon.png', color: '#8b5cf6' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: baseURL,
    siteName: 'MetaFlux — Digital-агентство премиум класса',
    title: "MetaFlux — Премиум Digital-агентство | Революционные цифровые решения",
    description: "Создаём выдающиеся цифровые продукты, которые трансформируют бизнес. Веб-разработка, UX/UI дизайн, мобильные приложения, брендинг — всё для вашего успеха. 150+ успешных проектов, 98% довольных клиентов.",
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'MetaFlux — Премиум Digital-агентство',
        type: 'image/png',
      },
      {
        url: '/icon.png', 
        width: 800,
        height: 600,
        alt: 'MetaFlux — Веб-разработка и дизайн',
        type: 'image/png',
      },
    ],
    videos: [],
    audio: [],
    countryName: 'Russia',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@metaflux',
    creator: '@metaflux',
    title: "MetaFlux — Премиум Digital-агентство",
    description: "Создаём революционные цифровые продукты. Веб-разработка, дизайн, мобильные приложения. 150+ проектов, 98% довольных клиентов.",
    images: {
      url: '/icon.png',
      alt: 'MetaFlux — Digital-агентство',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    // Progressive Web App
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'MetaFlux',
    'application-name': 'MetaFlux',
    'msapplication-TileColor': '#8b5cf6',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#8b5cf6',
    
    // Additional SEO
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
    'language': 'ru',
    'geo.region': 'RU',
    'geo.country': 'Russia',
    'geo.placename': 'Moscow',
    'geo.position': '55.7558;37.6176',
    'ICBM': '55.7558, 37.6176',
    
    // Social Media
    'fb:app_id': 'your-facebook-app-id',
    'vk:image': '/icon.png',
    
    // Business Information
    'contact': 'info@metaflux.ru',
    'copyright': '© 2024 MetaFlux. Все права защищены.',
    'designer': 'MetaFlux Team',
    'owner': 'MetaFlux',
    'reply-to': 'info@metaflux.ru',
    'url': baseURL,
    
    // Technical
    'format-detection': 'telephone=no',
    'HandheldFriendly': 'true',
    'MobileOptimized': '320',
    
    // Security
    'referrer': 'origin-when-cross-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
    'Cross-Origin-Opener-Policy': 'same-origin',
  },
};

// Структурированные данные для организации
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MetaFlux',
  alternateName: 'MetaFlux Digital Agency',
  url: baseURL,
  logo: `${baseURL}/icon.png`,
  image: `${baseURL}/icon.png`,
  description: 'Премиум digital-агентство полного цикла. Создаём революционные веб-сайты, мобильные приложения, уникальный дизайн и эффективные маркетинговые решения.',
  email: 'info@metaflux.ru',
  foundingDate: '2019',
  numberOfEmployees: '10-50',
  slogan: 'Elevating Business and Framing Experience',
  keywords: 'веб-разработка, UX/UI дизайн, мобильные приложения, брендинг, digital маркетинг',
  serviceArea: {
    '@type': 'Country',
    name: 'Russia'
  },
  areaServed: ['Russia', 'Europe', 'Global'],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RU',
    addressLocality: 'Moscow',
    addressRegion: 'Moscow'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['Russian', 'English'],
    email: 'info@metaflux.ru'
  },
  sameAs: [
    'https://t.me/metaflux',
    'https://vk.com/metaflux',
    'https://github.com/metaflux'
  ],
  offers: {
    '@type': 'AggregateOffer',
    offerCount: '6',
    lowPrice: '10000',
    highPrice: '200000',
    priceCurrency: 'RUB'
  }
};

// Структурированные данные для веб-сайта
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MetaFlux',
  url: baseURL,
  description: 'Премиум digital-агентство. Веб-разработка, UX/UI дизайн, мобильные приложения.',
  inLanguage: 'ru',
  copyrightYear: 2024,
  copyrightHolder: {
    '@type': 'Organization',
    name: 'MetaFlux'
  },
  creator: {
    '@type': 'Organization',
    name: 'MetaFlux'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${baseURL}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://api.metaflux.ru" />
        
        {/* Иконки и манифест */}
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* PWA мета-теги */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MetaFlux" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="MetaFlux" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Дополнительные SEO мета-теги */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="language" content="ru" />
        
        {/* Географические мета-теги */}
        <meta name="geo.region" content="RU" />
        <meta name="geo.country" content="Russia" />
        <meta name="geo.placename" content="Moscow" />
        
        {/* Структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        
        {/* Preload критических ресурсов */}
        <link rel="preload" href="/icon.png" as="image" type="image/png" />
        
        {/* Критические CSS для улучшения CLS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html { scroll-behavior: smooth; }
            * { box-sizing: border-box; }
            body { margin: 0; padding: 0; overflow-x: hidden; }
            .loading-skeleton { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: loading 1.5s infinite; }
            @keyframes loading { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased safe-area-inset-top`}
      >
        <Header />
        <Breadcrumbs />
        <main className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Analytics и трекинг (добавьте ваши коды) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_TRACKING_ID', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `
            }} />
            
            {/* Yandex Metrica */}
            <script dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(YANDEX_COUNTER_ID, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `
            }} />
          </>
        )}
      </body>
    </html>
  );
}
