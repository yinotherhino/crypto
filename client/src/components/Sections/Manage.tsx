import React from "react";
import Icons from "../Icons";

const Manage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-[50px]">
      <h1 className="text-primary mb-[30px] text-[18px] text-center xsm:text-[30px] sm:text-[50px]">
        Manage all your wallets in one place!
      </h1>
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
