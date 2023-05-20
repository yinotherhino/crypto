import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import NavItem from "./NavItem";
import MobileHamburger from "./MobileHamburger";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";
import { RootState } from "../../redux/store";
import ProfileIcon from "../ProfileIcon";

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

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const showAuthModal = () => {
    dispatch(changeAuth("register"));
  };

  const [opacity, setOpacity] = useState(1);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const distance = window.scrollY;
        const threshold = 100;
        const newOpacity = Math.max(
          0,
          1 - (distance - threshold) / (threshold * 5)
        );
        setOpacity(newOpacity);
        if (newOpacity === 0) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {showNavbar && (
        <nav
          className="fixed z-20 w-full min-h-[50px] bg-slate-300 xsm:flex xsm:items-center xsm:justify-between xsm:px-10"
          style={{ opacity }}>
          <div className=" px-7 xsm:px-0 flex justify-between items-center ">
            <Logo />
            <div className="flex items-center">
              <MobileHamburger />
              {isLoggedIn && <ProfileIcon className=" xsm:hidden" />}
            </div>
          </div>
          <div className="flex items-center">
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
                {!isLoggedIn && (
                  <NavItem
                    text="PLATFORM"
                    extraStyle="xsm:hidden md:flex "
                    type="platform"
                    dropContent={[
                      { link: "/platform", text: "PLATFORM" },
                      { link: "/platform", text: "PLATFORM" },
                    ]}
                  />
                )}
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
                {!isLoggedIn && (
                  <NavItem
                    text="ABOUT"
                    type="about"
                    extraStyle="xsm:hidden md:flex "
                    dropContent={[
                      { link: "/about", text: "ABOUT" },
                      { link: "/about", text: "ABOUT" },
                    ]}
                  />
                )}
                {!isLoggedIn && (
                  <li className="py-3 px-7 flex items-center">
                    <Button.Auth
                      text="Register/Login"
                      handleClick={() => showAuthModal()}
                      extraStyle="xsm:py-2 xsm:px-3 md:py-3 md:px-7"
                    />
                  </li>
                )}
              </ul>
            </div>
            <ProfileIcon className=" hidden xsm:block" />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
