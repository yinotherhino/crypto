import React from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, children, closeModal }: IProps) => {
  return (
    <>
      {isOpen != false && (
        <div className="fixed top-0 flex left-0 h-[100%] w-[100vw] bg-modal z-40">
          <div className="flex flex-col justify-center items-center w-[70%] xsm:w-[50%] md:w-[30%] relative m-auto px-5 py-7 bg-white rounded-md">
            <div className="flex w-[100%] ">
              <button className="ml-auto mb-3 text-xl" onClick={() => closeModal()}>X</button>
            </div>
            <div className="px-5">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
