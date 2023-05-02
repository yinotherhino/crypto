import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const submit = () => {
    if(!formData.email || !formData.password || !formData.confirmPassword) return;
    console.log(formData);
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
      <Button.Primary extraStyle={formData.email.length==0||formData.password.length==0?"cursor-no-drop":"cursor-pointer"} disabled={formData.email.length==0 || formData.password.length==0} type="submit" text="Sign up" handleClick={submit} />
    </form>
  );
};
{
  /* <Form fields={[{email:{placeholder:"email",value:{email},}}] handleChange={handleChange} } /> */
}

export default Form;
