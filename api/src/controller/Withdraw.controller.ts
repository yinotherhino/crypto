import { Request, Response, NextFunction } from "express";
import { WithdrawalRepository } from "../model/repository/Withdrawal.repository";
import { TWalletType } from "../model/Balance.model";
import { BalanceRepository } from "../model/repository/Balance.repository";
import { ERROR_CAUSES } from "../constants";
import { validatePassword } from "../others";
import { UserRepository } from "../model";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const withdrawals = await WithdrawalRepository.getAll();
      res.status(200).send({
         withdrawals,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err) {
      next(err);
   }
};
const deductBalance = async (amount: number, email: string, walletType: TWalletType) => {
   const balance = await BalanceRepository.getByPKey(email);
   if (amount > balance[walletType].amount) {
      throw new Error("Insufficient Balance", { cause: ERROR_CAUSES.BAD_REQUEST });
   }
   balance[walletType].amount - amount;
   return await BalanceRepository.updateOne(balance, email);
};
const create = async (req: Request, res: Response, next: NextFunction) => {
   const email = req.user.email;
    const { amount, walletType, walletAddress, password } = req.body;
    const date = new Date().toISOString();
   try {
      const {password:correctPassword} = await UserRepository.getByPKey(email);
      const passwordMatch = validatePassword(password, correctPassword);
      if(!passwordMatch){
         throw new Error("Incorrect Password", { cause: ERROR_CAUSES.BAD_REQUEST });
      }
      const newBalance = await deductBalance(Number(amount), email, walletType);
      const withdrawal = await WithdrawalRepository.addOne(
         {
            email,
            amount: Number(amount),
            createdDate: date,
            updatedDate: date,
            walletAddress,
            status: "PENDING",
            walletType,
         },
         `${email}-${date}`
      );
      res.status(200).send({
         withdrawal,
         balance: newBalance,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err:any) {
    if(err.cause === ERROR_CAUSES.BAD_REQUEST){
    await WithdrawalRepository.addOne(
        {
           email,
           amount: Number(amount),
           createdDate: date,
              updatedDate: date,
              walletAddress,
           status: "FAILED",
           walletType,
        },
        `${email}-${date}`
     );
    }
      next(err);
   }
};

export default {
   // getOne,
   getAll,
   create,
   // update,
   // deleteOne,
} as const;
