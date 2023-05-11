import jwt from "jsonwebtoken";
import ENV from "../config/ENV";
import crypto from "crypto";

export const GenerateSignature = async (payload: {
  [key: string]: string | number | undefined | boolean;
}) => {
  return jwt.sign(payload, ENV.secret, { expiresIn: "10d" });
};

export const verifySignature = async (signature: string) => {
  return jwt.verify(signature, ENV.secret);
};

export const GeneratePassword = (password: string) => {
  return crypto.createCipheriv("sha256", ENV.secret, "1234")
    .update(password,"utf-8", "hex")
};

export const DecipherPassword = (password: string) => {
    let decipher = crypto.createDecipheriv("sha256", ENV.secret, "1234")
    let pword = decipher.update(password, "hex", "utf-8")
    pword += decipher.final("utf8");
    return password;
}

export const validatePassword = async (
  enteredPassword: string,
  savedPassword: string,
) => {
  return GeneratePassword(enteredPassword) === savedPassword;
};
