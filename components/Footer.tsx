/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="sticky bottom-5 w-full cursor-pointer flex items-center justify-center">
      <BsFillArrowUpCircleFill className="text-4xl font-bold text-[#F7AB0A]/60" />
    </div>
  );
};

export default Footer;
