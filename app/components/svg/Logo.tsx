import React from "react";
import Image from "next/image";

// Helper function for image paths with GitHub Pages support
const useImagePath = (imagePath: string) => {
    const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true';
    const repoName = 'mike-wayne-portfolio-2.0';
    
    if (isGitHubPages) {
        return `/${repoName}${imagePath}`;
    }
    
    return imagePath;
};

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    const logoPath = useImagePath('/logo.svg');
    
    return (
        <Image
            className="object-contain"
            src={logoPath}
            alt="Mike Wayne Logo"
            width={width}
            height={height}
            priority
        />
    );
};

export default Logo;
