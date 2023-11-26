import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { CustomInput, MessageBox, SidebarItem, UserInfo } from ".";
import {
  HomeIcon,
  ChatBubbleBottomCenterIcon as ChatIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";
import { SidebarProps } from "@/types";

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  /* SIDEBAR ELEMENTS */
  const menuItems = [
    {
      href: "/",
      title: "Homepage",
      icon: <HomeIcon className="h-4 w-4 mx-2" />,
    },
    {
      href: "/dashboard",
      title: "Prompt",
      icon: <ChatIcon className="h-4 w-4 mx-2" />,
    },
    {
      href: "/profile",
      title: "Profile",
      icon: <UserIcon className="h-4 w-4 mx-2" />,
    },
    {
      href: "/profile",
      title: "Logout",
      icon: <LogoutIcon className="h-4 w-4 mx-2" />,
    },
  ];
  /* SIDEBAR ELEMENTS */

  return (
    <div
      className={`flex flex-col border-r border-gray-300 fixed left-0 top-0 h-screen bg-[#F3F4F6] overflow-x-hidden ${
        isSidebarOpen ? "w-72" : "w-0"
      } transition-width ease-in-out duration-300 ${
        isSidebarOpen ? "border-r border-gray-300" : ""
      } lg:relative z-10 lg:w-72`}
    >
      <span
        className={`${
          isSidebarOpen
            ? `close text-gray-500 hover:text-black focus:text-black hover:no-underline focus:no-underline cursor-pointer float-right p-[10px] text-[35px] font-bold`
            : "hidden"
        }`}
        onClick={() => toggleSidebar()}
      >
        &times;
      </span>
      <div className="sidebar__item__logo mt-6">
        <Image
          src={"/brandify.svg"}
          alt={"brandify-logo"}
          width={118}
          height={20}
          className="object-contain"
        />
      </div>
      <ul className="pt-6">
        {menuItems.map((menu, index) => (
          <SidebarItem
            key={index}
            href={menu.href}
            gap={false}
            icon={menu.icon}
            title={menu.title}
          />
        ))}
      </ul>
      <div className="flex flex-col-reverse h-full w-full">
        <div className=" flex items-center justify-center w-full h-[30%] border-t border-gray-300">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
