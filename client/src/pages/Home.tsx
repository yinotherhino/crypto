import React from "react";
import { Cards, Button, Icons, Socials, Manage, Circular, Banner } from "../components";
import { changeAuth } from "../redux/slices/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { COMPANY_NAME } from "../constants";
import money1 from "../assets/money1.jpg";
import money2 from "../assets/money2.jpg";
import { motion, useTransform, useScroll } from "framer-motion";

const Home = () => {
   const { scrollYProgress } = useScroll();
   const dispatch = useDispatch();
   const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
   const navigate = useNavigate();

   const showAuthModal = () => {
      dispatch(changeAuth("register"));
   };

   return (
      <div className="flex flex-col justify-center bg-dBlue">
         <Banner />
         <div className="wrapper">
            <motion.div className="container">
               <motion.div
                  className="item"
                  style={{
                     scaleY: scrollYProgress,
                  }}
               />
            </motion.div>
         </div>
         <div className="mx-auto  pt-[50px] xsm:pt-[100px] sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between bg-dBlue">
            <motion.div
               className="container"
               whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
               whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%", transition: { duration: 1.0 } }}>
               <Cards.Basic
                  header="Unlocking your Future"
                  extraStyle=" max-w-sm"
                  text={`Are you ready to explore the exciting and dynamic world of cryptocurrency investments? Look no further - ${COMPANY_NAME} is your gateway to a new era of financial opportunities.`}
               />
            </motion.div>
            <motion.div
               className="container"
               whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
               whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%", transition: { duration: 1.0 } }}>
               <Cards.Basic
                  header="Join Us Today!"
                  extraStyle=" max-w-sm"
                  text={`"Don't miss out on the chance to be a part of the future of finance. Embark on a journey of discovery, growth, and financial freedom through cryptocurrency investments."`}
               />
            </motion.div>
            <motion.div
               className="container"
               whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.5 } }}
               whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%", transition: { duration: 1.0 } }}>
               <Cards.Basic
                  header="Embrace the Digital Revolution"
                  extraStyle=" xsm:hidden md:block max-w-sm"
                  text={`Delve into the realm of cryptocurrency investments. At ${COMPANY_NAME}, we open the doors to a realm where traditional finance meets cutting-edge technology.`}
               />
            </motion.div>
         </div>
         {isLoggedIn ? (
            <Button.CenteredDesignerBtn
               text="Deposit!"
               Icon={Icons.BsArrowRightCircle}
               handleClick={() => navigate("/deposit")}
            />
         ) : (
            <Button.CenteredDesignerBtn
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
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Your Path to Prosperity</h5>
                  <p className="mb-3 font-normal text-gray-700">
                     Embark on a transformative journey into the world of crypto investments with {COMPANY_NAME}. As
                     traditional markets evolve, seize the chance to be a part of a revolution that's reshaping the very
                     fabric of finance, and chart a course towards unprecedented prosperity.
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
                     Discover a universe of investment opportunities that know no boundaries. With {COMPANY_NAME},
                     you're not just investing in cryptocurrencies; you're investing in a future that's borderless,
                     dynamic, and teeming with opportunities that traditional markets simply can't match.
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
