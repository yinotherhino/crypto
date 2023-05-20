import React, { useState } from "react";
import Button from "./Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/AuthSlice";

const ListItem = ({handleClick, text}:{handleClick:Function;text:string})=>{
  
  return (<li onClick={(e)=>{e.preventDefault();handleClick()}} className=" cursor-pointer hover:text-deep mb-1">
    {text}
  </li>)
}
const DropItem = ({ className }: { className: string }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={className}>
      <ul>
        <ListItem text="Profile" handleClick={()=>navigate("/profile")} />
        <ListItem text="Security"  handleClick={()=>navigate("/security")} />
        <ListItem text="Deposit"  handleClick={()=>navigate("/deposit")} />
        <ListItem text="Logout"  handleClick={()=>{navigate("/"); dispatch(logout())}} />
      </ul>
    </div>
  );
};
const ProfileIcon = ({ className }: { className?: string }) => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email);
  const [showDrop, setShowDrop] = useState(false);
  return (
    <>
      <DropDown
        show={() => setShowDrop(true)}
        hide={() => setShowDrop(false)}
        isShowing={showDrop}
        DropItems={DropItem}
        parent={
          <div className={"ml-5 " + className} onClick={()=>setShowDrop(!showDrop)}>
            <Button.Round
              text={userEmail?.slice(0, 1).toLocaleUpperCase()!}
              handleClick={() => {}}
              extraStyle=" bg-deep"
            />
          </div>
        }
      />
    </>
  );
};

export default ProfileIcon;
