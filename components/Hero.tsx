"use client";
import React from "react";
import Image from "next/image";
import { CustomButton, PageWrapper } from ".";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  //function for handling the CustomButton click
  const handleScroll = () => {};
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 }}
      className="hero"
    >
      <div className="mt-12 flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find your brand snippet from the power of GPT!
        </h1>
        <p className="hero__subtitle">
          Streamline your branding snippet using the power of Artificial
          Intelligence.
        </p>
        <CustomButton
          title="Explore Snippets"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/ChatGPT-Logo.png"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
