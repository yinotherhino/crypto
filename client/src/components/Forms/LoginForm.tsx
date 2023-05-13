import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import {
  IToast,
  changeAuth,
  changeToast,
  changeUser,
} from "../../redux/slices/NavbarSlice";
import { client } from "../../constants";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    const toast: IToast = {
      open: true,
      message: `Please fill your ${!formData.email ? "email" : "password"}`,
      variant: "warning",
    };
    if (!formData.email || !formData.password) {
      dispatch(changeToast(toast));
      return;
    }
    setIsDisabled(true);
    console.log(formData);
    client
      .post("/login", formData)
      .then((res) => {
        console.log(res);
        const { user:{email,role,fullName,dob}, token} = res.data;
        dispatch(changeUser({ email, token, role, fullName,dob}))
        navigate("/");
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        const toast: IToast = {
          open: true,
          message: err.response.data.message,
          variant: "error",
        };
        dispatch(changeToast(toast));
      });
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
          formData.email.length == 0 ||
          formData.password.length == 0 ||
          isDisabled
            ? "cursor-no-drop"
            : "cursor-pointer"
        }
        disabled={
          formData.email.length == 0 ||
          formData.password.length == 0 ||
          isDisabled
        }
        type="submit"
        text="Log in"
        handleClick={login}
      />
      <p>
        Not registered?{" "}
        <span
          className="text-deep cursor-pointer"
          onClick={() => {
            dispatch(changeAuth("register"));
          }}>
          signup
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
