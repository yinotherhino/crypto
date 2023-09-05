import mongoose from "mongoose";
export interface AdminModel {
   _id?: string;
   userName: string;
   firstName?: string;
   lastName?: string;
   country?: string;
   phone?: string;
   role?: string;
   password: string;
   gender?: string;
}

const adminSchema = new mongoose.Schema<AdminModel>({
   _id: {
      type: String,
      required: true,
      unique: true,
   },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
   password: {
      type: String,
      required: true,
   },
   firstName: {
      type: String,
      required: false,
   },
   lastName: {
      type: String,
      required: false,
   },
   role: {
      type: String,
      required: false,
      default: ["admin"],
   },
   country: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: false,
   },
   gender: {
      type: String,
      required: false,
   },
});

export default mongoose.models.Admin || mongoose.model<AdminModel>("Admin", adminSchema);
