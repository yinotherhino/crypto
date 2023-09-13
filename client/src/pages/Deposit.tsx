import React, { useState } from "react";
import {Cards, Icons} from "../components";
import DepositForm from "../components/Forms/DepositForm";
import { showDepositModal } from "../redux/slices/ModalSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Deposit = () => {
  // const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  // const [walletType, setWalletType] = useState("")
  const extraStyle = " mr-5 !bg-black basis-1/3"
  return (
    <>
      <div className="overflow-scroll sm:px-[50px] pt-[50px] py-[2rem] xsm:p-[70px] md:p-[100px] bg-[#102C57]">
        <div className="mx-[10%] xsm:mx-auto basis-1/3  flex flex-col xsm:flex-row justify-between ">
          <Cards.Deposit
            text="0$"
            header="BTC"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{dispatch(showDepositModal("BTC"))}}
          />

          <Cards.Deposit
            text="0$"
            header="ETH"
            extraStyle={extraStyle}
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{dispatch(showDepositModal("ETH"))}}
          />

          <Cards.Deposit
            text="0$"
            header="SOL"
            extraStyle={extraStyle}
            icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
            handleClick={()=>{dispatch(showDepositModal("SOL"))}}

          />
          <Cards.Deposit
            text="0$"
            header="USDT"
            extraStyle={extraStyle}
            icon={<Icons.FaBtc className=" text-gold text-5xl " />}
            handleClick={()=>{dispatch(showDepositModal("USDT"))}}

          />

          <Cards.Deposit
            text="0$"
            header="BNB"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{dispatch(showDepositModal("BNB"))}}

          />

          <Cards.Deposit
            text="0$"
            header="MATIC"
            extraStyle=" mr-5  "
            icon={<Icons.FaEthereum className="text-gold text-5xl" />}
            handleClick={()=>{dispatch(showDepositModal("MATIC"))}}

          />

          
        </div>

      </div>
    </>
  );
};

export const adminAddresses: {[key:string]: {address: string; network:string}} = {
  BTC: {
    address:"",
    network: "Bitcoin"
  },
  BNB: {
    address:"8E",
    network: "Bep20"
  },
  ETH: {
    address:"d18",
    network: "ETH"
  },
  USDT: {
    address:" ",
    network: "TRC20"
  },
  SOL: {
    address:"8Wkvn",
    network: "Sol"
  },
  MATIC: {
    address:"97",
    network: "Polygon"
  }
}

export default Deposit;
