import { Link } from "react-router-dom";
import Icons from "../Icons";
import { COMPANY_NAME } from "../../constants";
import { twMerge } from "tailwind-merge";

const Logo=()=> {
    return (
      <Link to="/">
        <h1 className="cursor-pointer">
          <span>
            <Icons.IoLogoDeviantart className="text-2xl inline-block mr-2 text-dBlue" />
          </span>
          <span className="font-bold text-dBlue">{COMPANY_NAME}</span>
        </h1>{" "}
      </Link>
    );
  }

  export default Logo