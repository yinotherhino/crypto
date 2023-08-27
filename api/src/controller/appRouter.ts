import express, { Express, Request, Response, NextFunction } from "express";
import userController from "./User.controller";
import adminController from "./Admin.controller";
import withdrawController from "./Withdraw.controller";
import depositController from "./Deposit.controller";
import balanceController from "./Balance.controller";
import { restrictTo } from "../others";
import { CODES, ERROR_CAUSES, ERROR_MESSAGES, STATUS_CODES } from "../constants";

const userRouter = express.Router();
const adminRouter = express.Router();
const PremiumRouter = express.Router();
const indexRouter = express.Router();
const loginRouter = express.Router();
const resetRouter = express.Router();
const withdrawRouter = express.Router();
const depositRouter = express.Router();
const balanceRouter = express.Router();

loginRouter.post(
  "/",
  userController.loginController
);
resetRouter.post("/", userController.requestReset)
resetRouter.put("/", userController.verifyReset)

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
adminRouter.post("/addtobalance", adminController.addBalance);
adminRouter.get("/balance", adminController.getAllBalance);

withdrawRouter.use(restrictTo("user"));
withdrawRouter.post("/", withdrawController.create);
withdrawRouter.get("/", withdrawController.getAll);

depositRouter.use(restrictTo("user"));
depositRouter.post("/", depositController.create);
depositRouter.get("/", depositController.getAll);

balanceRouter.use(restrictTo("user"));
balanceRouter.get("/:email", balanceController.getOne);


indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    Message: "ping",
  });
});

export default (app: Express) => {
  app.use("/users", userRouter);
  app.use("/withdraw", withdrawRouter);
  app.use("/deposit", withdrawRouter);
  app.use("/balance", balanceRouter);
  app.use("/login", loginRouter);
  app.use("/reset-password", resetRouter);
  app.use("/admins", adminRouter);
  app.use("/premiums", PremiumRouter);
  app.use("/", indexRouter);
  app.use("*", (req: Request, res: Response) => {
    res.status(404).send({
      Message: ERROR_MESSAGES.PAGE_NOT_FOUND,
      Code: CODES.NOT_FOUND,
    });
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    let status = STATUS_CODES.SERVER_ERROR;
    let message = "";
    switch (err.cause) {
      case ERROR_CAUSES.DUPLICATE:
        status = STATUS_CODES.DUPLICATE;
        break;
      case ERROR_CAUSES.NOT_FOUND:
        status = STATUS_CODES.NOT_FOUND;
        break;
      case ERROR_CAUSES.UNAUTHORIZED:
        status = STATUS_CODES.UNAUTHORIZED;
        break;
      case ERROR_CAUSES.BAD_REQUEST:
          status = STATUS_CODES.BAD_REQUEST;
          break;
      default:
        status = STATUS_CODES.SERVER_ERROR;
        message = ERROR_MESSAGES.DEFAULT;
        break;
    }
    message = message.length > 0 ? message : err.message;

    res.status(status).send({
      Message: message,
      Code: err.cause,
    });
  });
};
