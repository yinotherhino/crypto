import { AdminModel } from "../Admin.model";
import Repository from "./Index";

export const AdminRepository = new Repository<AdminModel>("admin", "username");
