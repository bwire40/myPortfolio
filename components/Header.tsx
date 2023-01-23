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
        <a className="mr-2" href="#">
          <BsInstagram fontSize={30} />
        </a>
        <a className="mr-2" href="#">
          <BsTwitter fontSize={30} />
        </a>
        <a className="mr-2" href="#">
          <BsLinkedin fontSize={30} />
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
        <a href="mailto:emmanuelbwire80@gmail.com">
          <HiOutlineMail fontSize={30} />
        </a>
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
