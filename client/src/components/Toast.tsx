import React, { useEffect, useState } from "react";
import { IToast, changeToast } from "../redux/slices/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IProps {
  extraStyle?: string;
}
const Toast = ({ extraStyle }: IProps) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.navbar.showToast.open);
  const message = useSelector((state: RootState) => state.navbar.showToast.message);
  const variant = useSelector((state: RootState) => state.navbar.showToast.variant);

  const variantColor =
    variant == "success"
      ? "bg-[#1B9C85]"
      : variant == "error"
      ? "bg-[#E76161]"
      : "bg-[#F79540]";
  const style = `z-50 block w-[200px] px-[20px] py-[10px] ${variantColor} border border-gray-400 text-white px-4 py-3 rounded ${extraStyle}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const toast: IToast = { open: false, message: null, variant: "warning" };
      dispatch(changeToast(toast));
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <>{isOpen && <div className={style + " toast"}>{message}</div>}</>;
};

export default Toast;
