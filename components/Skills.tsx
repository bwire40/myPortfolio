import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

function Skills({}: Props) {
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
      className="flex flex-col  relative text-center md:text-left xl:flex-row h-auto xl:px-10 justify-center items-center xl:space-y-0 mx-auto mt-[300px]"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proffeciency
      </h3>
      <div className="absolute top-52 grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
