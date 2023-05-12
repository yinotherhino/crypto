import { useSelector,useDispatch } from "react-redux";
import Icons from "../Icons";
import { RootState } from "../../redux/store";
import { changeHamburger, changeLinkDrop, changeDropType } from "../../redux/slices/NavbarSlice";

const MobileHamburger = ()=> {
    const showHamburger = useSelector((state: RootState) => state.navbar.showHamburger);
    const dispatch = useDispatch()

    const changeDropDown = () => {
        dispatch(changeHamburger())
    };
    return (
      <div className="border-primary border-2 rounded-sm p-3 xsm:border-0 xsm:py-0 xsm:px-0">
        {showHamburger ? (
          <Icons.RiCloseLine
            className="text-2xl xsm:hidden"
            onClick={changeDropDown}
          />
        ) : (
          <Icons.RxHamburgerMenu
            className="text-2xl xsm:hidden"
            onClick={changeDropDown}
          />
        )}
      </div>
    );
  }

  export default MobileHamburger;