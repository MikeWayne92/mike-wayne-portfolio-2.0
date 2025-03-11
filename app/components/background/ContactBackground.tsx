"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision.tsx";

const ContactBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-visible">
            <BackgroundBeamsWithCollision className="h-full bg-[#0E1016] dark:from-[#0E1016] dark:to-[#0E1016]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-bg-dark to-transparent"/>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-bg-dark to-transparent"/>
            </BackgroundBeamsWithCollision>
        </div>
    );
};

export default ContactBackground;
