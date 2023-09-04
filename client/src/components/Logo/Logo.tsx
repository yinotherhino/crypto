import { Link } from "react-router-dom";
import Icons from "../Icons";
import { COMPANY_NAME } from "../../constants";
import { twMerge } from "tailwind-merge";

const Logo=({extraStyle}: {extraStyle: string})=> {
    return (
      <Link to="/">
        <h1 className="cursor-pointer">
          <span>
            <Icons.IoLogoDeviantart className="text-2xl inline-block mr-2 text-primary" />
          </span>
          <span className={twMerge("text-white", extraStyle)}>{COMPANY_NAME}</span>
        </h1>{" "}
      </Link>
    );
  }

  export default Logo