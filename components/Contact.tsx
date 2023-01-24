import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Contact = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: [0, 0.4, 0.6, 0.8, 0.9, 1.0],
        scale: [0.8, 1.1, 1],
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacts
      </h3>
    </motion.div>
  );
};

export default Contact;
