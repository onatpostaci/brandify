import { AvatarChipProps } from "@/types";
import React from "react";
import Image from "next/image";

const AvatarChip = ({ imgSrc, altName }: AvatarChipProps) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center">
      <Image src={imgSrc} alt={altName} width={40} height={40} />
    </div>
  );
};

export default AvatarChip;
