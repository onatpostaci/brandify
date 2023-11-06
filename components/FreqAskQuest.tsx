"use client";
import React, { useState } from "react";
import Accordion from "./Accordion";
import accordionData from "@/public/accordionData.json";

const FreqAskQuest = () => {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);

  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false, false])
      : setActive([true, true, true, true, true, true]);
  };
  return (
    <>
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">FAQ</h1>
        <p>Points that you wonder</p>
      </div>
      <section>
        {accordionData.map((el, i) => {
          return (
            <div className="w-full" key={"questions" + i}>
              <Accordion
                question={el.question}
                answer={el.answer}
                turn={active}
                setTurn={setActive}
                idx={el.idx}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FreqAskQuest;
