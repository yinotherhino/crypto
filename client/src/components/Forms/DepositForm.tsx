import React, { useState } from "react";
import Modal from "../Modals/Modal";
import Input from "../Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
interface IProps {
   isOpen: boolean;
   closeModal: () => void;
   walletType: string;
}
const DepositForm = ({ isOpen, closeModal, walletType }: IProps) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [tooltipText, setTooltipText] = useState("");
   const [isDisabled, setIsDisabled] = useState(false);
   const [formData, setFormData] = useState({
      walletType: "",
      amount: "",
      senderAddress: "",
   });
   const handleChange = (name: string, value: any) => setFormData((prev) => ({ ...prev, [name]: value }));
   return (
      <Modal isOpen={isOpen} closeModal={closeModal}>
         <div className="flex flex-col justify-center items-center">
            <form>
               <Input.Text
                  placeholder="Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  type="number"
                  required
               />
               <Input.List
                  label="Wallet type"
                  name="walletType"
                  defaultValue={walletType}
                  list={["BTC", "ETH", "SOL", "USDT"]}
                  handleChange={handleChange}
               />
            </form>
         </div>
      </Modal>
   );
};

export default DepositForm;
