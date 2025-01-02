import { Card } from "../components/Card";
import { FaFolder } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { myListProjects } from "./listProjects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="absolute mt-5 h-screen w-screen block pt-[18%] md:pt-[14%] lg:pt-[8%]">
      <motion.h1
        className="text-center text-5xl font-bold pb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.div
        className="w-[90%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {myListProjects.map(({ name, description, tecnology, git, url }, index) => (
          <Card key={index} className="max-w-[310px] min-w-[260px] min-h-[300px] h-auto mb-10
          border-solid border-white border-2 border-opacity-60">
            <div className="flex justify-between">
              <FaFolder />
              <div className="flex gap-3">
                <a href={git} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="cursor-pointer" />
                </a>
                {
                  url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <FaLink className="cursor-pointer" />
                    </a>
                  )
                }
              </div>
            </div>
            <div>
              <h2 className="font-bold text-[20px] text-red-800 pt-2 pb-5">{name}</h2>
              <p className="pb-5 ">{description}</p>
              <p className="text-red-800 font-bold">{tecnology}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;