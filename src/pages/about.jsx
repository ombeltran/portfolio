import { motion } from "framer-motion";
import { newSkills, skills } from "./listSkills";

const About = () => {
  return (
    <motion.div
      className="h-screen flex pt-[22%] md:pt-[18%] lg:pt-[9%] justify-center"
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
            I’m a passionate full-stack developer who specializes in delivering highly functional, user-friendly web applications using cutting-edge technologies like <span className="text-red-800 font-semibold">React.js and Node.js</span>. Whether you need to streamline your business operations or build a customized online presence, I’m here to help.
          </p>
          <p className="pb-6">
            Over the years, I’ve gained extensive experience developing <span className="text-red-800 font-semibold"> CRUD-based applications</span>, ensuring seamless communication between <span className="text-red-800 font-semibold">frontend and backend</span>. This allows me to create efficient systems for data management that provide users with a smooth and intuitive experience.

            Beyond web development, my background in supply chain and logistics has sharpened my problem-solving, data analysis, and process optimization skills. Combined with my technical expertise, I deliver products that not only work but solve real-world challenges.
          </p>
          <p className="pb-6">
            As a <span className="text-red-800 font-semibold">freelancer</span>, I collaborate with small businesses, entrepreneurs, and individuals to bring their ideas to life. From building visually stunning websites to developing full-featured systems, I adapt to each client’s unique needs. My goal is to deliver tailor-made solutions that elevate your brand or streamline your workflows.
          </p>
          <div className="pr-[10%] md:pr-[30%]">
            <p className="pb-6">
              Technologies I work with:
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
            Currently learning:
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
