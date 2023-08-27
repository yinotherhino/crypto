export interface DepositModel {
    email: string;
    amount: number;
    status: string;
    createdDate: string;
    updatedDate: string;
    walletType: "BTC" | "USDT" | "ETH" | "SOL";
}