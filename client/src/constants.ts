import axios from "axios"
export const API_URL = import.meta.env.ENV === "prod" ? "https://crypto-72ks.onrender.com/" : "http://localhost:3001";

export const client = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})