import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  IToast,
  changeAuth,
  changeToast,
  handleServerError,
} from "../../redux/slices/NavbarSlice";
import { changeUser } from "../../redux/slices/AuthSlice";
import { client } from "../../constants";

const LoginForm = () => {
  const [tooltipText, setTooltipText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const tooltext =
      formData.email.length == 0
        ? "email is required"
        : formData.password.length == 0
        ? "password is required"
        : "";
    setTooltipText(tooltext);
  }, [formData]);
  const login = () => {
    const notFilled: string | undefined = !formData.email
      ? "email"
      : !formData.password
      ? "password"
      : undefined;
    if (notFilled) {
      const toast: IToast = {
        message: `Please fill your ${notFilled} `,
        variant: "warning",
      };
      dispatch(changeToast(toast));
      return;
    }
    setIsDisabled(true);
    client
      .post("/login", formData)
      .then((res) => {
        const {
          user: { email, role, fullName, dob },
          token,
        } = res.data;
        dispatch(changeUser({ email, token, role, fullName, dob }));
        dispatch(changeAuth(null));
        navigate("/dashboard");
      })
      .catch((err) => {
        dispatch(handleServerError(err));
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };
  const handleChange = (name: string, value: any) =>
    setFormData((prev) => ({ ...prev, [name]: value }));
  return (
    <form>
      <h1 className="text-2xl font-roboto mb-3">Login</h1>
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
          tooltipText.length > 0 ||
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
        tooltip={tooltipText}
      />
      <p
        className="cursor-pointer text-deep"
        onClick={() => {
          dispatch(changeAuth("forgot"));
        }}>
        Forgot password?
      </p>
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
