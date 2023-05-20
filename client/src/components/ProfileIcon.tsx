import React,{useState} from "react";
import Button from "./Button/Button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import DropDown from "./DropDown";

const ProfileIcon = ({ className }: { className?: string }) => {
  const userEmail = useSelector((state: RootState) => state.auth.user.email);
  const [showDrop, setShowDrop] = useState(false)
  return (
    <>
      <DropDown
      show={()=>setShowDrop(true)}
      hide={()=>setShowDrop(false)}
      isShowing={showDrop}
        DropItem={<div >item</div>}
        parent={
          <div className={"ml-5 " + className}>
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
