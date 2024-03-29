import { Link, useNavigate } from "react-router-dom";
import useViewportWidth from "../../hooks/useViewPortWidth";
import { DropTypes } from "./Navbar";
import Icons from "../Icons";
import List from "../List";
import { changeHamburger, changeLinkDrop, changeDropType } from "../../redux/slices/NavbarSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface IProps {
  dropContent: Array<{ link: string; text: string; action?:()=>void }> | null;
  text: string;
  type: DropTypes;
  extraStyle?:string
  comingSoon?:boolean
}
const NavItem = ({
  type,
  dropContent,
  text,
  extraStyle,
  comingSoon
}: IProps) => {
  const navigate=useNavigate()
  const viewportWidth = useViewportWidth();
  const dropType = useSelector((state: RootState) => state.navbar.dropType);
  const showLinkDrop = useSelector((state: RootState) => state.navbar.showLinkDrop);
    const dispatch = useDispatch()

  const showDrop = () => {
    if (viewportWidth < 600) {
      return;
    }
    dispatch(changeDropType(type));
    dispatch(changeLinkDrop(true));
  };

  const hideDrop = () => {
    if (viewportWidth < 600) {
      return;
    }
    dispatch(changeLinkDrop(false));
    dispatch(changeDropType(null));
  };

  const handleClick = () => {
    if(comingSoon){
      return
    }
    navigate(`/${type}`)
  }
  return (
    <li
      className={"px-7 xsm:px-2 sm:px-5 hover:bg-primary relative flex "+extraStyle}
      onMouseEnter={() => showDrop()}
      onMouseLeave={() => hideDrop()}>
      <div onClick={handleClick} className=" py-1 flex items-center w-[100%] xsm:w-auto justify-between">
        <Link to={`/${type}`} className="mr-2 sm:mr-1 sm:text-sm">
          {text}
        </Link>
        {viewportWidth>800 && dropContent && <Icons.AiOutlineCaretDown />}
        {comingSoon && <span className="text-yellow absolute text-[10px] bottom-5 text-[#F4EEEE]">coming soon!!!</span>}
      </div>
      {dropContent && <div className="absolute top-[100%] left-0 bg-white w-[100%]">
        {showLinkDrop && dropType == type && (
          <List.WithLink content={dropContent} />
        )}
      </div>}
    </li>
  );
};

export default NavItem;
