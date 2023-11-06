"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SnippetProps } from "@/types";

const SnippetCard = ({
  prompt,
  snippet,
  imageSource,
  keywords,
}: SnippetProps) => {
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{prompt}</h2>
      </div>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={imageSource}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <p className="flex mt-6 text-[15px] leading-[38px] font-extrabold">
        {snippet}
      </p>
    </div>
  );
};

export default SnippetCard;
