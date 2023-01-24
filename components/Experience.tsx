import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { AiOutlineDoubleRight } from "react-icons/ai";
type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: [0, 0.4, 0.6, 0.8, 0.9, 1.0],
        scale: [0.8, 1.1, 1],
      }}
      viewport={{
        once: false,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-auto flex relative overflow-hidden flex-col text-left md:flex-row max-x-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 mb-80 tracking-[20px] uppercase text-gray-500 text-2xl text-center">
        Experience
      </h3>
      {/* <h3 className="absolute top-40 mb-80 uppercase text-gray-500 text-2xl text-center">
        <AiOutlineDoubleRight />
      </h3> */}
      <div className="w-full flex overflow-x-scroll p-12 md:px-32 snap-x snap-mandatory">
        {/* Experience cards */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
