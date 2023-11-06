"use client";
import React, { useRef, useEffect } from "react";
import { AccordionProps } from "@/types";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

const Accordion = ({
  question,
  answer,
  turn,
  setTurn,
  idx,
}: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = turn![idx]
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [contentRef, turn, idx]);

  const toggleAccordion = () => {
    let newTurn = [...turn!];
    newTurn[idx] = !newTurn[idx];
    setTurn!(newTurn);
  };
  return (
    <div className="accordion">
      <button
        onClick={toggleAccordion}
        className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${
          turn![idx]
        }`}
      >
        <div className="py-3">
          <div className="flex items-center justify-between h-14 text-left">
            <span className="ml-2 font-medium lg:font-semibold lg:text-xl text-sm">
              {question}
            </span>
            <div>
              {turn![idx] ? (
                <ArrowUpIcon className="h-4 w-4 mx-2" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 mx-2" />
              )}
            </div>
          </div>
          <div
            ref={contentRef}
            className="mx-4 overflow-hidden text-left transition-all duration-500 h-full"
          >
            <p className="py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Accordion;
