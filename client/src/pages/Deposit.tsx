import React, { useState } from "react";
import {Cards, Icons} from "../components";
import DepositForm from "../components/Forms/DepositForm";

const Deposit = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [walletType, setWalletType] = useState("")
  const extraStyle = " mr-5 !bg-black basis-1/3"
  return (
    <>
    <DepositForm isOpen={isOpen} walletType={walletType} closeModal={()=>{setIsOpen(false)}} />
      <div className="overflow-scroll sm:mx-[50px] mt-[50px] py-[2rem] xsm:m-[70px] md:m-[100px]">
        <div className="mx-[10%] xsm:mx-auto basis-1/3  flex flex-col xsm:flex-row justify-between ">
          <Cards.Deposit
            text="50$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("BTC")}}
          />

          <Cards.Deposit
            text="1000$"
            header="ETH"
            extraStyle={extraStyle}
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{setIsOpen(true); setWalletType("ETH")}}
          />

          <Cards.Deposit
            text="200$"
            header="SOL"
            extraStyle={extraStyle}
            icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("ETH")}}

          />
          <Cards.Deposit
            text="50$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("BTC")}}

          />

          <Cards.Deposit
            text="1000$"
            header="ETH"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{setIsOpen(true); setWalletType("ETH")}}

          />

          
        </div>

      </div>
    </>
  );
};

export default Deposit;
