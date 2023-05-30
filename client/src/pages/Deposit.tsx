import React from "react";
import {Cards, Icons} from "../components";

const Deposit = () => {
  const extraStyle = " mr-5 !bg-black basis-1/3"
  return (
    <>
      <div>
        <div className="mx-auto basis-1/3 sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
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
