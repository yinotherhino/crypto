import { UserModel } from "../model/User.model";

export interface IUser {
    id?: string;
    email: string;
    fullName: string;
    dob: string;
    role: "user" | "admin" | "premium";
    password?:string;
    gender?:string;
}

declare global {
    namespace Express {
      interface Request {
        user: UserModel;
      }
    }
  }