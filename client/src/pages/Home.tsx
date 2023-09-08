import React from "react";
import {Cards,Button,Icons,Socials,Manage,Circular,Banner} from "../components";
import { changeAuth } from "../redux/slices/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { COMPANY_NAME } from "../constants";
import { useScroll, animated, useSpring } from '@react-spring/web'
import money1 from "../assets/money1.jpg";
import money2 from "../assets/money2.jpg";

const X_LINES = 40

const PAGE_COUNT = 5

const INITIAL_WIDTH = 20

const Home = () => {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const barContainerRef = React.useRef<HTMLDivElement>(null!)
  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))
  
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
    },
    default: {
      immediate: true,
    },
  })
  
  return (
    <div className="flex flex-col justify-center bg-dBlue">
      <Banner />
      <div className="mx-auto  pt-[50px] xsm:pt-[100px] sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between bg-dBlue">
        <Cards.Basic
          header="Unlocking your Future"
          extraStyle=" max-w-sm"
          text={`Are you ready to explore the exciting and dynamic world of cryptocurrency investments? Look no further - ${COMPANY_NAME} is your gateway to a new era of financial opportunities.`}
        />
        <Cards.Basic
          header="Join Us Today!"
          extraStyle=" max-w-sm"
          text={`"Don't miss out on the chance to be a part of the future of finance. Sign up with ${COMPANY_NAME} and embark on a journey of discovery, growth, and financial freedom through cryptocurrency investments."`}
        />
        <Cards.Basic
          header="Embrace the Digital Revolution"
          extraStyle=" xsm:hidden md:block max-w-sm"
          text={`Step into a realm of endless possibilities as you delve into the realm of cryptocurrency investments. At ${COMPANY_NAME}, we open the doors to a realm where traditional finance meets cutting-edge technology, paving the way for remarkable financial growth.`}
        />
      </div>
      {isLoggedIn ? (
        <Button.Centered
          text="Deposit!"
          Icon={Icons.BsArrowRightCircle}
          handleClick={() => navigate("/deposit")}
        />
      ) : (
        <Button.Centered
          text="Start here!"
          Icon={Icons.BsArrowRightCircle}
          handleClick={showAuthModal}
        />
      )}

      <div className="p-[50px] xsm:p-[70px] md:p-[100px] flex-col xsm:flex-row flex justify-between bg-ldBlue">
        <a
          href="#"
          className="mb-5 xsm:mb-0 flex flex-col items-center bg-white border border-gray-200 rounded-lg  shadow-lg shadow-deep md:flex-row md:max-w-xl hover:bg-gray-100 hover:transform-[scale(1.05)]">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={money1}
            alt="crypto"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Your Path to Prosperity
            </h5>
            <p className="mb-3 font-normal text-gray-700">
            Embark on a transformative journey into the world of crypto investments with {COMPANY_NAME}. As traditional markets evolve, seize the chance to be a part of a revolution that's reshaping the very fabric of finance, and chart a course towards unprecedented prosperity.
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100  shadow-lg shadow-deep">
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={money2}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Where Opportunities Know No Bounds
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
            Discover a universe of investment opportunities that know no boundaries. With {COMPANY_NAME}, you're not just investing in cryptocurrencies; you're investing in a future that's borderless, dynamic, and teeming with opportunities that traditional markets simply can't match.
            </p>
          </div>
        </a>
      </div>
      <Socials />

      <Manage />
      <Circular />
    </div>
  );
};

export default Home;
