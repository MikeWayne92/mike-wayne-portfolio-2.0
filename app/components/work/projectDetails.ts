import {
    SiFramer,
    SiGithub, 
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiVite,
    SiChartdotjs,
    SiPython,
    SiPandas,
    SiPlotly,
    SiNumpy
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
        demo: "https://mikewayne92.github.io/Spotify-by-the-numbers/",
        image: "/projects/spotifydash.png",
        available: true,
    },
    {
        id: 1,
        name: "Walmart Sales Analysis",
        description:
            "A comprehensive business intelligence analysis of Walmart sales data spanning multiple stores and time periods. The analysis provides actionable insights into sales performance, seasonal trends, store comparisons, and the impact of external factors on retail performance.",
        technologies: [SiReact, SiTypescript, SiTailwindcss, SiChartdotjs, SiGithub],
        techNames: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "GitHub"],
        techLinks: ["https://reactjs.org/", "https://www.typescriptlang.org/", "https://tailwindcss.com/", "https://www.chartjs.org/", "https://github.com/"],
        github: "https://github.com/MikeWayne92/walmart_sales_analysis",
        demo: "https://github.com/MikeWayne92/walmart_sales_analysis",
        image: "/projects/walmart-sales-analysis.png",
        available: true,
    },
    {
        id: 2,
        name: "UFC Analysis",
        description:
            "A comprehensive data analysis project exploring UFC fighter statistics and performance metrics. This project delves into fighter rankings, win-loss patterns, and performance analytics to uncover insights about what makes successful UFC fighters.",
        technologies: [SiPython, SiPandas, SiPlotly, SiNumpy, SiGithub],
        techNames: ["Python", "Pandas", "Plotly", "NumPy", "GitHub"],
        techLinks: ["https://www.python.org/", "https://pandas.pydata.org/", "https://plotly.com/", "https://numpy.org/", "https://github.com/"],
        github: "https://github.com/MikeWayne92/ufc_analysis",
        demo: "https://github.com/MikeWayne92/ufc_analysis",
        image: "/projects/ufc-analysis.png",
        available: true,
    },
    {
        id: 3,
        name: "NBA Player Statistics Dashboard",
        description:
            "An interactive web dashboard for analyzing NBA player statistics with a modern dark theme interface. Features include player comparisons, career timelines, and detailed statistical analysis with interactive visualizations powered by Plotly and Dash.",
        technologies: [SiPython, SiPandas, SiPlotly, SiNumpy, SiHtml5, SiCss3, SiGithub],
        techNames: ["Python", "Pandas", "Plotly", "NumPy", "HTML5", "CSS3", "GitHub"],
        techLinks: ["https://www.python.org/", "https://pandas.pydata.org/", "https://plotly.com/", "https://numpy.org/", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://github.com/"],
        github: "https://github.com/MikeWayne92/nba-dashboard",
        demo: "https://nba-dashboard-ugvy.onrender.com",
        image: "/projects/nba-dashboard.png",
        available: true,
    },
    {
        id: 4,
        name: "Cafe Sales Analytics Dashboard",
        description:
            "A comprehensive data analysis platform for cafe sales performance with interactive visualizations. Features include sales trends analysis, product performance metrics, time-based insights, location analytics, and payment method analysis with automated business insights generation.",
        technologies: [SiPython, SiPandas, SiPlotly, SiNumpy, SiHtml5, SiCss3, SiJavascript, SiGithub],
        techNames: ["Python", "Pandas", "Plotly", "NumPy", "HTML5", "CSS3", "JavaScript", "GitHub"],
        techLinks: ["https://www.python.org/", "https://pandas.pydata.org/", "https://plotly.com/", "https://numpy.org/", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https://github.com/"],
        github: "https://github.com/MikeWayne92/cafe-sales-analysis",
        demo: "https://mikewayne92.github.io/cafe-sales-analysis/",
        image: "/projects/cafe-sales-dashboard.png",
        available: true,
    },
];
