import { UserModel } from "../User.model";
import Repository from "./Index";

export const UserRepository = new Repository<UserModel>("users", "email");
