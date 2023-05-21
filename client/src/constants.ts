import axios from "axios"
export const API_URL = process.env.VITE_ENV === "prod" ? "https://crypto-72ks.onrender.com/" : "http://localhost:3001";

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})

export const ETH_WALLETS = ["123RESAASDFHEWQYUI"]
export const BTC_WALLETS = ["SDHJBSAHGWEQTYUI8E7Y"]
export const SOL_WALLETS = ["WESDJHXBVSGFAWQTY8"]
export const CONTACT = "+1234567890"
export const EMAIL = "example@gmail.com"
export const ADDRESS = "1234 Example St, Example, EX 12345"
export const TWITTER = "https://twitter.com/example"
export const FACEBOOK = "https://facebook.com/example"
export const TELEGRAM = "https://t.me/example"
export const DISCORD = "https://discord.gg/example"
