import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: String,
    fullName:String, 
    dob: String, 
    role:String, 
    password: String
});

export const User = mongoose.model('User', UserSchema);
