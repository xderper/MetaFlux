import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MetaFlux — Digital-агентство будущего | Веб-разработка, UX/UI дизайн, брендинг",
  description: "MetaFlux — инновационное digital-агентство полного цикла. Создаём революционные веб-сайты, мобильные приложения, уникальный дизайн и эффективные маркетинговые решения для вашего бизнеса.",
  keywords: "digital агенство, веб-разработка, UX/UI дизайн, мобильные приложения, брендинг, digital маркетинг, Next.js, React",
  authors: [{ name: "MetaFlux Team" }],
  creator: "MetaFlux",
  publisher: "MetaFlux",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://metaflux.ru'),
  alternates: {
    canonical: '/',
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
    ],
    shortcut: '/icon.png',
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/icon.png',
      },
    ],
  },
  openGraph: {
    title: "MetaFlux — Digital-агентство будущего",
    description: "Создаём революционные цифровые продукты, которые трансформируют ваш бизнес. Дизайн, разработка, брендинг и маркетинг — всё для вашего успеха.",
    url: 'https://metaflux.ru',
    siteName: 'MetaFlux',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'MetaFlux — Digital-агентство будущего',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "MetaFlux — Digital-агентство будущего",
    description: "Создаём революционные цифровые продукты, которые трансформируют ваш бизнес.",
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'MetaFlux',
    'application-name': 'MetaFlux',
    'msapplication-TileColor': '#8b5cf6',
    'theme-color': '#8b5cf6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MetaFlux" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="MetaFlux" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased safe-area-inset-top`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
