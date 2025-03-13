// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

// Get the repository name for GitHub Pages URL
const repo = 'mike-wayne-portfolio-2.0';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,
  output: 'export', // Enable static exports for GitHub Pages
  // Add basePath and assetPrefix for GitHub Pages
  basePath: isGitHubPages ? `/${repo}` : '',
  assetPrefix: isGitHubPages ? `/${repo}/` : '',
  trailingSlash: true, // Helps with static file serving
  
  // Image configuration
  images: {
    unoptimized: true, // Required for static export
    domains: ["raw.githubusercontent.com"],
    formats: ['image/webp'],
    minimumCacheTTL: 3600, // 1 hour cache
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Compiler optimizations
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  
  // Performance and other settings
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
    optimizeCss: true, // Enables CSS optimization
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: true, // Always use SWC minification for better performance
  poweredByHeader: false, // Remove X-Powered-By header
  compress: true, // Enable compression
};

module.exports = nextConfig;
