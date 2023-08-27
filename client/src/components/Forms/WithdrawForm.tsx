import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button/Button";
import { IToast, changeToast, handleServerError } from "../../redux/slices/NavbarSlice";
import { useDispatch } from "react-redux";
import { client } from "../../constants";
import { useNavigate } from "react-router-dom";
import Modal from "../Modals/Modal";

const WithdrawForm = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [tooltipText, setTooltipText] = useState("");
   const [isOpen, setIsOpen] = useState(false);
   const [isDisabled, setIsDisabled] = useState(false);
   const [formData, setFormData] = useState({
      walletAddress: "",
      amount: "",
      walletType: "",
      password: ""
   });

   const handleWithdraw = () => {
      if (formData.password.length === 0) {
         setIsOpen(true);
         return;
      }
      const notFilled: string | undefined = !formData.amount
         ? "Amount"
         : !formData.walletAddress
         ? "Wallet Address"
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
         .post("/withdraw", formData)
         .then((res) => {
            const {} = res.data;
            dispatch(changeToast({ message: `Withdrawal of $${formData.amount} initiated`, variant: "success" }));
            navigate("/dashboard");
         })
         .catch((err) => {
            dispatch(handleServerError(err));
         })
         .finally(() => {
            setIsDisabled(false);
         });
   };

   const SubmitWithdrawal = () => {
      return (
         <Button.Primary
            extraStyle={
               formData.amount.length == 0 || formData.walletAddress.length == 0 || tooltipText.length > 0 || isDisabled
                  ? "cursor-no-drop"
                  : "cursor-pointer"
            }
            disabled={formData.amount.length == 0 || formData.walletAddress.length == 0 || isDisabled}
            type="submit"
            text="Initiate withdrawal"
            handleClick={handleWithdraw}
            tooltip={tooltipText}
         />
      );
   };
   const handleChange = (name: string, value: any) => setFormData((prev) => ({ ...prev, [name]: value }));
   return (
      <>
         <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
            <div className="flex flex-col items-center justify-center">
               <h1 className="text-2xl font-roboto mb-3">Enter your password</h1>
               <Input.Text
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
               />
               <SubmitWithdrawal />
            </div>
         </Modal>
         <form>
            <h1 className="text-2xl font-roboto mb-3">Withdraw to wallet</h1>

            <Input.Text
               placeholder="Wallet Address"
               name="walletAddress"
               value={formData.walletAddress}
               onChange={handleChange}
               type="text"
               required
            />
            <Input.Text
               placeholder={`amount in USD`}
               name="amount"
               value={formData.amount}
               onChange={handleChange}
               type="number"
               required
            />
            <Input.List
               label="Wallet type"
               name="walletType"
               list={["BTC", "ETH", "SOL", "USDT"]}
               handleChange={handleChange}
            />

            <SubmitWithdrawal />
         </form>
      </>
   );
};

export default WithdrawForm;
