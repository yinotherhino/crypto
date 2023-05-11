import { NextFunction, Request, Response } from "express";
import type { IUser } from "./types";
import {User} from "../model";

export const restrictTo = (role: "admin"|"user"|"premium") => {

    return async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      const userId = req.userId as string;
      // get user from db using id
      const user: IUser = await User.find({ id: userId });

      if (user && user.role !== role) {
        res.status(403).send({
          Message: `Only ${role} can access this resource, you are ${user.role}`,
          Code: "UNAUTHORIZED",
        });
        return;
      } else if (user.role === role) {
        next();
        return;
      }
      res.status(403).send({
        Message: `Only ${role} can access this resource.`,
        Code: "UNAUTHORIZED",
      });
    };
}

