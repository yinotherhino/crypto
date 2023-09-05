import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import NavItem from "./NavItem";
import MobileHamburger from "./MobileHamburger";
import Logo from "../Logo/Logo";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";
import { RootState } from "../../redux/store";
import ProfileIcon from "../ProfileIcon";
import { Link, useNavigate } from "react-router-dom";
import { changeProductCurrentlyShowing } from "../../redux/slices/Product";

export type DropTypes =
  | "trading"
  | "platform"
  | "products"
  | "about"
  | "register"
  | "deposit"
  | "rewards";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          0.5,
          1 - (distance - threshold) / (threshold * 5)
        );
        if (newOpacity <= 0.5) {
          setShowNavbar(false);
        } else if(newOpacity > 0.5) {
          setOpacity(newOpacity);
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
          className="sticky top-0 z-20 w-full min-h-[50px] bg-slate-300 xsm:flex xsm:items-center xsm:justify-between xsm:px-10 bg-[#053B50]"
          style={{ opacity }}>
          <div className=" px-7 xsm:px-0 flex justify-between items-center ">
            <Logo />
            <div className="flex items-center">
              <MobileHamburger />
              {isLoggedIn && <ProfileIcon className=" xsm:hidden" />}
            </div>
          </div>
          <div className="bg-[#ADC4CE] py-0 xsm:bg-slate-300 xsm:py-0">
            <ul className={`${showHamburger ? "block" : "hidden"} xsm:flex`}>
              <NavItem text="ABOUT" type="about" dropContent={null} />
              <NavItem
                text="PRODUCTS"
                type="products"
                extraStyle="xsm:hidden md:flex "
                dropContent={[
                  {
                    link: "/products",
                    text: "Annually",
                    action: () =>
                      dispatch(changeProductCurrentlyShowing("yearly")),
                  },
                  {
                    link: "/products",
                    text: "Bi-Annually",
                    action: () =>
                      dispatch(changeProductCurrentlyShowing("biannually")),
                  },
                  {
                    link: "/products",
                    text: "Monthly",
                    action: () =>
                      dispatch(changeProductCurrentlyShowing("monthly")),
                  },
                  {
                    link: "/products",
                    text: "Platinum",
                    action: () =>
                      dispatch(changeProductCurrentlyShowing("platinum")),
                  },
                ]}
              />
              <NavItem
                text="DEPOSIT"
                type="deposit"
                extraStyle="xsm:hidden md:flex "
                dropContent={null}
                // dropContent={[
                //   { link: "/btc", text: "BTC" },
                //   { link: "/eth", text: "ETH" },
                // ]}
              />


              <NavItem
                text="REWARDS"
                type="rewards"
                extraStyle="xsm:hidden md:flex "
                dropContent={null}
                comingSoon={true}
              />
              

              {isLoggedIn && (
                <li className="px-7 py-1 xsm:hidden md:flex items-center cursor-pointer mr-2 sm:mr-1 sm:text-sm hover:bg-primary ">
                  <Link to="/withdraw">WITHDRAW</Link>
                </li>
              )}
              {isLoggedIn ? (
                <li className="py-3 px-7 flex items-center">
                  <Button.Auth
                    text="Dashboard"
                    handleClick={() => navigate("/dashboard")}
                    extraStyle="xsm:py-2 xsm:px-3 md:py-3 md:px-7"
                  />
                </li>
              ) : (
                <li className="py-3 px-7 flex items-center">
                  <Button.Auth
                    text="Register/Login"
                    handleClick={() => showAuthModal()}
                    extraStyle="xsm:py-2 xsm:px-3 md:py-3 md:px-4 text-[5px]"
                  />
                </li>
              )}
            </ul>
          </div>
          {isLoggedIn && <ProfileIcon className=" hidden xsm:block" />}
        </nav>
      )}
    </>
  );
};

export default Navbar;
