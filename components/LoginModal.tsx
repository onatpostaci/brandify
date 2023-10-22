import React from "react";
import { LoginModalProps } from "@/types";
import Image from "next/image";
import SignInButton from "./SignInButton";

const LoginModal = ({
  open,
  modalRef,
  handleOverlayClick,
}: LoginModalProps) => {
  return (
    <>
      {open ? (
        <div onClick={handleOverlayClick} className="modal">
          <div ref={modalRef} className="modal__container">
            <Image
              src={"/LogIn.png"}
              alt="brandify logo"
              width={118}
              height={20}
              className="object-contain"
            />
            <form>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 mb-6 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-8 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
              >
                Log In
              </button>
            </form>
            <p className="modal__subtitle">or use Google Credentials</p>
            <SignInButton />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginModal;
