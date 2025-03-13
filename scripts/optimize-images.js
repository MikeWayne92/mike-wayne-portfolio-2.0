const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../public/projects');
const destDir = path.join(__dirname, '../public/projects/optimized');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Define sizes for responsive images
const sizes = [
  { width: 640, suffix: '-sm' },  // Small screens
  { width: 828, suffix: '-md' },  // Medium screens
  { width: 1200, suffix: '-lg' }, // Large screens
  { width: 1920, suffix: '-xl' }  // Extra large screens
];

// Process each PNG image in the source directory
fs.readdirSync(sourceDir)
  .filter(file => file.endsWith('.png') && !file.includes('-sm') && !file.includes('-md') && !file.includes('-lg') && !file.includes('-xl'))
  .forEach(file => {
    const sourceFile = path.join(sourceDir, file);
    const baseName = path.basename(file, '.png');

    console.log(`Processing ${file}...`);

    // Create WebP versions in different sizes
    sizes.forEach(({ width, suffix }) => {
      const webpDestFile = path.join(destDir, `${baseName}${suffix}.webp`);
      const pngDestFile = path.join(destDir, `${baseName}${suffix}.png`);

      // Create WebP version
      sharp(sourceFile)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpDestFile)
        .then(() => console.log(`Created ${webpDestFile}`))
        .catch(err => console.error(`Error creating ${webpDestFile}:`, err));

      // Create optimized PNG version for fallback
      sharp(sourceFile)
        .resize({ width, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true, palette: true })
        .toFile(pngDestFile)
        .then(() => console.log(`Created ${pngDestFile}`))
        .catch(err => console.error(`Error creating ${pngDestFile}:`, err));
    });

    // Create standard WebP version at original size
    const originalWebpFile = path.join(destDir, `${baseName}.webp`);
    sharp(sourceFile)
      .webp({ quality: 85 })
      .toFile(originalWebpFile)
      .then(() => console.log(`Created ${originalWebpFile}`))
      .catch(err => console.error(`Error creating ${originalWebpFile}:`, err));
  });

console.log('Image optimization complete!'); 