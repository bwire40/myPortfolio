/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
        alt="me"
        className="rounded-full border border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out w-14 md:w-20"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-20 md:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-sm md:text-2xl justify-center items-center font-bold text-black opacity-100">
            100%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
