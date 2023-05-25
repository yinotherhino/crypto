import React from "react";

interface IProps {
  handleClick: () => void;
  text: string;
  extraStyle?: string;
}
const Auth = ({ handleClick, text, extraStyle }: IProps) => {
  return (
    <button
      className={
        "py-3 px-7 hover:bg-white bg-deep flex items-center rounded-full border-2 hover:border-deep text-white hover:text-deep " +
        extraStyle
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
}: IProps & { type?: "submit" | "reset"; disabled: boolean }) => {
  return (
    <button
      className={
        "py-2 my-3 px-5 mx-auto text-deep flex items-center rounded-full border-2 border-deep  bg-white hover:bg-deep hover:text-white " +
          extraStyle || ""
      }
      type={type || "button"}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}>
      <span className="text-xl">{text}</span>
    </button>
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
        className={` text-deep border-none rounded-md hover:border-primary hover:bg-white bg-primary py-3 px-5 shadow-lg shadow-deep ${extraStyle} `}>
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
      className={`transition ease-in duration-700 py-3 px-7 hover:bg-white bg-deep flex items-center rounded-full border-2 hover:border-deep text-deep hover:text-deep ${
        isFocused ? focusedStyle : " "
      } ${extraStyle}`}>
      {text}
    </button>
  );
};

export default { Auth, Primary, Centered, Round, FocusSensitive } as const;
