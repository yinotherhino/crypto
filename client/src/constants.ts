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