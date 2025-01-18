import { Card } from "../components/Card";
import { FaFolder } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import { myListProjects } from "./listProjects";
import { motion } from "framer-motion";
import { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = () => {
  const [photo, setPhoto] = useState(false);
  const [names, setNames] = useState("");

  const handleClickPhoto = (name) => {
    setPhoto(!photo)
    setNames(name)
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
        {myListProjects.map(({ name, description, tecnology, git, url, image }, index) => (
          <Card key={index} className="max-w-[310px] min-w-[260px] min-h-[300px] h-auto mb-10 border-solid border-white border-2 border-opacity-60">
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
                {
                  image.length > 0 && (
                    <div onClick={() => handleClickPhoto(name)}>
                      <BsImage className="cursor-pointer" />
                    </div>

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

      {/* Window that show projects photos */}
      {
        photo && (
          <Card className="fixed z-50 md:top-[27%%] md:h-[420px] md:left-[32.5%] md:w-[768px] left-[5%] w-[90%] top-[25%] h-[50%] border-solid border-white border-2 border-opacity-60">
            <IoIosCloseCircle
              className="absolute right-3 top-3 text-3xl cursor-pointer z-50"
              onClick={() => setPhoto(!photo)}
            />

            <div>
              {
                myListProjects.map(({ name, image }, index) => (
                  (image.length > 0 && name === names) && (
                    <Slider {...settings} key={index} className="mt-10">
                      {
                        image.map((i, id) => (
                          <div key={id} className="max-h-[600px]">
                              <img
                                src={i}
                                alt={`${id + 1}`}
                                className="rounded-lg mx-auto h-[300px]"
                              />
                          </div>
                        ))
                      }
                    </Slider>
                  )
                ))
              }
            </div>
          </Card>
        )
      }
    </div>

  );
};

export default Projects;