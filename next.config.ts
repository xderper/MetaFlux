import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimization
  output: 'standalone',
  
  // Compression and performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'metaflux.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
    largePageDataBytes: 128 * 1000, // 128KB
    // Disable optimized CSS loading (requires critters dependency)
    optimizeCss: false,
    // Enable partial prerendering for better mobile performance
    ppr: false, // Disable for now as it's experimental
  },

  // Turbopack configuration (moved from experimental.turbo)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // Cache control
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate'
          },
        ],
      },
      // Static assets caching
      {
        source: '/icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
             {
         source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2)',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable'
           },
         ],
       },
      // API routes
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0'
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // www to non-www redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.metaflux.ru',
          },
        ],
        destination: 'https://metaflux.ru/:path*',
        permanent: true,
      },
      // Legacy redirects (add your old URLs here)
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },

  // Webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        // Split chunks for better mobile loading
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: 'all',
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // Separate vendor chunks for better caching
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              maxSize: 100000, // 100KB max for mobile
            },
            // Separate framer-motion for conditional loading
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 20,
            },
            // Common chunks
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              maxSize: 50000, // 50KB max for common chunks
            },
          },
        },
      };
    }

    // Optimize for mobile performance
    config.resolve.alias = {
      ...config.resolve.alias,
      // Keep standard react-dom to avoid profiling issues
    };

    // Bundle analyzer (uncomment to analyze bundle)
    // if (!dev && !isServer) {
    //   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
    //   config.plugins.push(
    //     new BundleAnalyzerPlugin({
    //       analyzerMode: 'static',
    //       openAnalyzer: false,
    //     })
    //   );
    // }

    return config;
  },

  // Environment variables for build optimization
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },

  // Typescript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Trailing slash configuration for SEO
  trailingSlash: false,

  // Skip trailing slash redirect for performance
  skipTrailingSlashRedirect: true,

  // Generate ETag for caching
  generateEtags: true,

  // Asset prefix for CDN (uncomment if using CDN)
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.metaflux.ru' : '',
};

export default nextConfig;
