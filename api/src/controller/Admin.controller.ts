import { Request, Response, NextFunction } from "express";
import { generatePassword } from "../others";
import { AdminRepository, UserRepository } from "../model";
import { BalanceRepository } from "../model/repository/Balance.repository";
import { BalanceModel, TWalletType } from "../model/Balance.model";
const getOne = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const user = await AdminRepository.getByPKey(req.params.username);
      res.status(200).send({
         username: user.username,
         firstName: user.firstName,
         lastName: user.lastName,
         country: user.country,
         phone: user.phone,
         role: user.role,
      });
   } catch (err: any) {
      next(err);
   }
};
const create = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { username, password, firstName, lastName, country, phone } = req.body;
      const hashedPwd = generatePassword(password);
      const [user] = await Promise.all([
         AdminRepository.addOne(
            {
               username,
               password: hashedPwd,
               firstName,
               lastName,
               country,
               phone,
               role: "admin",
            },
            username
         ),
         UserRepository.addOne(
            {
               email: username,
               password: hashedPwd,
               firstName,
               lastName,
               gender: "",
               country,
               phone,
               role: "admin",
               verified: true,
            },
            username
         ),
      ]);
      res.status(200).send({
         User: user,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err: any) {
      next(err);
   }
};

const update = async (req: Request, res: Response, next: NextFunction) => {};
const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { username } = req.params;
      const user = await AdminRepository.deleteOne(username);
      res.status(200).send({
         User: user,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err: any) {
      next(err);
   }
};
const getAll = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const users = await AdminRepository.getAll();
      res.status(200).send({
         Users: users,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err: any) {
      next(err);
   }
};

const addBalance = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const now = new Date().toISOString();
      const initialBalance: BalanceModel = {
         email: req.body.email,
         BTC: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
         USDT: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
         ETH: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
         SOL: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
         MATIC: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
         BNB: {
            amount: 0,
            createdDate: now,
            updatedDate: now,
         },
      };
      const { email, amount, walletType }: { email: string; amount: string; walletType: TWalletType } = req.body;
      const oldBalance = await BalanceRepository.getByPKey(email).catch(async (err) => {
         if (err.cause === "NOT_FOUND") {
            await BalanceRepository.addOne(initialBalance, email);
            return initialBalance;
         } else {
            throw err;
         }
      });
      const newBalance = {
         ...oldBalance,
         [walletType]: {
            amount: oldBalance[walletType].amount + Number(amount),
            createdDate: oldBalance[walletType].createdDate,
            updatedDate: now,
         },
      };

      const user = await BalanceRepository.updateOne(newBalance, amount);
      res.status(200).send({
         User: user,
         balance: newBalance,
         Message: "Success",
         Code: "SUCCESS",
      });
   } catch (err: any) {
      next(err);
   }
};

const getAllBalance = async (req: Request, res: Response, next: NextFunction) => {
  try {
     const balances = await BalanceRepository.getAll();
     res.status(200).send({
        balances,
        Message: "Success",
        Code: "SUCCESS",
     });
  } catch (err) {
     next(err);
  }
};

export default {
   getOne,
   addBalance,
   getAll,
   create,
   update,
   deleteOne,
   getAllBalance
} as const;
