import React from "react";
import ChangePasswordForm from "../components/Forms/ChangePasswordForm";

const Reset = () => {
    const search = new URLSearchParams(window.location.search);
    const token = search.get("token");
  return (
    <div className="flex justify-center py-[3rem]">
      <ChangePasswordForm token={token} />
    </div>
  );
};

export default Reset;
