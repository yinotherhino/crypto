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
      //send mail to admin about deposit request
      const { email, amount, walletType } = req.body;
      const now = new Date().toISOString();
      //add deposit to db
      const deposit = await DepositRepository.addOne(
         {
            email,
            amount: Number(amount),
            createdDate: now,
            updatedDate: now,
            walletType,
            status: "PENDING",
         },
         `${email}-${now}`
      );
      //return success message
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
