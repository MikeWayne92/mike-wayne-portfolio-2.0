import React from 'react';
import Image from 'next/image';

interface ResponsiveProjectImageProps {
    image: string;
    webpImage: string;
    imageSm: string;
    webpImageSm: string;
    imageMd: string;
    webpImageMd: string;
    imageLg: string;
    webpImageLg: string;
    imageXl: string;
    webpImageXl: string;
    alt: string;
    className?: string;
}

const ResponsiveProjectImage: React.FC<ResponsiveProjectImageProps> = ({
    image,
    webpImage,
    imageSm,
    webpImageSm,
    imageMd,
    webpImageMd,
    imageLg,
    webpImageLg,
    imageXl,
    webpImageXl,
    alt,
    className = ''
}) => {
    return (
        <div className={`relative ${className}`}>
            <picture>
                {/* Small screens WebP */}
                <source
                    media="(max-width: 640px)"
                    srcSet={webpImageSm}
                    type="image/webp"
                />
                {/* Medium screens WebP */}
                <source
                    media="(max-width: 768px)"
                    srcSet={webpImageMd}
                    type="image/webp"
                />
                {/* Large screens WebP */}
                <source
                    media="(max-width: 1024px)"
                    srcSet={webpImageLg}
                    type="image/webp"
                />
                {/* XL screens WebP */}
                <source
                    media="(min-width: 1025px)"
                    srcSet={webpImageXl}
                    type="image/webp"
                />
                {/* Default WebP */}
                <source
                    srcSet={webpImage}
                    type="image/webp"
                />
                {/* Small screens PNG fallback */}
                <source
                    media="(max-width: 640px)"
                    srcSet={imageSm}
                />
                {/* Medium screens PNG fallback */}
                <source
                    media="(max-width: 768px)"
                    srcSet={imageMd}
                />
                {/* Large screens PNG fallback */}
                <source
                    media="(max-width: 1024px)"
                    srcSet={imageLg}
                />
                {/* XL screens PNG fallback */}
                <source
                    media="(min-width: 1025px)"
                    srcSet={imageXl}
                />
                {/* Default PNG fallback image */}
                <Image
                    src={image}
                    alt={alt}
                    width={500}
                    height={500}
                    style={{ 
                        objectFit: 'contain',
                        width: '100%',
                        height: 'auto',
                        maxWidth: '100%'
                    }}
                    loading="eager"
                    priority={true}
                />
            </picture>
        </div>
    );
};

export default ResponsiveProjectImage; 