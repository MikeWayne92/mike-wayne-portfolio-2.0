import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-32 md:pt-20 md:pb-36 lg:pt-20 lg:pb-48"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"About Mike Wayne"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="flex w-[100%] flex-col gap-6 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:gap-8 md:text-[20px] md:leading-relaxed lg:gap-10 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody 
                            text="I'm Mike Wayne, a data-driven developer passionate about transforming complex datasets into intuitive, interactive experiences." 
                            className="opacity-90"
                        />

                        <AnimatedBody
                            delay={0.1}
                            text="Currently working as an AI Data Ops Analyst, with a strong foundation in SQL, Python, JavaScript, and HTML, I specialize in building engaging dashboards, educational tools, and data visualizations that make information accessible and impactful."
                            className="opacity-80"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="I believe in continuous improvement; 1% better every day, and I'm always eager to learn, collaborate, and create solutions that bridge data and design."
                            className="opacity-90"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
