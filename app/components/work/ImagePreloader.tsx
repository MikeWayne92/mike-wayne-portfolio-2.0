import React, { useEffect } from 'react';
import { projects } from './projectDetails';

const ImagePreloader: React.FC = () => {
    useEffect(() => {
        // Preload all project images
        const preloadImage = (src: string) => {
            const img = new Image();
            img.src = src;
        };

        // Preload small images first for mobile
        projects.forEach(project => {
            // Prioritize WebP small images for mobile
            preloadImage(project.webpImageSm);
            preloadImage(project.imageSm);
        });

        // Then preload larger images
        const preloadLargerImages = setTimeout(() => {
            projects.forEach(project => {
                preloadImage(project.webpImage);
                preloadImage(project.webpImageMd);
                preloadImage(project.webpImageLg);
                preloadImage(project.image);
            });
        }, 1000);

        return () => {
            clearTimeout(preloadLargerImages);
        };
    }, []);

    return null; // This component doesn't render anything
};

export default ImagePreloader; 