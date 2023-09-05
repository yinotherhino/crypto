import mongoose from "mongoose";
export type TWalletType = "BTC" | "USDT" | "ETH" | "SOL" | "BNB" | "MATIC";

export interface BalanceModel {
    _id?: string;
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
    MATIC:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    };
    BNB:{
        amount: number;
        createdDate: string;
        updatedDate: string;
    }
}

const balanceSchema = new mongoose.Schema<BalanceModel>({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    BTC: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
    USDT: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
    ETH: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
    SOL: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
    MATIC: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
    BNB: {
        amount: {
            type: Number,
            required: true,
            default: 0,
        },
        createdDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        },
        updatedDate: {
            type: String,
            required: true,
            default: new Date().toISOString(),
        }
    },
});

export default mongoose.models.Balance || mongoose.model<BalanceModel>("Balance", balanceSchema);