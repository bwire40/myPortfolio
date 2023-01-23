import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center "
      >
        {/* social icons */}
        <a
          className="mr-2 text-gray-600 hover:text-gray-400 transition duration-400"
          href="#"
        >
          <BsInstagram fontSize={20} />
        </a>
        <a
          className="mr-2 text-gray-600 hover:text-gray-400 transition duration-400"
          href="#"
        >
          <BsTwitter fontSize={20} />
        </a>
        <a
          className="mr-2 text-gray-600 hover:text-gray-400 transition duration-400"
          href="#"
        >
          <BsLinkedin fontSize={20} />
        </a>
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        <a
          href="mailto:emmanuelbwire80@gmail.com"
          className="flex justify-center items-center text-gray-600 hover:text-gray-400 transition duration-400"
        >
          <HiOutlineMail fontSize={30} />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
