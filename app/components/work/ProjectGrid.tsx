import ProjectCard from "./ProjectCard";
import {projects, ProjectProps} from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
            <div className="mb-6 flex gap-4 text-[#e4ded7] sm:mb-8 md:mb-16 lg:mb-20 lg:gap-16">
                <h4
                    className={`text-[16px] md:text-[20px] lg:text-[34px] ${"text-[#e4ded7]"}`}
                >
                    Check out some of my work!
                </h4>
            </div>

            <div className="grid w-[95%] grid-cols-1 gap-y-8 sm:gap-y-10 md:w-[90%] md:gap-y-10 lg:max-w-[1200px] lg:grid-cols-1">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;
