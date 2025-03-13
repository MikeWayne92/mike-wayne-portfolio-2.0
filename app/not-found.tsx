import React from "react";
import Link from "next/link";
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

const NotFound = () => {
    const notFoundImagePath = useImagePath('/404.gif');
    
    return (
        <div className="flex h-[100vh] flex-col items-center justify-center gap-5 bg-[#0E1016] text-[#e4ded7]">
            <Image
                src={notFoundImagePath}
                alt="Funny Meme"
                width={158}
                height={283}
                className="w-[20%] sm:w-[20%] md:w-[20%] lg:w-[20%]"
            />
            <p className="text-[25px] lowercase sm:text-[30px] md:text-[35px] lg:text-[40px]">
                Oh no! You seem to be wrong here.
            </p>
            <div>
                <Link
                    href="/"
                    className="text-[25px] lowercase sm:text-[30px] md:text-[35px] lg:text-[40px]"
                >
                    Go back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
