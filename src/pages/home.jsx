import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="h-screen flex flex-col pt-[22%] md:pt-[18%] lg:pt-[12%] items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h3 className="text-red-800 text-2xl pb-4 flex justify-center">
        Hello! I'm
      </h3>
      <motion.h1
        className="text-8xl font-bold pb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Oscar Beltrán
      </motion.h1>
      <h3 className="text-2xl pb-4 mx-auto max-w-[60%] md:max-w-[40%] text-center">
        I am a <span className="text-red-800">Full Stack Developer</span>, passionate about the tech world. I am always looking to learn and improve my knowledge more and more.
      </h3>
      <div className="pt-[3%] flex justify-center">
        <button className="bg-red-800 py-4 px-8 rounded-3xl text-3xl">
          <Link to="/contact">
            Contact me
          </Link>
        </button>
      </div>
    </motion.div>
  )
}

export default Home;
