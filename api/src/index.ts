import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDb } from "./config";
import route from "./controller/appRouter"

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"*",allowedHeaders:"*"}));
app.use(express.urlencoded({ extended: true }));

connectDb().catch(err => console.log(err));
route(app);





export default app;