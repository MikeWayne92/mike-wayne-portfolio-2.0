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
                    text={"About Me"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="flex w-[100%] flex-col gap-6 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:gap-8 md:text-[20px] md:leading-relaxed lg:gap-10 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody 
                            text="I'm Michael Collins or MikeWayne, I'm a Data Operations Analyst with 3+ years of experience turning raw data into clear, actionable insights that fuel smarter decisions for both people and AI systems." 
                            className="opacity-90"
                        />

                        <AnimatedBody
                            delay={0.1}
                            text="By day, I support Trust & Safety initiatives at Google (via GlobalLogic), where I lead annotation and evaluation efforts to improve large-scale AI models. My work has helped reduce QA errors by 20%, streamline workflows with new SOPs, and deliver critical datasets under high-pressure deadlines."
                            className="opacity-80"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="By night (and weekends), I dive into personal projects that combine curiosity, code, and storytelling from sales trend dashboards to 3D population density maps. These projects keep me learning, building, and exploring new ways to visualize the world through data."
                            className="opacity-80"
                        />

                        <AnimatedBody
                            delay={0.3}
                            text="What I'm Good At:"
                            className="opacity-90 font-bold"
                        />

                        <AnimatedBody
                            delay={0.4}
                            text="Languages & Tools: Python, SQL, R, Tableau, Power BI, Git"
                            className="opacity-80 ml-4"
                        />

                        <AnimatedBody
                            delay={0.5}
                            text="Strengths: ETL workflows, QA processes, predictive modeling, dashboard design"
                            className="opacity-80 ml-4"
                        />

                        <AnimatedBody
                            delay={0.6}
                            text="Superpowers: Curiosity-fueled, systems thinker, highly adaptable and always pushing to get 1% better; Daily."
                            className="opacity-80 ml-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
