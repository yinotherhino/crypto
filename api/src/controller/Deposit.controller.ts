import { Request, Response, NextFunction } from "express";
import { DepositRepository } from "../model/repository/Deposit.repository";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const deposits = await DepositRepository.getAll();
      res.status(200).send({
         deposits,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err) {
      next(err);
   }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const email = req.user.email;
      const { amount, walletType, senderAddress } = req.body;
      const now = new Date().toISOString();
      const deposit = await DepositRepository.addOne(
         {
            email,
            amount: Number(amount),
            createdDate: now,
            updatedDate: now,
            walletType,
            senderAddress,
            status: "PENDING",
         },
         `${email}-${now}`
      );
      //send mail to admin about deposit request
      //send mail to user about deposit request

      res.status(200).send({
         deposit,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err) {
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
