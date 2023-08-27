import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import {twMerge} from "tailwind-merge";
interface IProps {
  extraStyle?: string;
  header: string;
  text: string;
  readmoreLink?: string;
}

const Basic = ({ extraStyle, header, text, readmoreLink }: IProps) => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <div
      className={` mb-[50px] xsm:mb-0 hover:2sm bg-white border border-gray-200 rounded-lg ${extraStyle}`}>
      <Link to={readmoreLink || ""}>
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={readmoreLink || ""}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {header}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 ">{text}</p>
        {readmoreLink && (
          <Link
            to={readmoreLink}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

const Long = ({
  extraStyle,
  children,
}: {
  children: React.ReactNode;
  extraStyle?: string;
}) => {
  return (
    <div
      className={
        twMerge(" transition-all ease-in-out duration-500 sm:mb-0 hover:2sm hover:shadow-lg border hover:border-none bg-white rounded-lg min-h-[30%] px-5 py-[2rem] mx-[20px] sm:mx-[1rem] md:mx-[3rem]",extraStyle)
      }>
      {children}
    </div>
  );
};

const Deposit = ({
  extraStyle,
  header,
  text,
  icon,
  handleClick
}: Omit<IProps, "readmoreLink"> & { icon: React.ReactNode, handleClick: ()=>void }) => {
  return (
    <div
      className={twMerge(` mb-[50px] py-5 px-10 flex flex-col justify-between w-full xsm:mb-0 hover:2sm rounded-lg bg-black text-white `, extraStyle)}>
      <div className="flex justify-between">

      <div>{icon}</div>
      <p>
        <h5 className={twMerge("mb-2 text-2xl font-bold tracking-tight text-white ")}>
          {header}
        </h5>
      </p>
      <div>
        <div className="text-2xl">{text}</div>
      </div>
          </div>
        <Button.Primary
          text="Deposit"
          handleClick={handleClick}
          disabled={false}
          extraStyle=" hover:bg-gold border-none"
          />
    </div>
  );
};

export default { Basic, Long, Deposit } as const;
