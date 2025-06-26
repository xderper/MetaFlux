import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  openGraph: {
    title: "MetaFlux — Digital-агентство будущего",
    description: "Создаём революционные цифровые продукты, которые трансформируют ваш бизнес. Дизайн, разработка, брендинг и маркетинг — всё для вашего успеха.",
    url: 'https://metaflux.ru',
    siteName: 'MetaFlux',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MetaFlux — Digital-агентство будущего",
    description: "Создаём революционные цифровые продукты, которые трансформируют ваш бизнес.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
