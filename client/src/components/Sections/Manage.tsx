import React from "react";
import Icons from "../Icons";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const Manage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-white p-[50px]">
      <h1 className="text-primary mb-[30px] text-[12px] text-center xsm:text-[25px] sm:text-[35px]">
        Manage all your wallets in one place!
      </h1>
      <Button.Centered text="Deposit" handleClick={()=>navigate("/deposit")} extraStyle=" shadow-none text-white rounded-full hover:bg-gray-300 bg-gray-500 "  />
      <div className="flex flex-wrap justify-center">
        <Icons.FaFacebookMessenger className="icon-social text-blue-500 " />
        <Icons.FaBitcoin className="icon-social text-green-700  " />
        <Icons.BsDiscord className="icon-social text-blue-600 " />
        <Icons.AiFillTwitterCircle className="icon-social text-blue-700 " />
        <Icons.FaEthereum className="icon-social text-blue-500 " />
        <Icons.SiBinance className="icon-social text-yellow-500 " />
        <Icons.FaTelegramPlane className="icon-social text-blue-500 " />
      </div>
    </div>
  );
};

export default Manage;
