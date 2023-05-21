import { Request, Response, NextFunction } from "express";
import { generatePassword } from "../others";
import { AdminRepository, UserRepository } from "../model";
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
    const { username, password, firstName, lastName, country, phone } =
      req.body;
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
          verified: true
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

export default {
  getOne,
  getAll,
  create,
  update,
  deleteOne,
} as const;
