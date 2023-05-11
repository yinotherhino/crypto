import { NextFunction, Request, Response } from "express";
import type { IUser } from "./types";
import { UserRepository } from "../model";
import { UserModel } from "../model/User.model";

export const restrictTo = (role: "admin" | "user" | "premium") => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userEmail = req.userEmail;
    if (!userEmail) {
      res.status(403).send({
        Message: "You are not logged in.",
        Code: "UNAUTHORIZED",
      });
      return;
    }
    const user: UserModel = await UserRepository.getByPKey(userEmail);
    if (!user) {
      res.status(403).send({
        Message: `Only ${role} can access this resource.`,
        Code: "UNAUTHORIZED",
      });
    }

    if (user.role === role || user.role === "admin") {
      next();
      return;
    }
    res.status(403).send({
      Message: `Only ${role} can access this resource, you are ${user.role}`,
      Code: "UNAUTHORIZED",
    });
    return;
  };
};
