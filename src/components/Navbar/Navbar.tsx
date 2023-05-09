import React, { useEffect, useState } from "react";
import Icons from "../Icons";
import { Link } from "react-router-dom";
import List from "../List";
import useViewportWidth from "../../hooks/useViewPortWidth";
import Button from "../Button/Button";
import NavItem from "./NavItem";
import MobileHamburger from "./MobileHamburger";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";
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
  const showHamburger = useSelector(
    (state: RootState) => state.navbar.showHamburger
  );
  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const handleScroll= ()=> {
      const distance = window.scrollY;
      const threshold = 100;
      const newOpacity = Math.max(0.5, 1 - (distance - threshold) / (threshold*4));
      setOpacity(newOpacity);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, []);
  

  return (
    <nav className="fixed z-50 w-full bg-slate-300 xsm:flex xsm:items-center xsm:justify-between xsm:px-10"  style={{ opacity }} >
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
            extraStyle="xsm:hidden md:flex "
            type="platform"
            dropContent={[
              { link: "/platform", text: "PLATFORM" },
              { link: "/platform", text: "PLATFORM" },
            ]}
          />
          <NavItem
            text="PRODUCTS"
            type="products"
            extraStyle="xsm:hidden md:flex "
            dropContent={[
              { link: "/products", text: "PRODUCTS" },
              { link: "/products", text: "PRODUCTS" },
            ]}
          />
          <NavItem
            text="LEGAL"
            type="legal"
            extraStyle="xsm:hidden md:flex "
            dropContent={[
              { link: "/legal", text: "LEGAL" },
              { link: "/legal", text: "LEGAL" },
            ]}
          />
          <NavItem
            text="ABOUT"
            type="about"
            extraStyle="xsm:hidden md:flex "
            dropContent={[
              { link: "/about", text: "ABOUT" },
              { link: "/about", text: "ABOUT" },
            ]}
          />
          <li className="py-3 px-7 flex items-center">
            <Button.Auth
              text="Register/Login"
              handleClick={() => showAuthModal()}
              extraStyle="xsm:py-2 xsm:px-3 md:py-3 md:px-7"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
