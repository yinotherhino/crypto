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
            text="0$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("BTC")}}
          />

          <Cards.Deposit
            text="0$"
            header="ETH"
            extraStyle={extraStyle}
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{setIsOpen(true); setWalletType("ETH")}}
          />

          <Cards.Deposit
            text="0$"
            header="SOL"
            extraStyle={extraStyle}
            icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("SOL")}}

          />
          <Cards.Deposit
            text="0$"
            header="USDT"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{setIsOpen(true); setWalletType("USDT")}}

          />

          <Cards.Deposit
            text="0$"
            header="BNB"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{setIsOpen(true); setWalletType("BNB")}}

          />

          <Cards.Deposit
            text="0$"
            header="MATIC"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{setIsOpen(true); setWalletType("MATIC")}}

          />

          
        </div>

      </div>
    </>
  );
};

export const adminAddresses: {[key:string]: {address: string; network:string}} = {
  BTC: {
    address: "bc1qmgup4aez9dr9vrhg96ux255r64ldp7jsx3jtqa",
    network: "Bitcoin"
  },
  BNB: {
    address:"0xF62DED0C78721d8939A36Dc7eAE8AefCbfF1178E",
    network: "Bep20"
  },
  ETH: {
    address: "0x2db34549654E6519Ef64e70d72cED5ae123E1d18",
    network: "ETH"
  },
  USDT: {
    address:"TTKH1EXMGjH2Wms3wPhtiig3ej3n7Xi7xv",
    network: "TRC20"
  },
  SOL: {
    address: "FcytsSTGhrmoWwiW8bSnH6GDFbo8YHjRFGdjtux8Wkvn",
    network: "Sol"
  },
  MATIC: {
    address:"0xCBFa0D652e5e8fAc5Dee7e55cDe76cd6fdcD8d97",
    network: "Polygon"
  }
}

export default Deposit;
