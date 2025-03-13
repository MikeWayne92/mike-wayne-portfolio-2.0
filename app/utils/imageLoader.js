/**
 * Custom image loader for Next.js
 * Handles GitHub Pages paths correctly
 */
module.exports = function imageLoader({ src, width, quality }) {
  const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
  const repo = 'mike-wayne-portfolio-2.0';
  const baseUrl = isGitHubPages ? `/${repo}` : '';
  
  // If the src already starts with http or data, return it as is
  if (src.startsWith('http') || src.startsWith('data:')) {
    return src;
  }
  
  // Build the correct path with the base URL
  return `${baseUrl}${src}`;
}; 