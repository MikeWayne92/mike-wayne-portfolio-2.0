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
    SiSqlite,
    SiVite,
    SiChartdotjs
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
        name: "Spotify by the Numbers",
        description:
            "A sleek, interactive dashboard for visualizing your Spotify listening history. Upload your Spotify data and get beautiful visualizations of your listening habits, including top artists, tracks, and listening patterns.",
        technologies: [SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVite, SiChartdotjs, SiGithub],
        techNames: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Chart.js", "GitHub"],
        techLinks: ["https://reactjs.org/", "https://www.typescriptlang.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/", "https://vitejs.dev/", "https://www.chartjs.org/", "https://github.com/"],
        github: "https://github.com/MikeWayne92/Spotify-by-the-numbers",
        demo: "https://github.com/MikeWayne92/Spotify-by-the-numbers",
        image: "/projects/spotifydash.png",
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
