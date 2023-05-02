import React from "react";

interface IProps {
  handleClick: () => void;
  text: string;
}
const Auth = ({ handleClick, text }: IProps) => {
  return (
    <button
      className="py-3 px-7 hover:bg-white bg-deep flex items-center rounded-full border-2 hover:border-deep text-white hover:text-deep"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}>
      <span className="text-xl">{text}</span>
    </button>
  );
};

const Primary = ({
  handleClick,
  text,
  type,
  disabled,extraStyle
}: IProps & { type?: "submit" | "reset",disabled:boolean,extraStyle?:string }) => {
  return (
    <button
      className={"py-2 my-3 px-5 mx-auto text-deep flex items-center rounded-full border-2 border-deep  bg-white hover:bg-deep hover:text-white "+ extraStyle||""}
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

export default { Auth, Primary } as const;
