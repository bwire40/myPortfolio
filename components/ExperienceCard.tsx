/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[100%] md:w-[50%] xl:w-[50%] gap-[5%] snap-center bg-[#292929] p-10 hover:opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden mt-[120px] ml-2">
      <div className="flex flex-col items-center">
        <motion.div className="">
          <motion.img
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
            src="https://www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg"
            alt="me"
            className="object-cover object-center w-32 rounded-full "
          />
        </motion.div>

        <div className="flex flex-col items-center pt-10 px-0 md:px-10">
          <h4 className="text-1xl font-light">CEO ManuTakes</h4>
          <p className="font-bold text-1xl mt-1">MANUTAKES</p>
          <div className="flex space-x-2 my-2">
            {/* tech used */}
            <TbBrandJavascript className="text-4xl text-[#47C087]" />
            <FaReact className="text-4xl text-[#47C087]" />
            <AiFillHtml5 className="text-4xl text-[#47C087]" />
          </div>
          <p className="uppercase py-2 text-gray-300">
            Started work ... ended...
          </p>

          <ul className="list-disc space-y-2 text-md">
            <li>Summary text</li>
            <li>Summary text</li>
            <li>Summary text</li>
            <li>Summary text</li>
            <li>Summary text</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
