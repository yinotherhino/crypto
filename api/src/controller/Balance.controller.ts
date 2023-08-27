import { Request, Response, NextFunction } from "express";
import { BalanceRepository } from "../model/repository/Balance.repository";



const getOne = async (req: Request, res: Response, next: NextFunction) => {
   const balance = await BalanceRepository.getByPKey(req.params.email);
    res.status(200).send({
        balance,
        Message: "Success",
        Code: "SUCCESS",
    })
};

export default {
   getOne,
} as const;
