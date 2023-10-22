"use client";
import { Hero, SnippetCard, Dashboard } from "@/components";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Dashboard />
    </main>
  );
};

export default page;
