import React from "react";
import Icons from "../../Icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../../../redux/slices/NavbarSlice";
import { RootState } from "../../../redux/store";
import Contact from "./Contact";
import FooterSocials from "./FooterSocials";
import Links from "./Links";

const Footer = () => {
  const iconStyle = "text-xl mr-5 ";
  const headerStyle = "text-xl font-normal mb-2";
  const bodyStyle = "text-md md:text-sm font-light mb-2 flex flex-col";
  const linkStyle = "cursor-pointer hover:text-blue-500 hover:underline";
  const bottomMargin = "mb-[30px]"
  return (
    <div className="bg-faint flex flex-col px-[50px] md:flex-row md:flex-wrap md:justify-between py-[50px] md:px-[200px] ">
      <div className={bottomMargin} >
        <FooterSocials linkStyle={linkStyle} headerStyle={headerStyle} iconStyle={iconStyle} />
      </div>
      <div className={bottomMargin} >
        <Contact
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          linkStyle={linkStyle}
        />
      </div>
      {/* <div className="w-1/4">Company</div> */}
      <div >
        <Links headerStyle={headerStyle} bodyStyle={bodyStyle} linkStyle={linkStyle} />
      </div>
    </div>
  );
};

export default Footer;