import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    return (
        <Image
            className="object-contain"
            src="/logo.svg"
            alt="Mike Wayne Logo"
            width={width}
            height={height}
            priority
        />
    );
};

export default Logo;
