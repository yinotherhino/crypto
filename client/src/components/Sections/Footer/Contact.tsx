import React from "react";
import { EMAIL, ADDRESS, CONTACT } from "../../../constants";

interface IProps {
  headerStyle: string;
  linkStyle: string;
  bodyStyle: string;
}
const Contact = ({ headerStyle, linkStyle, bodyStyle }: IProps) => {
  return (
    <>
      <h3 className={headerStyle}>Contact us</h3>
      <div className={bodyStyle}>
        <p className="mb-2">
          Email:{" "}
          <a href={`mailto:${EMAIL}`} className={linkStyle}>
            {" "}
            Send us a mail at {EMAIL}
          </a>
        </p>
        <p className="mb-2">
          Phone:{" "}
          <a href={`tel:${CONTACT}`} className={linkStyle}>
            Call Us on {CONTACT}
          </a>
        </p>
        <p className="mb-2">
          Address:{" "}
          <a
            href="https://goo.gl/maps/7ePuxtWzq1Q2"
            target="_blank"
            rel="noreferrer"
            className={linkStyle}>
            {ADDRESS}
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
