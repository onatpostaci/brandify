"use client";
import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import { CustomInput, MessageBox, SidebarItem, UserInfo } from ".";
import {
  HomeIcon,
  ChatBubbleBottomCenterIcon as ChatIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";

import { NewMessage } from "@/types";

const Dashboard = () => {
  const [prompt, setPrompt] = useState("");
  const [snippet, setSnippet] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [messageArray, setMessageArray] = useState<NewMessage[]>([
    {
      owner: 0,
      paragraph:
        "Hello, I am here to generate you branding snippets! Tell me what you! brand is about and I will generate copy and keywords for you!",
      isAnswer: false,
      snippet: "",
      keywords: [],
    },
  ]);
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

  //function for handling the prompt change
  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.currentTarget.value);
    //console.log(e.currentTarget.value);
  };

  const handleDynamicMessage = () => {
    console.log("adding...");
    setMessageArray((prevMessages) => [
      ...prevMessages,
      {
        owner: 1,
        paragraph: prompt,
        isAnswer: false,
        snippet: "",
        keywords: [],
      },
    ]);
    handleSubmit();
    console.log("added.");
  };

  const handleDynamicAnswer = ({
    owner,
    paragraph,
    isAnswer,
    snippet,
    keywords,
  }: NewMessage) => {};

  const handleSubmit = async () => {
    console.log(`Submitting: ${prompt}`);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_PATH}/generate-snippet-and-keyword?prompt=${prompt}`
      );
      if (response.ok) {
        const data = await response.json();
        setSnippet(data.snippet);
        setKeywords(data.keywords);
        //handleDynamicMessage({ owner: 0, paragraph: data.snippet });
        setMessageArray((prevMessages) => [
          ...prevMessages,
          {
            owner: 0,
            paragraph: prompt,
            isAnswer: true,
            snippet: data.snippet,
            keywords: data.keywords,
          },
        ]);
      } else {
        console.log(`Error: Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex">
      <div className="sidebar">
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
      <div className="flex-col w-full h-screen">
        <div className="messaging__platform">
          {messageArray.map((message, index) => (
            <MessageBox
              key={index}
              owner={message.owner}
              text={message.paragraph}
              isAnswer={message.isAnswer}
              snippet={message.snippet}
              keywords={message.keywords}
            />
          ))}
        </div>
        <div className="flex flex-col-reverse h-[20%] w-full border-b bg-[#F5F4F6] items-center">
          <p className="mb-14 text-[15px] text-black-100 font-light">
            Tell me what your brand is about and I will generate copy and
            keywords for you.
          </p>
          <CustomInput
            type={"text"}
            placeholder={"Send a brand type..."}
            value={prompt}
            handleChange={handlePromptChange}
            wrapperWidth={80}
            sendButton={true}
            handleSubmit={handleDynamicMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
