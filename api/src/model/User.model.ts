import mongoose from "mongoose";
export interface UserModel {
   _id?: string;
   email: string;
   firstName: string;
   lastName: string;
   country: string;
   phone: string;
   role?: string;
   password: string;
   gender: string;
   verified: boolean;
}

const userSchema = new mongoose.Schema<UserModel>({
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
   password: {
      type: String,
      required: true,

   },
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      required: false,
      default: ["user"],
   },
   country: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   gender: {
      type: String,
      required: false,
      default: "prefer not to say"
   },
   verified: {
      type: Boolean,
      required: false,
      default: false,
   }
})

export default mongoose.models.User || mongoose.model<UserModel>("User", userSchema);