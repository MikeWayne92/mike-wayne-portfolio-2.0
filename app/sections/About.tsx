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
                            text="I'm Michael Collins or MikeWayne, I'm a Data Operations Analyst with 3+ years of experience specializing in operations management, business analysis, AI implementation, and data-driven operations. Focused on turning complex data into clear, strategic insights that drive smarter decision-making." 
                            className="opacity-90"
                        />

                        <AnimatedBody
                            delay={0.1}
                            text="Proficient in SQL, Python, and Power BI, with a strong ability to transform raw datasets into actionable insights. Experienced in building data workflows, dashboards, and reporting systems that support operational visibility and performance tracking."
                            className="opacity-80"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Proven track record of improving operational efficiency by optimizing workflows, enhancing data processing, and reducing error rates. Skilled in implementing rigorous validation processes and developing SOPs to ensure accuracy, consistency, and scalability."
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

                        <AnimatedBody
                            delay={0.7}
                            text="Certifications"
                            className="opacity-90 font-bold mt-4"
                        />

                        <div className="flex flex-wrap gap-6 ml-4 mt-4">
                            <a
                                href="https://www.credly.com/badges/6ed5df84-aa41-4185-a1fe-797b00f78420/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                title="Google Data Analytics Professional Certificate"
                            >
                                <img
                                    src="/certifications/google-data-analytics-badge.png"
                                    alt="Google Data Analytics Professional Certificate"
                                    className="w-32 h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                            <a
                                href="https://www.credly.com/badges/e432a10d-c3d5-45dd-b92c-6ff762729bf6/public_url"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                                title="Google AI Professional Certificate"
                            >
                                <img
                                    src="/certifications/google-ai-badge.png"
                                    alt="Google AI Professional Certificate"
                                    className="w-32 h-auto rounded-lg opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
