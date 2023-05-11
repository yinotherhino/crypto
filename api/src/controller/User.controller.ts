import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../model";
import { GeneratePassword } from "../others";

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepository.getByPKey(req.params.email);
    res.status(200).send({
      email: user.email,
      fullName: user.fullName,
      dob: user.dob,
      role: user.role,
    });
  } catch (err: any) {
    let status = 500;
    if (err.cause === "NOT_FOUND") {
      status = 404;
    }
    res.status(status).send({
      Message: err.message,
    });
  }
};
const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, fullName, dob } = req.body;
    const hashedPwd = GeneratePassword(password);
    const user = await UserRepository.addOne(
      { email, password: hashedPwd, fullName, dob },
      email
    );
    res.status(200).send({
      email: user.email,
      fullName: user.fullName,
      dob: user.dob,
      role: user.role,
    });
  } catch (err: any) {
    let status = 500;
    if (err.cause === "DUPLICATE") {
      status = 409;
    }
    res.status(status).send({
      Message: err.message,
    });
  }
};
const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.params.email;
    if (!email) {
      res.status(400).send({
        Message: "Email is required",
      });
      return;
    }
    const user = await UserRepository.updateOne(req.body, email);
    res.status(200).send({
      email: user.email,
      fullName: user.fullName,
      dob: user.dob,
      role: user.role,
    });
  } catch (err: any) {
    let status = 500;
    if (err.cause === "NOT_FOUND") {
      status = 404;
    }
    res.status(status).send({
      Message: err.message,
    });
  }
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserRepository.deleteOne(req.params.email);
    res.status(200).send({
      Message: "Success",
      Code: "DELETED",
      email: req.params.email,
    });
  } catch (err: any) {
    let status = 500;
    if (err.cause === "NOT_FOUND") {
      status = 404;
    }
    res.status(status).send({
      Message: err.message,
    });
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserRepository.getAll();
    const userOmitPwd = users.map((user) => {
      return {
        email: user.email,
        fullName: user.fullName,
        dob: user.dob,
        role: user.role,
      };
    });
    res.status(200).send(userOmitPwd);
  } catch (err: any) {
    res.status(500).send({
      Message: err.message,
    });
  }
};

export default {
  getOne,
  getAll,
  create,
  update,
  deleteOne,
} as const;