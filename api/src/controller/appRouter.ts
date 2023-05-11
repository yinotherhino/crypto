import express, { Express, Request, Response,NextFunction } from "express";
import userController from "./User.controller"
import adminController from "./Admin.controller"
import { UserRepository } from "../model";
import { restrictTo } from "../others";


const userRouter = express.Router();
const adminRouter = express.Router();
const PremiumRouter = express.Router();
const indexRouter = express.Router();
const loginRouter = express.Router();

loginRouter.post("/", async(req:Request,res:Response, next: NextFunction)=>{
    const {email, password} = req.body;
    const user = await UserRepository.getByPKey(email);
    
    if (user && user.password === password) {
        res.status(200).send({
            token: "",
            Message: "Login Success",
            Code: "SUCCESS"
        })
    }
    else{
        res.status(403).send({
            Message: "Login failed",
            Code: "FAILURE"
        })
    }
})

userRouter.post("/", userController.create)
userRouter.use(restrictTo("user"))
userRouter.get("/:id", userController.getOne)
userRouter.get("/", userController.getAll)
userRouter.patch("/:email", userController.update)
userRouter.delete("/", userController.deleteOne)

adminRouter.use(restrictTo("admin"))
adminRouter.get("/:id", adminController.getOne)
adminRouter.get("/", adminController.getAll)
adminRouter.post("/", adminController.create)
adminRouter.patch("/:id", adminController.update)
adminRouter.delete("/", adminController.deleteOne)

indexRouter.get("/", (req:Request,res:Response)=>{
    res.status(200).send({
        Message: "ping"
    })
})

export default (app: Express) => {
  app.use("/users", userRouter);
  app.use("/login", loginRouter);
  app.use("/admin", adminRouter);
  app.use("/premium", PremiumRouter);
  app.use("/", indexRouter);
  app.use("*", (req: Request, res: Response) => {
    res.status(404).send({
      Message: "Not Found",
      Code: "NOT_FOUND",
    });
  })
};
