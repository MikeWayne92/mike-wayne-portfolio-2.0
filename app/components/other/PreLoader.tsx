"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { GooeyText } from "./GooeyText";

const PreLoader: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        // Preloader Animation
        const preLoaderAnim = () => {
            tl.to(".preloader-content", {
                duration: 0,
                opacity: 1,
                ease: "Power3.easeOut",
            })
                .to("body", {
                    duration: 0.01,
                    css: { overflowY: "scroll" },
                    ease: "power3.inOut",
                })
                .to(
                    ".preloader",
                    {
                        duration: 1.2,
                        opacity: 0,
                        ease: "Power3.easeOut",
                        onComplete: mobileLanding,
                    },
                    "+=4"
                )
                .to(".preloader", {
                    duration: 0,
                    css: { display: "none" },
                });
        };

        const mobileLanding = () => {
            if (window.innerWidth < 763) {
                tl.from(".landing__main2", {
                    duration: 1,
                    delay: 0,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                });
            }
        };

        preLoaderAnim();
    }, []);

    return (
        <div
            className="preloader overflow-hidden text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#000000",
                color: "#e5ebf2",
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 55,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden !important",
            }}
        >
            <div 
                className="preloader-content flex flex-col items-center justify-center gap-6 opacity-0"
            >
                <GooeyText 
                    texts={[
                        "",
                        "MIKE\nWAYNE",
                        "PRODUCTIONS",
                        "ANALYST &\nAI DEVELOPER",
                        "PORTFOLIO",
                        ""
                    ]}
                    morphTime={0.8}
                    cooldownTime={1.2}
                    className="h-36 w-full"
                    textClassName="font-bold tracking-wide text-white"
                />
            </div>
        </div>
    );
};

export default PreLoader;
