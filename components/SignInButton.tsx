"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/about" })}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" alt="google-logo" height={30} width={30} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Log In with Google
      </span>
    </button>
  );
};

export default SignInButton;
