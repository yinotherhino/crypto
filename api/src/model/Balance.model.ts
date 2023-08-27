export type TWalletType = "BTC" | "USDT" | "ETH" | "SOL";
export interface BalanceModel {
    email: string;
    BTC:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    };
    USDT:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    };
    ETH:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    };
    SOL:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    };
}