/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const projects = [1, 2, 3, 4, 5];

type Props = {};

function Projects({}: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => {
          return (
            <div
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
              key={projects[i]}
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
                alt="Me"
                width={60}
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {projects.length}
                  </span>
                  :ups clone
                </h4>
                <p className="text-lg text-justify md:text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  elementum aliquam leo, vitae pharetra lectus sollicitudin ut.
                  Curabitur luctus pulvinar feugiat. Sed et massa et enim
                  vulputate ornare ut et elit. Curabitur mattis tincidunt ipsum
                  vel condimentum. Mauris dignissim faucibus scelerisque.
                  Aliquam hendrerit fermentum pellentesque.
                </p>
              </div>
              {/*  {project} */}
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
