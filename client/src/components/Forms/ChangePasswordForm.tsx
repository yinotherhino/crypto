import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  IToast,
  changeAuth,
  changeToast,
  handleServerError,
} from "../../redux/slices/NavbarSlice";
import { client } from "../../constants";

const ChangePasswordForm = ({token}:{token:string|null}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [tooltipText, setTooltipText] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  useEffect(()=>{
    if(!token){
      dispatch(changeToast({message:"Invalid token", variant:"error"}))
    }
  },[token])
  useEffect(() => {
    const tooltext = formData.password.length == 0 ? "password is required" :  formData.password != formData.confirmPassword ? "password must be equal to confirm password" :"";
    setTooltipText(tooltext);
  }, [formData]);
  const handleChange = (name: string, value: any) => setFormData(prev=>({...prev, [name]:value}));
  const changePwd = async () =>{
    client
    .put("/reset-password", {password: formData.password, token})
    .then(_=>{
        setIsDisabled(true)
        const toast: IToast = {
            message: "password changed successfully",
            variant: "success",
          };
          dispatch(changeToast(toast));
          dispatch(changeAuth("login"))
    })
    .catch((err) => {
        dispatch(handleServerError(err));
        setIsDisabled(false);
      })
    .finally(()=>setIsDisabled(false))

  }
  return (
    <form>
      <h1 className="text-2xl font-roboto mb-3">Forgot Password</h1>
      <Input.Text
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
      />
      <Input.Text
        placeholder="confirm password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        type="password"
      />
      <Button.Primary
        extraStyle={
            formData.password.length == 0 || isDisabled || tooltipText.length > 0 ? "cursor-no-drop" : "cursor-pointer"
        }
        disabled={formData.password.length == 0 || isDisabled}
        type="submit"
        text="Send reset mail"
        handleClick={changePwd}
        tooltip={tooltipText}
      />
    </form>
  );
};

export default ChangePasswordForm;
