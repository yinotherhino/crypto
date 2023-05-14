import jwt from "jsonwebtoken";
import ENV from "../config/ENV";
import crypto from "crypto";

export const generateSignature = async (payload: {
  [key: string]: string | number | undefined | boolean;
}) => {
  return jwt.sign(payload, ENV.secret, { expiresIn: "10d" });
};

export const verifySignature = async (signature: string) => {
  return jwt.verify(signature, ENV.secret);
};

const iv = Buffer.from("kshjdgsjak109827");
const key = Buffer.from("dhgvbsanuyt87636hjdgdfsfdsadf23d");
const algo = "aes-256-cbc";

const decrypt = (text: string, personalIv?: string) => {
  let encrypted = Buffer.from(text, "hex");
  let decipher = crypto.createDecipheriv(
    algo,
    Buffer.from(key),
    personalIv || iv
  );
  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const encrypt = (text: string) => {
  let cipher = crypto.createCipheriv(algo, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

export const generatePassword = (password: string) => {
  const encrypted = encrypt(password);
  return encrypted;
};

export const generateToken = (payload: { email: string; password: string }) => {
  return encrypt(JSON.stringify(payload));
};

export const decryptToken = (token: string) => {
  return decrypt(token);
};

export const decipherPassword = (password: string) => {
  return decrypt(password);
};

export const validatePassword = (
  enteredPassword: string,
  savedPassword: string
) => {
  return enteredPassword === decipherPassword(savedPassword);
};

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

export const validator = (obj: any, typeMap: { [key: string]: string }, requireMap: {[key:string]:boolean}) => {
  const typedKeys = Object.keys(typeMap);
  const requiredKeys = Object.keys(requireMap);
  const errors = [];
  for (const key in typedKeys) {
    typeof obj[key] !== typeMap[key] &&
      errors.push(`Invalid ${key} type, expected ${typeMap[key]}`);
  }
  for(const key in requiredKeys){
    !obj[key] && errors.push(`${key} is required`)
  }
  return errors;
};
