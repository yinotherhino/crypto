import express from "express";
import morgan from "morgan";
import cors from "cors";
import route from "./controller/appRouter"

const app = express();
const port = process.env.PORT || 3001;
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:"*",allowedHeaders:"*"}));
app.use(express.urlencoded({ extended: true }));

route(app);

app.listen(port, ()=>{
    console.log(`server started on port ${port}`)
})

export default app;
