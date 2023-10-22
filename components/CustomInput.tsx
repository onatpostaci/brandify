import { CustomInputProps } from "@/types";
import React from "react";

const CustomInput = ({
  type,
  placeholder,
  containerStyles,
  wrapperWidth,
  sendButton,
  value,
  handleChange,
  handleSubmit,
}: CustomInputProps) => {
  return (
    <div style={{ width: `${wrapperWidth}%` }} className={`flex relative`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange ? handleChange : undefined}
        className="w-full p-4 border rounded "
      />
      {sendButton ? (
        <button
          className="bg-blue-500 text-white rounded-r-lg px-4 py-2"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 5l3 3m0 0l-3 3m3-3H7"
            />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CustomInput;
