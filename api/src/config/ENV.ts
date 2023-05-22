import {config} from "dotenv"

config();

export default {
    URI: process.env.URI!,
    secret: process.env.SECRET! || "secret",
    GMAIL_USER: process.env.GMAIL_USER!,
    GMAIL_PASS: process.env.GMAIL_PASS!,
    FROM_ADMIN_EMAIL: process.env.FROM_ADMIN_EMAIL!,
    FRONTEND_URL: process.env.FRONTEND_URL
}