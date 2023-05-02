import { Link } from "react-router-dom";
import Icons from "../Icons";

const Logo=()=> {
    return (
      <Link to="/">
        <h1 className="cursor-pointer">
          <span>
            <Icons.IoLogoDeviantart className="text-2xl inline-block mr-2 text-primary" />
          </span>
          <span>Cryptokingfxtm</span>
        </h1>{" "}
      </Link>
    );
  }

  export default Logo