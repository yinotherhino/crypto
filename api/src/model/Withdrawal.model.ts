import mongoose from "mongoose";
export interface WithdrawalModel {
   _id?: string;
   email: string;
   emailAndDate?: string;
   walletAddress: string;
   amount: number;
   status: string;
   createdDate: string;
   updatedDate: string;
   walletType: string;
}

const withdrawalSchema = new mongoose.Schema<WithdrawalModel>({
   _id: {
      type: String,
      required: true,
      unique: true,
   },
   email: {
      type: String,
      required: true,

   },
   walletAddress: {
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

export default mongoose.models.Withdrawal || mongoose.model<WithdrawalModel>("Withdrawal", withdrawalSchema);