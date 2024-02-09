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
        name: "React js",
        icon: <FaReact className="my-auto"/>
    },
    {
        name: "Node js",
        icon: <IoLogoNodejs className="scale-[140%] my-auto"/>
    },
    {
        name: "TailwindCss",
        icon: <Icon icon="teenyicons:tailwind-solid" className="scale-[220%] my-auto"/>
    },
    {
        name: "Git/GitHub",
        icon: <SiGithub className="scale-[110%] my-auto"/>
    },
    {
        name: "PostgreSQL",
        icon: <SiPostgresql className="scale-[170%] my-auto"/>
    },
    {
        name: "Mongodb",
        icon: <SiMongodb className="scale-[120%] my-auto"/>
    }
];

export const newSkills = [
    {
        name: "Bootstrap",
        icon: <BsBootstrapFill className="my-auto"/>
    },
    {
        name: "Python",
        icon: <SiPython className="my-auto"/>
    }
];