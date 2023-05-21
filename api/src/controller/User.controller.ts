import { Request, Response, NextFunction } from "express";
import { AdminRepository, UserRepository } from "../model";
import { generatePassword } from "../others";
import { validatePassword } from "../others";
import { generateSignature, verifySignature } from "../others/utils";
import { sendEmail } from "../others/mailer/mailSender";
import { welcomeMail } from "../others/mailer/template";

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await UserRepository.getByPKey(req.params.email);
    res.status(200).send({
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
    if (err.cause === "NOT_FOUND") {
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

    res.status(200).send({
      User: {
        firstName,
        lastName,
        country,
        phone,
        email,
        gender,
        role: user.role,
        verified: false,
      },
      Message: "Check your email to verify your account",
      Code: "SUCCESS",
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
      throw new Error("Email and password are required", {
        cause: "BAD_REQUEST",
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
      res.status(200).send({
        token: await generateSignature({
          email: user.email || user.username,
          password: user.password,
          role: user.role,
        }),
        Message: "Login Success",
        Code: "SUCCESS",
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
      throw new Error("Login failed", { cause: "UNAUTHORIZED" });
    }
  } catch (err: any) {
    next(err);
  }
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.params.email;
    if (!email) {
      res.status(400).send({
        Message: "Email is required",
      });
      return;
    }
    const user = await UserRepository.updateOne(req.body, email);
    res.status(200).send({
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
        veried: user.verified

      },
      Message: "Profile updated",
      Code: "SUCCESS",
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await UserRepository.deleteOne(req.params.email);
    res.status(200).send({
      Message: "Success",
      Code: "DELETED",
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
        veried: user.verified
      };
    });
    res.status(200).send(userOmitPwd);
  } catch (err: any) {
    next(err);
  }
};

const verify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token } = req.body;
    if (!token) {
      throw new Error("invalid verification link", { cause: "BAD_REQUEST" });
    }
    const { email } = (await verifySignature(token as string)) as {
      email: string;
    };
    console.log(email)
    const user = await UserRepository.getByPKey(email);
    console.log(user)
    await UserRepository.updateOne(
      { ...user, verified: true },
      email
    );
    res.status(200).send({
      User: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        country: user.country,
        phone: user.phone,
        role: user.role,
        veried: true
      },
      Message: "Verified",
      Code: "SUCCESS",
    });
  } catch (err) {
    next(err);
  }
};

export const requestVerification = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email} = req.body;
    const user = await UserRepository.getByPKey(email);
    const token = await generateSignature({ email });
    const temp = welcomeMail(user.firstName||"user", token);
    await sendEmail(email, "Signup Success", temp);
    res.status(200).send({
      User: {
        firstName:user.firstName,
        lastName:user.lastName,
        country: user.country,
        phone: user.phone,
        email,
        gender: user.gender,
        role: user.role,
        verified: user.verified,
      },
      Message: "Check your email to verify your account",
      Code: "SUCCESS",
    })
  } catch (err) {
    next(err)
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
  requestVerification
} as const;
