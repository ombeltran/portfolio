import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiGithub } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiPython } from "react-icons/si";
import { Icon } from '@iconify/react';
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

export const skills = [
    {
        name: "HTML",
        icon: <SiHtml5 className="my-auto"/>
    },
    {
        name: "CSS",
        icon: <SiCss3 className="my-auto"/>
    },
    {
        name: "JavaScript",
        icon: <Icon icon="ri:javascript-line" className="scale-[150%] my-auto" />
    },
    {
        name: "TypeScript",
        icon: <SiTypescript className="scale-[115%] my-auto"/>
    },
    {
        name: "React js",
        icon: <FaReact className="my-auto"/>
    },
    {
        name: "Next js",
        icon: <SiNextdotjs className="scale-[115%] my-auto"/>
    },
    {
        name: "Node js",
        icon: <IoLogoNodejs className="scale-[140%] my-auto"/>
    },
    {
        name: "TailwindCss",
        icon: <Icon icon="teenyicons:tailwind-solid" className="scale-[150%] my-auto"/>
    },
    {
        name: "Bootstrap",
        icon: <BsBootstrapFill className="my-auto"/>
    },
    {
        name: "Git/GitHub",
        icon: <SiGithub className="scale-[110%] my-auto"/>
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className="scale-[130%] my-auto"/>
    },
    {
        name: "SQLite",
        icon: <SiSqlite className="scale-[120%] my-auto"/>
    },
    {
        name: "Mongodb",
        icon: <SiMongodb className="scale-[120%] my-auto"/>
    }
];

export const newSkills = [
    {
        name: "Python",
        icon: <SiPython className="my-auto"/>
    }
];