import { Request, Response, NextFunction } from "express";
import { AdminRepository, UserRepository } from "../model";
import { generatePassword } from "../others";
import { validatePassword } from "../others";
import { generateSignature, verifySignature } from "../others/utils";
import { sendEmail } from "../others/mailer/mailSender";
import { welcomeMail,resetMail } from "../others/mailer/template";
import { CODES, ERROR_CAUSES, ERROR_MESSAGES, SIGNATURE_USAGE, STATUS_CODES, SUCCESS_MESSAGES } from "../constants";
import { JwtPayload } from "jsonwebtoken";
import transformers from "../others/transformers";

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepository.getByPKey(req.params.email);
    res.status(STATUS_CODES.SUCCESS).send({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      country: user.country,
      phone: user.phone,
      role: user.role,
      gender: user.gender,
    });
  } catch (err: any) {
    let status = 500;
    if (err.cause === ERROR_CAUSES.NOT_FOUND) {
      status = 404;
    }
    res.status(status).send({
      Message: err.message,
    });
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, firstName, lastName, country, phone, gender } =
      req.body;
    const hashedPwd = generatePassword(password);
    const user = await UserRepository.addOne(
      {
        email,
        password: hashedPwd,
        firstName,
        lastName,
        country,
        gender,
        phone,
        role: "user",
        verified: false,
      },
      email
    );
    const token = await generateSignature({ email });
    const temp = welcomeMail(firstName, token);
    const response = await sendEmail(email, "Signup Success", temp);

    res.status(STATUS_CODES.SUCCESS).send({
      User: transformers.toUserObject(user),
      Message: SUCCESS_MESSAGES.CHECK_MAIL,
      Code: CODES.SUCCESS,
    });
  } catch (err: any) {
    next(err);
  }
};

const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.query.role;
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error(ERROR_MESSAGES.EMAIL_AND_PWD_REQUIRED, {
        cause: ERROR_CAUSES.BAD_REQUEST,
      });
    }
    let user: any;
    switch (role) {
      case "admin":
        user = await AdminRepository.getByPKey(email);
        break;
      default:
        user = await UserRepository.getByPKey(email);
    }

    if (user && validatePassword(password, user.password)) {
      res.status(STATUS_CODES.SUCCESS).send({
        token: await generateSignature({
          email: user.email || user.username,
          password: user.password,
          role: user.role,
        }),
        Message: SUCCESS_MESSAGES.SUCCESS,
        Code: CODES.SUCCESS,
        user: {
          email: user.email || user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          country: user.country,
          phone: user.phone,
          gender: user.gender,
          role: user.role,
          verified: user.verified,
        },
      });
    } else {
      throw new Error(ERROR_MESSAGES.LOGIN_FAILED, { cause: ERROR_CAUSES.UNAUTHORIZED });
    }
  } catch (err: any) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.params.email;
    if (!email) {
      throw new Error (ERROR_MESSAGES.EMAIL_REQUIRED, {cause: ERROR_CAUSES.BAD_REQUEST})
    }
    const user = await UserRepository.updateOne(req.body, email);
    res.status(STATUS_CODES.SUCCESS).send({
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
        veried: user.verified,
      },
      Message: SUCCESS_MESSAGES.PROFILE_UPDATED,
      Code: CODES.SUCCESS,
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserRepository.deleteOne(req.params.email);
    res.status(STATUS_CODES.SUCCESS).send({
      Message: SUCCESS_MESSAGES.SUCCESS,
      Code: CODES.DELETED,
      email: req.params.email,
    });
  } catch (err: any) {
    next(err);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserRepository.getAll();
    const userOmitPwd = users.map((user) => {
      return {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
        veried: user.verified,
      };
    });
    res.status(STATUS_CODES.SUCCESS).send(userOmitPwd);
  } catch (err: any) {
    next(err);
  }
};

const verify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;
    if (!token) {
      throw new Error(ERROR_MESSAGES.INVALID_VERIFICATION_LINK, { cause: ERROR_CAUSES.BAD_REQUEST });
    }
    const { email } = (await verifySignature(token as string)) as {
      email: string;
    };
    const user = await UserRepository.getByPKey(email);
    await UserRepository.updateOne({ ...user, verified: true }, email);
    res.status(STATUS_CODES.SUCCESS).send({
      User: transformers.toUserObject(user),
      Message: SUCCESS_MESSAGES.VERIFIED,
      Code: CODES.SUCCESS,
    });
  } catch (err) {
    next(err);
  }
};

export const requestVerification = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const user = await UserRepository.getByPKey(email);
    const token = await generateSignature({ email });
    const temp = welcomeMail(user.firstName || "user", token);
    await sendEmail(email, SUCCESS_MESSAGES.SUCCESS, temp);
    res.status(STATUS_CODES.SUCCESS).send({
      User: transformers.toUserObject(user),
      Message: SUCCESS_MESSAGES.CHECK_MAIL,
      Code: CODES.SUCCESS,
    });
  } catch (err) {
    next(err);
  }
};

const requestReset = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const user = await UserRepository.getByPKey(email);
    const token = await generateSignature({ email, password:user.password, usage: SIGNATURE_USAGE.RESET });
    const temp = resetMail(user.firstName || "user", token);
    await sendEmail(email, SUCCESS_MESSAGES.SUCCESS, temp);
    res.status(STATUS_CODES.SUCCESS).send({
      Message: SUCCESS_MESSAGES.CHECK_RESET_MAIL,
      Code: CODES.SUCCESS,
    })
  } catch (err) {
    next(err);
  }
};

const verifyReset = async(  
  req: Request,
  res: Response,
  next: NextFunction) =>{
  try {
    const { token, password: newPassword } = req.body;
    const {email, password:oldPassword,usage} =  await verifySignature(token) as JwtPayload;
    const user = await UserRepository.getByPKey(email);
    if(usage !== SIGNATURE_USAGE.RESET || user.password !== oldPassword){
      throw new Error (ERROR_MESSAGES.INVALID_TOKEN, {cause: ERROR_CAUSES.UNAUTHORIZED})
    }
    await UserRepository.updateOne({...user, password: newPassword}, email);
    res.status(STATUS_CODES.SUCCESS).send({
      Message: SUCCESS_MESSAGES.CHECK_RESET_MAIL,
      Code: CODES.SUCCESS,
    })
  } catch (err) {
    next(err);
  }
}

export default {
  getOne,
  getAll,
  create,
  update,
  deleteOne,
  loginController,
  verify,
  requestReset,
  requestVerification,
  verifyReset,
} as const;
