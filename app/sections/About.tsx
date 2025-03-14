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
                        <AnimatedBody text="With 2+ years as an AI Data Operations Analyst, I specialize in optimizing data workflows, ensuring quality for AI/ML initiatives, and driving cross-functional collaboration. Proficient in SQL, Python, root-cause analysis, and workflow automations, I bridge technical execution with strategic insights to empower data-centric decision-making." />

                        <AnimatedBody
                            delay={0.1}
                            text="Building on this foundation, I bring robust expertise in front-end and full-stack development, leveraging JavaScript, React.js, Next.js, and modern HTML/CSS to craft dynamic, user-centric solutions. My passion for innovation fuels continuous learning, enabling me to integrate emerging technologies into scalable applications."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="This hybrid skill set—analytical rigor paired with creative development—allows me to tackle projects holistically, balancing technical precision with strategic vision. Currently, I'm building projects that fuse AI-driven insights with elegant interfaces, and I'm eager to collaborate on challenges that demand both data fluency and design excellence."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
