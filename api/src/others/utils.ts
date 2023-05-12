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

const iv = crypto.randomBytes(16);
const key = crypto.randomBytes(32);
const algo = "aes-256-cbc";

export const GeneratePassword = (password: string) => {
  let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv);
  let encrypted = cipher.update(password);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

export const DecipherPassword = (password: string) => {
  let encryptedPassword = Buffer.from(password, "hex");
  let decipher = crypto.createDecipheriv(algo, Buffer.from(key), Buffer.from(iv.toString("hex"), "hex"));
  let decryptedPword = decipher.update(encryptedPassword);
  decryptedPword = Buffer.concat([decryptedPword, decipher.final()]);
  return decryptedPword.toString();
};

export const validatePassword = async (
  enteredPassword: string,
  savedPassword: string
) => {
  return GeneratePassword(enteredPassword) === savedPassword;
};
