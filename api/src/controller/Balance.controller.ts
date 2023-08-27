import { Request, Response, NextFunction } from "express";
import { BalanceRepository } from "../model/repository/Balance.repository";

const getOne = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const balance = await BalanceRepository.getByPKey(req.user.email);
      res.status(200).send({
         balance,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err) {
      next(err);
   }
};

export default {
   getOne,
} as const;
