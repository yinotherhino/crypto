import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";

const RegisterForm = () => {
  const dispatch = useDispatch()
  const [isDisabled, setIsDisabled] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const register = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword)
      return;
    console.log(formData);
    setIsDisabled(true)
  };
  const handleChange = (name: string, value: any) =>
    setFormData((prev) => ({ ...prev, [name]: value }));
  return (
    <form>
      <Input.Text
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
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
          formData.email.length == 0 || formData.password.length == 0 || isDisabled
            ? "cursor-no-drop"
            : "cursor-pointer"
        }
        disabled={formData.email.length == 0 || formData.password.length == 0 || isDisabled}
        type="submit"
        text="Sign up"
        handleClick={register}
      />
      <p>Already registered? <span className="text-deep cursor-pointer" onClick={()=>{
        dispatch(changeAuth("login"))
      }}>login</span></p>
    </form>
  );
};

export default RegisterForm;
