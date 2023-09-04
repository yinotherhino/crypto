import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  handleClick: () => void;
  text: string;
  extraStyle?: string;
}
const Auth = ({ handleClick, text, extraStyle }: IProps) => {
  return (
    <button
      className={
        twMerge("py-3 px-7 hover:bg-white bg-deep flex items-center rounded-full border-2 hover:border-deep text-white hover:text-deep bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out ")
      }
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}>
      <span className="text:sm md:text-xl">{text}</span>
    </button>
  );
};

const Primary = ({
  handleClick,
  text,
  type,
  disabled,
  extraStyle,
  tooltip,
}: IProps & {
  type?: "submit" | "reset";
  disabled: boolean;
  tooltip?: string;
}) => {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="relative inline-flex justify-center ">
      {
      tooltip && tooltip.length>0 && hovering && <span className="absolute left-[100%] bg-glass p-3 text-black rounded-md ">
        {tooltip}
      </span>
      }
      <button
      onMouseEnter={()=>{setHovering(true)}}
      onMouseLeave={()=>{setHovering(false)}}
        className={`py-2 my-3 px-5 mx-auto text-deep flex items-center rounded-full border-2 border-deep  bg-white hover:bg-deep hover:text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out ${extraStyle}`}
        type={type || "button"}
        onClick={(e) => {
          e.preventDefault();
          if(disabled){
            return;
          }
          handleClick();
        }}>
        <span className="text-xl">{text}</span>
      </button>
    </div>
  );
};

const Centered = ({
  handleClick,
  text,
  extraStyle,
  Icon,
}: {
  handleClick: Function;
  text: string;
  extraStyle?: string;
  Icon?: React.ElementType;
}) => {
  return (
    <div className="flex justify-center mb-[50px]">
      <button
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className={` text-deep border-none rounded-md hover:border-primary hover:bg-white bg-primary py-3 px-5 shadow-lg shadow-deep bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out ${extraStyle} `}>
        {Icon && <Icon className="inline-block " />} {text}
      </button>
    </div>
  );
};

const Round = ({
  handleClick,
  text,
  extraStyle,
}: {
  handleClick: Function;
  text: string;
  extraStyle?: string;
}) => {
  return (
    <button
      className={
        "w-[40px] hover:bg-gray-700 h-[40px] rounded-[100px] text-white text-2xl border-1 bg-deep hover:border-primary" +
        extraStyle
      }
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}>
      {text}
    </button>
  );
};

const FocusSensitive = ({
  text,
  handleClick,
  extraStyle,
  focusedStyle,
  isFocused,
}: {
  text: string;
  handleClick: () => void;
  extraStyle?: string;
  focusedStyle: string;
  isFocused: boolean;
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      className={twMerge(`transition ease-in duration-700 py-3 px-7 hover:bg-white bg-deep flex items-center rounded-full border-2 hover:border-deep text-deep hover:text-deep bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out`,
      extraStyle, isFocused ? focusedStyle : " ")}>
      {text}
    </button>
  );
};

export default { Auth, Primary, Centered, Round, FocusSensitive } as const;
