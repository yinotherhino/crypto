import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import {
  IToast,
  changeAuth,
  changeToast,
  handleServerError,
} from "../../redux/slices/NavbarSlice";
import { ALL_COUNTRIES, client } from "../../constants";

const RegisterForm = () => {
  const [tooltipText, setTooltipText] = useState("");
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
  useEffect(() => console.log(formData), [formData]);

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

    if (notFilled) {
      const toast: IToast = {
        message: `Please fill your ${notFilled}`,
        variant: "warning",
      };
      changeToast(toast);
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      const toast: IToast = {
        message: "Password and Confirm Password do not match",
        variant: "warning",
      };
      changeToast(toast);
      return;
    }
    setIsDisabled(true);
    client
      .post("/users", formData)
      .then((res) => {
        console.log(res);
        const toast: IToast = {
          message: res.data.Message,
          variant: "success",
          time: 10000,
        };
        dispatch(changeToast(toast));
        dispatch(changeAuth("login"));
      })
      .catch((err) => {
        dispatch(handleServerError(err));
      })
      .finally(() => {
        setIsDisabled(false);
      });
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const tooltext =
      formData.firstName.length == 0
        ? "first name is required"
        : formData.lastName.length == 0
        ? "last name is required"
        : formData.country.length == 0
        ? "country is required"
        : formData.email.length == 0
        ? "email is required"
        : formData.phone.length == 0
        ? "phone is required"
        : formData.password.length == 0
        ? "password is required"
        : formData.confirmPassword.length == 0
        ? "confirm password is required"
        : "";
    setTooltipText(tooltext);
  }, [formData]);

  return (
    <form className="transition ease-in duration-500">
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
      <div className="my-3 flex justify-between">
        <label htmlFor="gender" className="mr-3">
          Gender:{" "}
        </label>
        <Input.Radio
          label="male"
          name="gender"
          value="female"
          handleSelect={handleChange}
          extraStyle=" mr-3"
        />
        <Input.Radio
          name="gender"
          label="female"
          value={formData.country}
          handleSelect={handleChange}
        />
      </div>
      <div className="mb-3">
        <Input.List
          label="Country"
          name="country"
          list={ALL_COUNTRIES}
          handleChange={handleChange}
        />
      </div>
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
        tooltip={tooltipText}
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
