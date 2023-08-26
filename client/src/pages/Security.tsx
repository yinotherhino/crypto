import React, { useState } from "react";
import {Input,Button} from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Security = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  return (
    <>
      {isLoggedIn && <div className="p-[50px]">
        <p className="mb-3">Change Password</p>
        <form className="child:mr-3 flex items-center">
          <Input.Text
            placeholder="old password"
            onChange={(name, value) =>
              setFormData((prev) => ({ ...prev, [name]: value }))
            }
            name="oldPassword"
            value={formData.oldPassword}
            required
          />
          <Input.Text
            placeholder="new password"
            onChange={(name, value) =>
              setFormData((prev) => ({ ...prev, [name]: value }))
            }
            name="newPassword"
            value={formData.newPassword}
            required
          />
          <Input.Text
            placeholder="confirm new password"
            onChange={(name, value) =>
              setFormData((prev) => ({ ...prev, [name]: value }))
            }
            name="confirmPassword"
            value={formData.confirmPassword}
            required
          />
          <Button.Primary extraStyle="!my-0 !mx-0 !py-[2px] !text-gray-300 border-gray-400" text="submit" disabled={false} type="submit" handleClick={()=>{}} />
        </form>
      </div>}
    </>
  );
};

export default Security;
