import {
    SiCplusplus,
    SiFramer,
    SiGithub, 
    SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiNodedotjs,
    SiExpress,
    SiSqlite
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Eldora UI",
        description:
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/karthikmudunuri/eldoraui",
        demo: "https://www.eldoraui.site/",
        image: "/projects/eldoraui.png",
        available: true,
    },
    {
        id: 1,
        name: "SQLBeats",
        description:
            "An interactive music database application designed to make learning SQL fun and engaging. Users practice database queries through music exploration, making SQL concepts more accessible through hands-on music management.",
        technologies: [SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiExpress, SiSqlite],
        techNames: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "SQLite3"],
        techLinks: ["https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://nodejs.org/", "https://expressjs.com/", "https://www.sqlite.org/"],
        github: "https://github.com/mikewayne92/SQL-beats",
        demo: "https://github.com/mikewayne92/SQL-beats",
        image: "/projects/sqlbeats.png",
        available: true,
    },
];
