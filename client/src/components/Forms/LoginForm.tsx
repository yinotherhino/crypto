import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { changeAuth } from "../../redux/slices/NavbarSlice";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [isDisabled, setIsDisabled] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    if (!formData.email || !formData.password)
      return;
    console.log(formData);
    setIsDisabled(true);
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
      <Button.Primary
        extraStyle={
          formData.email.length == 0 || formData.password.length == 0 || isDisabled
            ? "cursor-no-drop"
            : "cursor-pointer"
        }
        disabled={formData.email.length == 0 || formData.password.length == 0 || isDisabled}
        type="submit"
        text="Log in"
        handleClick={login}
      />
      <p>Not registered? <span className="text-deep cursor-pointer" onClick={()=>{
        dispatch(changeAuth("register"))
      }}>signup</span></p>

    </form>
  );
};

export default LoginForm;
