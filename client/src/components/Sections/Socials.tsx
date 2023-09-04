import React from "react";
import Icons from "../Icons";

const Socials = () => {
  return (
    <div className="bg-[#102C57]">
      <div className="bg-faint flex justify-center flex-col rounded-[70px] md:rounded-[100px] p-[50px] xsm:p-[70px] md:p-[100px]">
        <h1 className=" mx-auto mb-5 text-black font-bold">Connect with us!</h1>
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
    </div>
  );
};

export default Socials;
