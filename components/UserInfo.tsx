"use client";
import React from "react";
import Image from "next/image";
import { Loader } from ".";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { status, data: session } = useSession();

  if (status === "authenticated") {
    return (
      <div className="flex items-center gap-5 p-4 cursor-pointer hover:bg-light-white rounded-md">
        <Image
          src={session?.user?.image || ""}
          alt={"User Image"}
          width={40}
          height={40}
          className="rounded-md"
        />
        <p className="text-[16px] text-black-100 font-bold">
          {session?.user?.name}
        </p>
      </div>
    );
  } else if (status === "loading") {
    <div className="flex items-center justify-center">
      <Loader />
    </div>;
  } else {
    return <div>Not Authenticated</div>;
  }
};

export default UserInfo;
