import express, { Express, Request, Response, NextFunction } from "express";
import userController from "./User.controller";
import adminController from "./Admin.controller";
import { restrictTo } from "../others";

const userRouter = express.Router();
const adminRouter = express.Router();
const PremiumRouter = express.Router();
const indexRouter = express.Router();
const loginRouter = express.Router();

loginRouter.post(
  "/",
  userController.loginController
);

userRouter.post("/", userController.create);
userRouter.post("/verify", userController.verify);
userRouter.post("/request-verification",userController.requestVerification)
userRouter.use(restrictTo("user"));
userRouter.get("/:id", userController.getOne);
userRouter.get("/", userController.getAll);
userRouter.patch("/:email", userController.update);
userRouter.delete("/", userController.deleteOne);

adminRouter.use(restrictTo("admin"));
adminRouter.get("/:id", adminController.getOne);
adminRouter.get("/", adminController.getAll);
adminRouter.post("/", adminController.create);
adminRouter.patch("/:id", adminController.update);
adminRouter.delete("/", adminController.deleteOne);

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    Message: "ping",
  });
});

export default (app: Express) => {
  app.use("/users", userRouter);
  app.use("/login", loginRouter);
  app.use("/admins", adminRouter);
  app.use("/premiums", PremiumRouter);
  app.use("/", indexRouter);
  app.use("*", (req: Request, res: Response) => {
    res.status(404).send({
      Message: "Page Not Found",
      Code: "NOT_FOUND",
    });
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    let status = 500;
    let message = "";
    switch (err.cause) {
      case "DUPLICATE":
        status = 409;
        break;
      case "NOT_FOUND":
        status = 404;
        break;
      case "UNAUTHORIZED":
        status = 403;
        break;
      case "BAD_REQUEST":
          status = 400;
          break;
      default:
        status = 500;
        message = "an error occured.";
        break;
    }
    message = message.length > 0 ? message : err.message;

    res.status(status).send({
      Message: message,
      Code: err.cause,
    });
  });
};
