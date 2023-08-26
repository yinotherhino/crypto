import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  IToast,
  changeToast,
  handleServerError,
} from "../../redux/slices/NavbarSlice";
import { client } from "../../constants";

const ForgotForm = () => {
  const [tooltipText, setTooltipText] = useState("");
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleChange = (_: string, value: any) => setEmail(value);
  const forgotPwd = () => {
    const notFilled: string | undefined = !email ? "email" : undefined;
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
      .post("/reset-password", {email})
      .then((_) => {
        const toast: IToast = {
          message: `Check your mail for password reset link`,
          variant: "success",
        };
        dispatch(changeToast(toast));
      })
      .catch((err) => {
        dispatch(handleServerError(err));
        setIsDisabled(false);
      })
  };
  useEffect(() => {
    const tooltext = email.length == 0 ? "email is required" : "";
    setTooltipText(tooltext);
  }, [email]);
  return (
    <form>
      <h1 className="text-2xl font-roboto mb-3">Forgot Password</h1>
      <Input.Text
        placeholder="email"
        name="email"
        value={email}
        onChange={handleChange}
        type="email"
      />
      <Button.Primary
        extraStyle={
          email.length == 0 || isDisabled|| tooltipText.length > 0 ? "cursor-no-drop" : "cursor-pointer"
        }
        disabled={email.length == 0 || isDisabled}
        type="submit"
        text="Send reset mail"
        handleClick={forgotPwd}
        tooltip={tooltipText}
        
      />
    </form>
  );
};

export default ForgotForm;
