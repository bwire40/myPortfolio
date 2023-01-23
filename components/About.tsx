/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
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
      className="h-screen border flex flex-col relative text-center md:text-left md:flex-row max-w-7xl items-center justify-center px-10 mx-auto"
    >
      <h3 className="absolute top-24 mb-[100px] tracking-[20px] uppercase text-gray-500 text-2xl text-center">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className="border mt-[200px] md:mt-10 xl:mt-10 -mb-20 md:mb-0 flex justify-center items-center flex-shrink-0 md:rounded-lg md:w-64"
      >
        <img
          src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
          alt="me"
          width="50%"
          className="rounded-full"
        />
      </motion.div>

      <div className="space-y-10 px-0 mt-20 md:px-10">
        <h4 className="text-2xl md:text-3xl xl:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
          tortor luctus ligula vestibulum sagittis. Pellentesque sit amet
          consectetur ante. Etiam semper porta accumsan. Phasellus ac sapien in
          mi semper dapibus vel id elit. Fusce lectus mi, porttitor nec
          imperdiet vitae, dictum ut lacus. Nunc id nibh urna. Nulla vel risus
          ex. Vestibulum eget sem in felis molestie tincidunt sit amet a purus
        </p>
      </div>
    </motion.div>
  );
}

export default About;
