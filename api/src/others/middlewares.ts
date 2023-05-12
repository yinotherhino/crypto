import { NextFunction, Request, Response } from "express";
import type { IUser } from "./types";
import { UserRepository } from "../model";
import { UserModel } from "../model/User.model";
import { verifySignature } from "./utils";
import { Jwt, JwtPayload } from "jsonwebtoken";

export const restrictTo = (role: "admin" | "user" | "premium") => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      console.log;
      if (!token) {
        throw new Error("You are not logged in.", { cause: "UNAUTHORIZED" });
      }
      const {email} = await verifySignature(token) as JwtPayload;
      if (!email) {
        throw new Error("You are not logged in.", { cause: "UNAUTHORIZED" });
      }

      const user: UserModel = await UserRepository.getByPKey(email);

      if (!user) {
        throw new Error(`You are not registered.`, { cause: "UNAUTHORIZED" });
      }

      if (user.role === role || user.role === "admin") {
        req.user = user;
        next();
        return;
      }
      throw new Error(
        `Only ${role} can access this resource, you are ${user.role}`,
        { cause: "UNAUTHORIZED" }
      );
    } catch (err) {
      next(err);
    }
  };
};
