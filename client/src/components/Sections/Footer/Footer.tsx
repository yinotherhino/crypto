import React from "react";
import Contact from "./Contact";
import FooterSocials from "./FooterSocials";
import Links from "./Links";
import Logo from "../../Logo/Logo";

const Footer = () => {
  const iconStyle = "text-xl mr-5 ";
  const headerStyle = "text-xl font-normal mb-2";
  const bodyStyle = "text-md md:text-sm font-light mb-2 flex flex-col";
  const linkStyle = "cursor-pointer hover:text-blue-500 hover:underline";
  const bottomMargin = "mb-[30px]";
  return (
    <div className="bg-xlBlue  bottom-0 left-0 flex flex-col px-[50px] md:flex-row md:flex-wrap md:justify-between py-[50px] md:px-[200px] ">
      <div className={bottomMargin}>
        <Logo />
      </div>
      <div className={bottomMargin}>
        <FooterSocials
          linkStyle={linkStyle}
          headerStyle={headerStyle}
          iconStyle={iconStyle}
        />
      </div>
      <div className={bottomMargin}>
        <Contact
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          linkStyle={linkStyle}
        />
      </div>
      {/* <div className="w-1/4">Company</div> */}
      <div>
        <Links
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          linkStyle={linkStyle}
        />
      </div>
    </div>
  );
};

export default Footer;
