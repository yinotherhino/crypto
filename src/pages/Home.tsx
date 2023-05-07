import React from "react";
import Cards from "../components/Cards/Cards";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { changeAuth } from "../redux/slices/NavbarSlice";
import { useDispatch } from "react-redux";


const Home = () => {
  const dispatch = useDispatch();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };
  return (
    <div>
      <div className="banner mb-[100px]"></div>
      <div className="m-[100px] flex justify-between ">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="m-[100px] flex justify-between">
        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg  shadow-lg shadow-deep md:flex-row md:max-w-xl hover:bg-gray-100 hover:transform-[scale(1.05)]">
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
      <div className="flex justify-center mb-[50px]">

        <button onClick={() => showAuthModal()} className=" text-deep border-none rounded-md hover:border-primary hover:bg-white bg-primary py-3 px-5 shadow-lg shadow-deep">
          Start here!
        </button>
      </div>
    </div>
  );
};

export default Home;
