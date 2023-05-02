import React, { useState } from "react";
import Icons from "../Icons";
import { Link } from "react-router-dom";
import List from "../List";
import useViewportWidth from "../../hooks/useViewPortWidth";
import Button from "../Button/Button";
import NavItem from "./NavItem";
import MobileHamburger from "./MobileHamburger";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import {
  changeHamburger,
  changeLinkDrop,
  changeDropType,
  changeAuth,
} from "../../redux/slices/NavbarSlice";
import { RootState } from "../../redux/store";

export type DropTypes =
  | "trading"
  | "platform"
  | "products"
  | "legal"
  | "about"
  | "register";

const Navbar = () => {
  const dispatch = useDispatch();
  const viewportWidth = useViewportWidth();
  const dropType = useSelector((state: RootState) => state.navbar.dropType);
  const showLinkDrop = useSelector(
    (state: RootState) => state.navbar.showLinkDrop
  );
  const showHamburger = useSelector(
    (state: RootState) => state.navbar.showHamburger
  );
  const showAuthModal = () => {
    dispatch(changeAuth("register"))
  };


  return (
    <nav className=" bg-slate-300 xsm:flex xsm:items-center xsm:justify-between xsm:px-10">
      <div className=" px-7 xsm:px-0 flex justify-between items-center ">
        <Logo />
        <MobileHamburger />
      </div>
      <div className="bg-white py-0 xsm:bg-slate-300 xsm:py-0">
        <ul className={`${showHamburger ? "block" : "hidden"} xsm:flex`}>
          <NavItem
            text="TRADING"
            type="trading"
            dropContent={[
              { link: "/trading", text: "TRADING" },
              { link: "/trading", text: "TRADING" },
            ]}
          />
          <NavItem
            text="PLATFORM"
            type="platform"
            dropContent={[
              { link: "/platform", text: "PLATFORM" },
              { link: "/platform", text: "PLATFORM" },
            ]}
          />
          <NavItem
            text="PRODUCTS"
            type="products"
            dropContent={[
              { link: "/products", text: "PRODUCTS" },
              { link: "/products", text: "PRODUCTS" },
            ]}
          />
          <NavItem
            text="LEGAL"
            type="legal"
            dropContent={[
              { link: "/legal", text: "LEGAL" },
              { link: "/legal", text: "LEGAL" },
            ]}
          />
          <NavItem
            text="ABOUT"
            type="about"
            dropContent={[
              { link: "/about", text: "ABOUT" },
              { link: "/about", text: "ABOUT" },
            ]}
          />
          <li className="py-3 px-7 flex items-center">
            <Button.Auth
              text="Register/Login"
              handleClick={() => showAuthModal()}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
