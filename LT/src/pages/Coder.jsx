import React from "react";

import Image from "../img/portfolio/1.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const Coder = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="code"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Lê Tân</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              tempore,
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              See More
            </Link>
          </motion.div>

          <div className="max-w-[450px] lg:max-w-[320px] h-[374px] lg:h-[220px] bg-accent overflow-hidden">
            <img
              className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
      
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
      <div className="">about me</div>
    </motion.section>
    
  );
};

export default Coder;
