import {config} from "dotenv"

config();

export default {
    URI: process.env.URI!,
    secret: process.env.SECRET! || "secret",
    GMAIL_USER: "",
    GMAIL_PASS: "",
    FROM_ADMIN_EMAIL: "",
    FRONTEND_URL: ""
}