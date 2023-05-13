import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  IToast,
  changeAuth,
  changeToast,
} from "../../redux/slices/NavbarSlice";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const register = () => {
    console.log(formData);
    let notFilled: string | undefined = !formData.email
    ? "Email"
    : !formData.firstName
    ? "Firstname"
    : !formData.lastName
    ? "Lastname"
    : !formData.phone
    ? "Phone"
    : !formData.country
    ? "Country"
    : !formData.password
    ? "Password"
    : undefined;
    
    if (notFilled !== undefined) {
      const toast: IToast = {
        message: `Please fill your ${
          notFilled
        }`,
        variant: "warning",
      };
      changeToast(toast);
      return;
    }
    setIsDisabled(true);
  };
  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  
  return (
    <form>
      <h1 className="text-2xl font-roboto mb-3">Sign up</h1>

      <Input.Text
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input.Text
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input.Text
        placeholder="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      />
      <Input.Text
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
      <Input.Text
        placeholder="Phone e.g +17231938467))"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input.Text
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
      />
      <Input.Text
        placeholder="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        type="password"
      />
      <Button.Primary
        extraStyle={
          formData.email.length == 0 ||
          formData.country.length == 0 ||
          formData.confirmPassword.length == 0 ||
          formData.firstName.length == 0 ||
          formData.lastName.length == 0 ||
          formData.phone.length == 0 ||
          formData.password.length == 0 ||
          isDisabled
            ? "cursor-no-drop"
            : "cursor-pointer"
        }
        disabled={
          formData.email.length == 0 ||
          formData.country.length == 0 ||
          formData.confirmPassword.length == 0 ||
          formData.firstName.length == 0 ||
          formData.lastName.length == 0 ||
          formData.phone.length == 0 ||
          formData.password.length == 0 ||
          isDisabled
        }
        type="submit"
        text="Sign up"
        handleClick={register}
      />
      <p>
        Already registered?{" "}
        <span
          className="text-deep cursor-pointer"
          onClick={() => {
            dispatch(changeAuth("login"));
          }}>
          login
        </span>
      </p>
    </form>
  );
};

export default RegisterForm;
