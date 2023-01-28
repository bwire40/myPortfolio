/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:emmanuelbwire80@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

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
      className="relative flex w-screen flex-col text-center md:text-left md:flex-row justify-center mx-auto items-center z-0 mb-60"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contacts
      </h3>

      <div className="flex mt-44 flex-col space-y-3 md:space-y-5">
        <h4 className="text-md md:text-3xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>

        <div>
          <div className="flex items-center justify-center space-x-3">
            <BsFillTelephoneFill className="text-[#F7AB0B] h-4 w-4 animate-pulse" />
            <p className="text-md">+254742923458</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <HiLocationMarker className="text-[#F7AB0B] h-4 w-4 animate-pulse" />
            <p className="text-md">56808-00200, Nairobi</p>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MdEmail className="text-[#F7AB0B] h-4 w-4 animate-pulse" />
            <a href="mailto:emmanuelbwire80@gmail.com" className="text-md">
              emmanuelbwire80@gmail.com
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="First Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email Address"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            placeholder="Your Message"
            className="contactInput"
            id="messagE"
            cols={30}
            {...register("message")}
            rows={7}
          ></textarea>
          <button className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
