import React from "react";
import Navbar from "./Navbar/Navbar";
import Icons from "./Icons";
import Modal from "./Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RegisterForm from "./Forms/RegisterForm";
import LoginForm from "./Forms/LoginForm";
import { changeAuth } from "../redux/slices/NavbarSlice";

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
      <div className="rounded-full rounded-tr-[10px] bg-primary p-5 fixed bottom-[20px] right-[20px] xsm:bottom-[50px] xsm:right-[50px]"> 
        <Icons.BsChatLeftText className="text-[15px] xsm:text-[30px] text-blue-700" />
      </div>
    </>
  );
};

export default Layout;
