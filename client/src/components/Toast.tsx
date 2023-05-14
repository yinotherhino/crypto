import React, { useEffect, useState } from "react";
import { IToast, changeToast, hideToast } from "../redux/slices/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface IProps {
  extraStyle?: string;
}
const Toast = ({ extraStyle }: IProps) => {
  const dispatch = useDispatch();
  const isToastOpen = useSelector(
    (state: RootState) => state.navbar.isToastOpen
  );
  const message = useSelector(
    (state: RootState) => state.navbar.showToast.message
  );
  const time = useSelector((state: RootState) => state.navbar.showToast.time);
  const variant = useSelector(
    (state: RootState) => state.navbar.showToast.variant
  );

  const variantColor =
    variant == "success"
      ? "bg-[#1B9C85]"
      : variant == "error"
      ? "bg-[#E76161]"
      : "bg-[#F79540]";
  const style = `absolute font-lato toast z-50 block w-[200px] px-[20px] py-[10px] ${variantColor} border border-gray-400 text-white px-4 py-3 rounded ${extraStyle}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(hideToast());
    }, time || 2000);
    return () => clearTimeout(timeout);
  });
  if(!isToastOpen) return (<></>)
  return <>{isToastOpen && <div className={style}>{message}</div>}</>;
};

export default Toast;
