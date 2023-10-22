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
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
          className="home__cars-wrapper"
        >
          <SnippetCard prompt="Coffee" snippet="Cofee is good!" keywords="" />
          <SnippetCard
            prompt="Car Rental"
            snippet="Cofee is good!"
            keywords=""
          />

          <SnippetCard
            prompt="Security Systems"
            snippet="Cofee is good!"
            keywords=""
          />
          <SnippetCard
            prompt="Agile Coaching"
            snippet="Cofee is good!"
            keywords=""
          />
        </motion.div>
      </section>
    </>
  );
};

export default Discover;
