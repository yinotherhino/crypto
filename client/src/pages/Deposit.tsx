import React from "react";
import {Cards, Icons} from "../components";

const Deposit = () => {
  const extraStyle = " mr-5 !bg-black basis-1/3"
  return (
    <>
      <div className="overflow-scroll sm:mx-[50px] mt-[50px] py-[2rem] xsm:m-[70px] md:m-[100px]">
        <div className="mx-auto basis-1/3  flex flex-col xsm:flex-row justify-between ">
          <Cards.Deposit
            text="50$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
          />

          <Cards.Deposit
            text="1000$"
            header="ETH"
            extraStyle={extraStyle}
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
          />

          <Cards.Deposit
            text="200$"
            header="SOL"
            extraStyle={extraStyle}
            icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
          />
          <Cards.Deposit
            text="50$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
          />

          <Cards.Deposit
            text="1000$"
            header="ETH"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
          />

          <Cards.Deposit
            text="200$"
            header="SOL"
            extraStyle=" !bg-black !text-white "
            icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
          />
        </div>

      </div>
    </>
  );
};

export default Deposit;
