import React from "react";
import {Button,Icons} from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Profile = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <div className="p-[50px]">
          <div className="flex ">
            <div className="flex items-center mr-[100px] ">
              <div className="w-[100px] h-[100px] rounded-[100%] bg-primary flex justify-center items-center">
                <span className="text-white text-[80px] font-bold">M</span>
              </div>
              <span className=" ml-5 underline cursor-pointer text-[10px]">
                Edit Image
              </span>
            </div>
            <div className=" mt-5">
              <div>
                <span className="mr-5">John Doe</span>
                <span className=" align-baseline text-sm text-gray-400">
                  <Icons.CiLocationOn className="inline-block text-xl mb-2" />
                  {"  "}United States
                </span>
              </div>
              <p className="text-gold text-sm">Premium</p>
              <p className=" text-sm italic">exampl@gmail.com</p>
            </div>
          </div>
          <hr className="my-[30px]" />
          <div className="border-b border-gray-300 w-[200px]">
            <span className="text-gray-400 cursor-pointer hover:text-deep mr-3">
              Deposits
            </span>
            <span className=" cursor-pointer hover:text-dee mr-3">
              Withdrawals
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
