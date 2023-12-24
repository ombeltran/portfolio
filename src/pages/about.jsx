import { motion } from "framer-motion";
import { newSkills, skills } from "./listSkills";

const About = () => {
  return (
    <motion.div
      className="h-screen flex pt-[18%] lg:pt-[9%] justify-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="max-w-[70%]">
        <motion.h2
          className="text-5xl font-bold pb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About me
        </motion.h2>
        <div className="text-lg">
          <p className="pb-6">
            I currently work as a freelance full stack developer, I love being able to offer
            highly functional products that integrate technologies such as
            <span className="text-red-800 font-semibold"> React js and Node js</span>.
          </p>
          <p className="pb-6">
            I have gained experience in developing applications that incorporate
            <span className="text-red-800 font-semibold"> CRUD operations</span>,
            with strong integration between <span className="text-red-800 font-semibold"> backend </span>
            and <span className="text-red-800 font-semibold"> frontend</span>. Thus working on the creation
            of systems that allow complete data management, from creation and reading to updating
            and deletion, providing a fluid and efficient experience for users.
          </p>
          <p className="pb-6">
            I have extensive <span className="text-red-800 font-semibold"> work experience </span>in the supply
            chain and logistics, through which I managed to develop <span className="text-red-800 font-semibold">
              data analysis and process improvement skills</span>, as well as a broad group of <span className="text-red-800 font-semibold"> soft skills</span>.
          </p>
          <div className="pr-[10%] md:pr-[30%]">
            <p className="pb-6">
              These are the technologies I have been working with:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4  gap-16 mb-8">
              {skills.map(({ name, icon }, index) => (
                <span key={index} className="text-white flex gap-3">
                  {icon}
                  {name}
                </span>
              ))}
            </div>

            <p className="pb-6">
              These are the technologies I'm learning right now:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4  gap-4 pb-12">
              {newSkills.map(({ name, icon }, index) => (
                <span key={index} className="text-white flex gap-3">
                  {icon}
                  {name}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About;
