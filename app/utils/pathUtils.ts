/**
 * Utility function to resolve paths for assets like PDFs or images
 * This helps handle both local development and GitHub Pages deployment
 */
export const resolvePublicPath = (path: string): string => {
    // Check if we're in a GitHub Pages environment (using the repository name in URL)
    const isGitHubPages = typeof window !== 'undefined' && 
        window.location.pathname.includes('/mike-wayne-portfolio-2.0/');
    
    // If on GitHub Pages, prepend the repository name to the path
    return isGitHubPages ? `/mike-wayne-portfolio-2.0${path}` : path;
}; 