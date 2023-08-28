import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import {Cards,Icons} from "../components";
import { showDepositModal } from "../redux/slices/ModalSlice";

const ListItem = ({ name, value }: { name: string; value: string }) => {
  return (
    <li className="flex">
      <span className="mr-5">{name}</span>
      {value}
    </li>
  );
};
const Dashboard = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <div>
          <div className="mx-[10%] sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
            <Cards.Deposit
              text="50$"
              header="BTC"
              extraStyle=" mr-5 !bg-black "
              icon={<Icons.FaBtc className=" text-gold text-5xl " />}
              handleClick={()=>{dispatch(showDepositModal("BTC"))}}
            />

            <Cards.Deposit
              text="1000$"
              header="ETH"
              extraStyle=" mr-5  "
              icon={<Icons.FaEthereum className="text-gold text-5xl" />}
              handleClick={()=>{dispatch(showDepositModal("ETH"))}}
            />

            <Cards.Deposit
              text="200$"
              header="SOL"
              extraStyle=" !bg-black !text-white "
              icon={<Icons.TbCurrencySolana className=" text-gold text-5xl " />}
              handleClick={()=>{dispatch(showDepositModal("SOL"))}}
            />
          </div>
          <div className="mx-auto sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Popular Coins</h1>
                <ul>
                  <ListItem name="BTC:" value="0.00BTC" />
                  <ListItem name="ETH:" value="0ETH" />
                  <ListItem name="SOL:" value="0SOL" />
                </ul>
              </div>
            </Cards.Long>
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Stable Coins</h1>
                <ul>
                  <ListItem name="USDT:" value="0$" />
                  <ListItem name="USDC:" value="0$" />
                </ul>
              </div>
            </Cards.Long>
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Currency </h1>
                <ul>
                <ListItem name="EUR:" value="0" />
                <ListItem name="USD:" value="0" />
                <ListItem name="GBP:" value="0" />
                  
                </ul>
              </div>
            </Cards.Long>
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Popular Coins</h1>
                <ul>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                  <li>BTC: $0</li>
                </ul>
              </div>
            </Cards.Long>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
