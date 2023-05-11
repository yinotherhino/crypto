import mongoose from "mongoose"
import ENV from "./ENV";

export const connectDb = async() =>{
    await mongoose.connect(ENV.URI);

}