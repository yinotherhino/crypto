import Repository from "./Index";
import { WithdrawalModel } from "../Withdrawal.model";

export const WithdrawalRepository = new Repository<WithdrawalModel>("withdraw", ["email", "date"]);