import React from 'react'
import Icons from '../../Icons';

interface IProps {
    headerStyle: string;
    linkStyle: string;
    iconStyle: string;
}
const FooterSocials = ({headerStyle, iconStyle}:IProps) => {
  return (
    <>
    <h3 className={headerStyle}>Follow us on social media</h3>
        <div className="flex">
          <Icons.FaFacebookF className={iconStyle + " text-blue"} />{" "}
          <Icons.FaTelegramPlane className={iconStyle} />
          <Icons.BsDiscord className={iconStyle} />
          <Icons.AiFillTwitterCircle className={iconStyle} />
        </div>
    </>
  )
}

export default FooterSocials