import Repository from "./Index";
import { DepositModel } from "../Deposit.model";

export const DepositRepository = new Repository<DepositModel>("deposit", ["email", "date"]);