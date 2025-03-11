"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeams.tsx";

const HeroBackground: React.FC = () => {
    return (
        <div className="absolute inset-0">
            <BackgroundBeams className="opacity-80" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
        </div>
    );
};

export default HeroBackground;
