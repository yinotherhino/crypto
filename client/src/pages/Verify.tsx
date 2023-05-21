import React, { useEffect } from "react";
import { client } from "../constants";
import { useDispatch } from "react-redux";
import { changeAuth, changeToast, handleServerError } from "../redux/slices/NavbarSlice";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const search = new URLSearchParams(window.location.search);
  const token = search.get("token");
  let dispatch = useDispatch();
  useEffect(() => {
    client
      .post("/users/verify", { token })
      .then((res) => {
        dispatch(changeToast({ message: res.data.Message, variant: "success" }));
        dispatch(changeAuth("login"))
      })
      .catch((err) => {
        dispatch(handleServerError(err));
      })
      .finally(() => {
        const l = void 0;
      });
  }, []);

  return <div>Verifying...</div>;
};

export default Verify;
