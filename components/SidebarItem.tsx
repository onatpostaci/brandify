import { SidebarItemProps } from "@/types";
import React from "react";
import Link from "next/link";

const SidebarItem = ({ href, gap, icon, title }: SidebarItemProps) => {
  return (
    <Link href={href}>
      <li
        className={`text-[18px] text-black-100 font-light flex items-center gap-x-4 cursor-pointer p-4 px-10 hover:bg-light-white rounded-md ${
          gap ? "mt-9" : "mt-2"
        } `}
      >
        {icon}
        {title}
      </li>
    </Link>
  );
};

export default SidebarItem;
