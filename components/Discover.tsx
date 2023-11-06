"use client";
import React from "react";
import { SnippetCard } from ".";
import { motion, AnimatePresence } from "framer-motion";

const Discover = () => {
  return (
    <>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Ready-to-Use Snippets</h1>
        <p>Explore Ready-to-Use Snippets</p>
      </div>
      <section>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="home__cars-wrapper"
        >
          <SnippetCard
            prompt="Coffee"
            snippet="Enjoy the best cup of coffee you've ever had!"
            imageSource="/coffee.jpeg"
            keywords=""
          />
          <SnippetCard
            prompt="Car Rental"
            snippet="Looking for a fun and affordable way to get around town? Try car rental!"
            imageSource="/car-rental.jpg"
            keywords=""
          />

          <SnippetCard
            prompt="Security Systems"
            snippet="Here at Security Systems, we're passionate about keeping your home and family safe."
            imageSource="/security-service.jpg"
            keywords=""
          />
          <SnippetCard
            prompt="Agile Coaching"
            snippet="Agile Coaching is the perfect place to find the tools and resources you need to succeed with agile."
            imageSource="/agile-coach.jpg"
            keywords=""
          />
        </motion.div>
      </section>
    </>
  );
};

export default Discover;
