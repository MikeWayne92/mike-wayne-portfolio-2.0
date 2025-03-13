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
  images: {
    unoptimized: true, // Required for static export
    domains: ["raw.githubusercontent.com"],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
};

module.exports = nextConfig;
