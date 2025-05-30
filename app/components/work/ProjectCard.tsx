import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import {SiGithub} from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";

// Function to resolve image paths correctly regardless of environment
const getImagePath = (path: string) => {
    // For GitHub Pages deployment
    if (process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true') {
        const repo = 'mike-wayne-portfolio-2.0';
        return `/${repo}${path}`;
    }
    // For local/development
    return path;
};

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    return (
        <motion.div
            className={`relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
            initial="initial"
            animate="animate"
        >
            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain={true}
                top="0px"
                left="0px"
                angle={0}
            >
                <img
                    src={getImagePath(image)}
                    alt={name}
                    className={`absolute -bottom-2 object-contain w-[65%] sm:w-[70%] md:w-[60%] lg:max-w-[55%] ${
                        id % 2 === 0 ? "right-0" : "left-0"
                    }`}
                />
                <div
                    className={`absolute top-0 text-[#0E1016] ${
                        id % 2 === 0 ? "left-0 ml-8 lg:ml-14" : "right-0 mr-8 lg:mr-14"
                    } mt-6 flex items-center justify-center gap-4 lg:mt-10`}
                >
                    {available ? (
                        <>
                            <Link
                                href={github}
                                target="_blank"
                                aria-label="Open GitHub Repository"
                                className="rounded-full w-[43px] bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <SiGithub/>
                            </Link>
                            <Link
                                href={demo}
                                target="_blank"
                                aria-label="Open Live Demo"
                                className=" w-[43px] rounded-full bg-white p-3 md:p-5 text-[20px] md:w-[65px] md:text-[24px] lg:w-[65px] lg:text-[28px]"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false">
                                <BsLink45Deg/>
                            </Link>
                        </>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div
                    className={`absolute text-white ${
                        !(id % 2 === 0)
                            ? "right-0 top-16 px-4 sm:top-20 sm:px-6 md:right-0 md:px-8 lg:right-0 lg:top-40 lg:mr-4"
                            : "left-0 top-16 px-4 sm:top-20 sm:px-6 md:left-0 md:px-8 lg:top-36 lg:ml-4"
                    } mb-6 max-w-[50%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[45%]`}
                >
                    <AnimatedTitle
                        text={name}
                        className={
                            "text-[32px] leading-tight text-white sm:text-[36px] md:text-[44px] md:leading-none lg:text-[48px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={description}
                        className={
                            "mt-3 text-[14px] font-semibold text-[#95979D] sm:mt-4 sm:text-[16px]"
                        }
                    />
                    <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 md:mt-9 md:grid-cols-4 md:gap-4 lg:mt-9 lg:mb-12">
                        {technologies.map((IconComponent, index) => (
                            IconComponent ? (
                                <div key={index} className={"relative"}>
                                    <Link
                                        href={techLinks[index]}
                                        target="_blank"
                                        aria-label={`Learn more about ${techNames[index]}`}
                                        className="inline-flex w-[18px] text-[18px] sm:w-[20px] sm:text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]"
                                        title={techLinks[index]}
                                        data-blobity-tooltip={techNames[index]}
                                        data-blobity-magnetic="false"
                                    >
                                        <IconComponent/>
                                    </Link>
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ProjectCard;
