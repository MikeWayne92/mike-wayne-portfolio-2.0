import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiGithub,
    SiJavascript, 
    SiReact, 
    SiTypescript,
    SiMysql,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiPython,
    SiPandas
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools";

type ToolSvgIconProps = {
    size?: number;
};

// Simple, inline SVG icons so we can animate them via the existing `AnimatedTools`.
// They intentionally accept a `size` prop (injected by `AnimatedTools`).
const ChatGPTIcon = ({ size = 50 }: ToolSvgIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M128 48c-52.8 0-96 34.4-96 76.8 0 25.4 15.5 48 39.6 62.7-1.7 8.2-6.7 26.4-15.1 34.8-2.2 2.2-.6 5.9 2.5 6.2 9.8.9 29.6-2.5 44.2-9.3 8.5 2.3 17.5 3.6 26.8 3.6 52.8 0 96-34.4 96-76.8S180.8 48 128 48Z"
            fill="#E4DED7"
            opacity="0.92"
        />
        <path
            d="M93.5 128.2c0-6.6 5.4-12 12-12h49c6.6 0 12 5.4 12 12v.6c0 6.6-5.4 12-12 12h-49c-6.6 0-12-5.4-12-12v-.6Z"
            fill="#0E1016"
            opacity="0.9"
        />
        <circle cx="108" cy="127" r="10" fill="#0E1016" opacity="0.9" />
        <circle cx="128" cy="127" r="10" fill="#0E1016" opacity="0.9" />
        <circle cx="148" cy="127" r="10" fill="#0E1016" opacity="0.9" />
        <path
            d="M168 103c-12-10.6-26.8-16-40-16s-28 5.4-40 16"
            stroke="#0E1016"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.85"
        />
    </svg>
);

const ClaudeIcon = ({ size = 50 }: ToolSvgIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M64 72c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v112c0 13.3-10.7 24-24 24H88c-13.3 0-24-10.7-24-24V72Z"
            fill="#E4DED7"
            opacity="0.92"
        />
        <path
            d="M128 86c-24 0-44 19.7-44 44 0 24.3 20 44 44 44 24 0 44-19.7 44-44 0-24.3-20-44-44-44Z"
            fill="#0E1016"
            opacity="0.85"
        />
        {/* Infinity-ish mark */}
        <path
            d="M92 130c10-16 23-24 36-24 19 0 26 14 36 14s18-8 18-16"
            stroke="#E4DED7"
            strokeWidth="12"
            strokeLinecap="round"
        />
        <path
            d="M92 126c10 16 23 24 36 24 19 0 26-14 36-14s18 8 18 16"
            stroke="#E4DED7"
            strokeWidth="12"
            strokeLinecap="round"
        />
        <circle cx="128" cy="128" r="10" fill="#E4DED7" opacity="0.9" />
    </svg>
);

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-28 md:pt-20 md:pb-36 lg:pt-20 lg:pb-44"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                   
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[75%]">
                        <AnimatedBody delay={0.2} text="Development" />
                        <div>
                            <AnimatedTools className="grid grid-cols-3 gap-4 md:grid-cols-6" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiJavascript size={50}/>
                                <SiTypescript size={50}/>
                                <SiReact size={50}/>
                                <SiMysql size={50}/>
                                <SiPython size={50}/>
                                <SiPandas size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[75%]">
                        <AnimatedBody delay={0.3} text="Tools" />
                        <div>
                            <AnimatedTools className="grid grid-cols-3 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50}/>
                                <SiAdobephotoshop size={50}/>
                                <SiAdobeillustrator size={50}/>
                                <ChatGPTIcon />
                                <ClaudeIcon />
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
