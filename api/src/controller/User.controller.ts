import { Request, Response, NextFunction } from "express";
import { AdminRepository, UserRepository } from "../model";
import { generatePassword } from "../others";
import { validatePassword } from "../others";
import { generateSignature } from "../others/utils";

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepository.getByPKey(req.params.email);
    res.status(200).send({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      phone: user.phone,
      role: user.role,
      gender: user.gender,
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
    const { email, password, firstName, lastName, country, phone, gender } =
      req.body;
    const hashedPwd = generatePassword(password);
    const user = await UserRepository.addOne(
      {
        email,
        password: hashedPwd,
        firstName,
        lastName,
        country,
        gender,
        phone,
        role: "user",
      },
      email
    );
    res.status(200).send({
      User: {
        firstName,
        lastName,
        country,
        phone,
        email,
        gender,
        role: user.role,
      },
      Message: "Check your email to verify your account",
      Code: "SUCCESS",
    });
  } catch (err: any) {
    next(err);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.query.role;
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Email and password are required", {
        cause: "BAD_REQUEST",
      });
    }
    let user: any;
    switch (role) {
      case "admin":
        user = await AdminRepository.getByPKey(email);
        break;
      default:
        user = await UserRepository.getByPKey(email);
    }

    if (user && validatePassword(password, user.password)) {
      res.status(200).send({
        token: await generateSignature({
          email: user.email || user.username,
          password: user.password,
          role: user.role,
        }),
        Message: "Login Success",
        Code: "SUCCESS",
        user: {
          email: user.email || user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          phone: user.phone,
          gender: user.gender,
          role: user.role,
        },
      });
    } else {
      throw new Error("Login failed", { cause: "UNAUTHORIZED" });
    }
  } catch (err: any) {
    next(err);
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
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
      },
      Message: "Profile updated",
      Code: "SUCCESS",
    });
  } catch (err: any) {
    next(err);
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
    next(err);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserRepository.getAll();
    const userOmitPwd = users.map((user) => {
      return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
      };
    });
    res.status(200).send(userOmitPwd);
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
  loginController,
} as const;
