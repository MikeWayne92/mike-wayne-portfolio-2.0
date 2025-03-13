// This script will be used in the head section to preload critical images

// Define image paths to preload
export const criticalImages = [
  '/projects/optimized/spotifydash-sm.webp',
  '/projects/optimized/sqlbeats-sm.webp',
  '/projects/optimized/spotifydash-sm.png',
  '/projects/optimized/sqlbeats-sm.png'
];

// Function to preload images (can be called from useEffect)
export const preloadCriticalImages = () => {
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
};

export default criticalImages; 