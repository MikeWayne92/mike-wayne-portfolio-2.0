import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Michael Wayne Collins Jr."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody text="As a passionate analyst and developer, I bring a wealth of experience in front-end and full-stack development, with expertise in JavaScript, React.js, Next.js, and modern HTML & CSS. My commitment to innovation drives me to continuously learn and experiment with new technologies, ensuring that I deliver unique and cutting-edge solutions." />

                        <AnimatedBody
                            delay={0.1}
                            text="Complementing my development skills, I have over two years of experience as an AI Data Operations Analyst, where I've supported AI/ML initiatives through data workflow optimization, quality assurance, and cross-functional collaboration. Proficient in SQL, Python, root cause analysis, and automation, I've improved data accuracy by 25% and operational efficiency by 30%."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="This dual proficiency enables me to approach projects with a holistic view, combining creative problem-solving with data-driven decision-making. I'm currently working on exciting projects that utilize both aspects of my expertise and am always open to new opportunities and collaborations."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
