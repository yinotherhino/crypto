import Repository from "./Index";
import { BalanceModel } from "../Balance.model";

export const BalanceRepository = new Repository<BalanceModel>("balance", "email");