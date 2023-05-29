import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeAuth } from "../../redux/slices/NavbarSlice";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const showAuth = useSelector((state: RootState) => state.navbar.showAuth);
  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };
  const showLoginModal = () => {
    dispatch(changeAuth("login"));
  };
  
  return (
    <div className="banner mb-[50px] flex items-center justify-center xsm:mb-[100px]">
      <div className="flex justify-center mb-[2rem]">
        <div className="flex w-min p-[5px] rounded-full bg-gray-200">
          {isLoggedIn ?
          <Button.FocusSensitive
          handleClick={() => navigate("/deposit")}
          focusedStyle="bg-white shadow-md"
          isFocused={true}
          text="Deposit"
          extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
        />
          :<><Button.FocusSensitive
            handleClick={() => showLoginModal()}
            focusedStyle="bg-white shadow-md"
            isFocused={showAuth === "login"}
            text="Login"
            extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
          />
          <Button.FocusSensitive
            handleClick={() => showAuthModal()}
            text="Register"
            isFocused={showAuth === "register"}
            focusedStyle="bg-white shadow-md"
            extraStyle={"bg-gray-200 border-none my-0 rounded-full"}
          /></>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
