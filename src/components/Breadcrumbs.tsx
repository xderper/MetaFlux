'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const routeMap: Record<string, string> = {
  '/': 'Главная',
  '/services': 'Услуги',
  '/portfolio': 'Портфолио',
  '/about': 'О нас',
  '/services/web-development': 'Веб-разработка',
  '/services/ui-ux-design': 'UX/UI Дизайн',
  '/services/mobile-apps': 'Мобильные приложения',
  '/services/branding': 'Брендинг',
  '/services/digital-marketing': 'Digital-маркетинг',
  '/services/consulting': 'Консультации',
  '/portfolio/todo': 'Todo',
  '/portfolio/cosma': 'Cosma',
  '/portfolio/hybrid-chess': 'Hybrid Chess',
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Не показываем на главной странице
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' }
  ];

  // Строим путь постепенно
  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;
    
    breadcrumbs.push({
      label: routeMap[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: currentPath,
      isActive: isLast
    });
  });

  // Структурированные данные для хлебных крошек
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href === '/' ? 'https://metaflux.ru' : `https://metaflux.ru${item.href}`
    }))
  };

  return (
    <>
      {/* Структурированные данные для поисковых систем */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Визуальные хлебные крошки */}
      <nav 
        aria-label="Хлебные крошки" 
        className="py-4 px-4 sm:px-6 bg-gray-50/50 border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <ol className="flex items-center space-x-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbs.map((breadcrumb, index) => (
              <li 
                key={breadcrumb.href} 
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2 flex-shrink-0" aria-hidden="true" />
                )}
                
                {breadcrumb.isActive ? (
                  <span 
                    className="text-gray-900 font-medium flex items-center"
                    aria-current="page"
                    itemProp="name"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 flex items-center hover:underline"
                    itemProp="item"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                    <span itemProp="name">{breadcrumb.label}</span>
                  </Link>
                )}
                
                <meta itemProp="position" content={(index + 1).toString()} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
} 