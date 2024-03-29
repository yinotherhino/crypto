import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { COMPANY_NAME } from "../../constants";
import { motion } from "framer-motion";

const Circular = () => {
   const dispatch = useDispatch();
   const showAuthModal = () => {
      dispatch(changeAuth("register"));
   };
   const navigate = useNavigate();
   const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
   return (
      <div className="p-[50px] flex justify-center bg-ldBlue ">
         <motion.a whileHover={{ scale: 1.2 }} onHoverStart={(e) => {}} onHoverEnd={(e) => {}}>
            <div className="w-[270px] h-[270px] mx-[-50px] xxs:w-[320px] xxs:h-[320px] xs:w-[480px] xs:h-[480px] xsm:w-[600px] xsm:h-[600px] sm:w-[370px] sm:h-[370px] md:w-[640px] md:h-[640px] flex justify-center items-center rounded-full border-2 border-lBlue bg-gray-100">
               <div className="text-white text-sm font-lato flex flex-col p-5 justify-center items-center w-[250px] h-[250px] xxs:w-[300px] xxs:h-[300px] xs:w-[460px] xs:h-[460px]  xsm:w-[500px] xsm:h-[500px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[600px] rounded-full shadow-allcorners translate-z-[50px] bg-ldBlue ">
                  <h1 className="text-center text-white font-lato md:text-xl mb-3">
                     {`Peek into the future and unravel the wealth that digital assets can offer, all through the lens of ${COMPANY_NAME}. Experience the excitement of pioneering investments that have the potential to reshape your financial landscape for years to come.`}
                  </h1>
                  <p className=" mb-3">Invest with us today and make a lot</p>
                  <p className=" cursor-pointer " onClick={() => (isLoggedIn ? navigate("/deposit") : showAuthModal())}>
                     <span className="underline">{isLoggedIn ? "Deposit" : "Start now!"}</span>{" "}
                     <span className="text-2xl">👉</span>
                  </p>
               </div>
            </div>
         </motion.a>
      </div>
   );
};

export default Circular;
