"use client";
import React, { Children } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageWrapperProps } from "@/types";

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="Hero"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
