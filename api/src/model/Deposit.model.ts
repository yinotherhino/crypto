import mongoose from "mongoose";
export interface DepositModel {
    _id?: string;
    email: string;
    amount: number;
    status: string;
    senderAddress: string;
    createdDate: string;
    updatedDate: string;
    walletType: "BTC" | "USDT" | "ETH" | "SOL";
}

const depositSchema = new mongoose.Schema<DepositModel>({
    _id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,

    },
    status: {
        type: String,
        required: true,
        default: "pending",

    },
    senderAddress: {
        type: String,
        required: true,

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
    },
    walletType: {
        type: String,
        required: true,
        default: "BTC",

    }
})

export default mongoose.models.Deposit || mongoose.model<DepositModel>("Deposit", depositSchema);