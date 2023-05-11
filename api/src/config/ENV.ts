import {config} from "dotenv"

config();

export default {
    URI: process.env.URI!,
    secret: process.env.SECRET!,
}