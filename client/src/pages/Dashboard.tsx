import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import {Cards,Icons} from "../components";

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
          <div className="mx-auto sm:mx-[50px] mt-[50px] xsm:m-[70px] md:m-[100px] flex flex-col xsm:flex-row justify-between ">
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Popular Coins</h1>
                <ul>
                  <ListItem name="BTC:" value="0.03BTC" />
                  <ListItem name="ETH:" value="3ETH" />
                  <ListItem name="SOL:" value="70SOL" />
                </ul>
              </div>
            </Cards.Long>
            <Cards.Long extraStyle="">
              <div>
                <h1 className="text-lg font-bold mb-4">Stable Coins</h1>
                <ul>
                  <ListItem name="USDT:" value="5000$" />
                  <ListItem name="USDC:" value="4000$" />
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
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
                  <li>BTC: $30</li>
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
