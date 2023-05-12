import React from "react";
import Navbar from "./Navbar/Navbar";
import Modal from "./Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RegisterForm from "./Forms/RegisterForm";
import LoginForm from "./Forms/LoginForm";
import { changeAuth } from "../redux/slices/NavbarSlice";
import Chat from "./Sections/Chat";

const Layout = () => {
  const dispatch = useDispatch();
  const showAuth = useSelector((state: RootState) => state.navbar.showAuth);
  return (
    <>
      <Navbar />
      <Modal
        isOpen={Boolean(showAuth)}
        closeModal = {() => dispatch(changeAuth(null))}>
        {showAuth =="register" ? <RegisterForm /> : <LoginForm />}
      </Modal>
      <Chat />
    </>
  );
};

export default Layout;
