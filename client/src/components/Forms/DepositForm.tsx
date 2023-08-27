import React, { useState } from "react";
import Modal from "../Modals/Modal";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminAddresses } from "../../pages/Deposit";
import Icons from "../Icons";
import { IToast, changeToast, handleServerError } from "../../redux/slices/NavbarSlice";
import Button from "../Button/Button";
import { client } from "../../constants";
interface IProps {
   isOpen: boolean;
   closeModal: () => void;
   walletType: string;
}
const DepositForm = ({ isOpen, closeModal, walletType }: IProps) => {
   const dispatch = useDispatch();
   const handleCopy = (addressOrNetwork: "address" | "network") => {
      navigator.clipboard
         .writeText(adminAddresses[walletType][addressOrNetwork])
         .then(() => {
            dispatch(changeToast({ message: `${addressOrNetwork} Copied to clipboard`, variant: "success" }));
         })
         .catch((error) => {
            console.error("Copy failed:", error);
         });
   };
   const [tooltipText, setTooltipText] = useState("");
   const [isDisabled, setIsDisabled] = useState(false);
   const [formData, setFormData] = useState({
      walletType: "",
      amount: "",
      senderAddress: "",
   });
   const handleChange = (name: string, value: any) => setFormData((prev) => ({ ...prev, [name]: value }));
   const handleDeposit = async () => {
      const notFilled: string | undefined = !formData.amount
         ? "Amount"
         : !formData.senderAddress
         ? "Sender Address"
         : !formData.walletType
         ? "Wallet Type"
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
         .post("/deposit", formData)
         .then((res) => {
            const {} = res.data;
            dispatch(
               changeToast({
                  message: `Deposit of $${formData.amount} will be confirmed in a few minutes`,
                  variant: "success",
               })
            );
            closeModal();
         })
         .catch((err) => {
            dispatch(handleServerError(err));
         })
         .finally(() => {
            setIsDisabled(false);
         });
   };
   return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
         <div className="flex flex-col justify-center items-center bg-white">
            {walletType && (
               <>
                  <h1 className="text-2xl mb-5">Deposit {walletType}</h1>
                  <p className="text-[15px] font-bold text-center mb-5">
                     Wallet Address: {adminAddresses[walletType].address}
                     <Icons.AiOutlineCopy className="inline-block" onClick={() => handleCopy("address")} />
                  </p>
                  <p className="text-md font-bold text-center mb-5">
                     Network:
                     {adminAddresses[walletType].network}
                     <Icons.AiOutlineCopy className="inline-block" onClick={() => handleCopy("network")} />
                  </p>
               </>
            )}
            <form>
               <Input.Text
                  placeholder="Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  type="number"
                  required
               />
               <Input.Text
                  placeholder="Sender Address (optional)"
                  name="senderAddress"
                  value={formData.senderAddress}
                  onChange={handleChange}
                  type="text"
                  required={false}
               />
               <Input.List
                  label="Wallet type"
                  name="walletType"
                  defaultValue={walletType}
                  list={["BTC", "ETH", "SOL", "USDT"]}
                  handleChange={handleChange}
               />
               <Button.Primary
                  extraStyle={
                     formData.amount.length == 0 ||
                     formData.senderAddress.length == 0 ||
                     formData.walletType.length == 0 ||
                     tooltipText.length > 0 ||
                     isDisabled
                        ? "cursor-no-drop"
                        : "cursor-pointer"
                  }
                  disabled={
                     formData.amount.length == 0 ||
                     formData.senderAddress.length == 0 ||
                     formData.walletType.length == 0 ||
                     isDisabled
                  }
                  type="submit"
                  text="Confirm deposit"
                  handleClick={handleDeposit}
                  tooltip={tooltipText}
               />
            </form>
         </div>
      </Modal>
   );
};

export default DepositForm;
