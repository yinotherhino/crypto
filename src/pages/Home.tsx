import React from "react";
import Cards from "../components/Cards/Cards";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { changeAuth } from "../redux/slices/NavbarSlice";
import { useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import Icons from "../components/Icons";
import Socials from "../components/Socials";

const Home = () => {
  const dispatch = useDispatch();
  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };
  const showLoginModal = () => {
    dispatch(changeAuth("login"));
  };
  return (
    <div>
      <div className="banner mb-[50px] xsm:mb-[100px]"></div>
      <Button.Centered text="Start here!" handleClick={showAuthModal} />
      <div className="mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
        <Cards />
        <Cards />
        <Cards extraStyle=" xsm:hidden md:block" />
      </div>
      <Button.Centered text="Login here!" handleClick={showLoginModal} />

      <div className="m-[50px] xsm:m-[70px] md:m-[100px] flex-col xsm:flex-row flex justify-between">
        <a
          href="#"
          className="mb-5 xsm:mb-0 flex flex-col items-center bg-white border border-gray-200 rounded-lg  shadow-lg shadow-deep md:flex-row md:max-w-xl hover:bg-gray-100 hover:transform-[scale(1.05)]">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100  shadow-lg shadow-deep">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
      <Socials />

    </div>
  );
};

export default Home;
