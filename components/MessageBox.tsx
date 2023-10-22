"use client";
import React from "react";
import { AvatarChip } from ".";
import { useSession } from "next-auth/react";
import { MessageBoxProps } from "@/types";

const MessageBox = ({
  owner,
  text,
  isAnswer,
  snippet,
  keywords,
}: MessageBoxProps) => {
  const { status, data: session } = useSession();
  const avatarPaths = ["/robot.png", session?.user?.image];
  return (
    <div className={`messagebox ${isAnswer ? "" : "items-center"}`}>
      <div className="h-full flex flex-col items-start">
        <AvatarChip imgSrc={avatarPaths[owner] || ""} altName={"Avatar"} />
      </div>
      {isAnswer ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[15px] text-black-100 font-bold">
              Branding Snippet:{" "}
            </p>
            <p className="text-[15px] text-black-100 font-light">{snippet}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[15px] text-black-100 font-bold">Keywords: </p>
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className="bg-teal-200 p-1 text-teal-700 px-2 text-sm rounded-md inline-block"
              >
                #{keyword}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-[15px] text-black-100 font-light">{text}</p>
      )}
    </div>
  );
};

export default MessageBox;
