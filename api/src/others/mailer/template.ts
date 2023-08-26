import { ENV } from "../../config";

export const welcomeMail = (firstName: string, token: string) => {
  if (firstName.length < 1 || token.length < 5) {
    const errMessage =
      firstName.length < 1
        ? "firstname is not specified"
        : "token is not specified";
    throw new Error(errMessage);
  }
  const link = `${ENV.FRONTEND_URL}/verify/?token=${token}`;
  return `<!DOCTYPE html>
        <p>Hello ${firstName}</p>
        <a href="${link}">click here to verify</a>
        <br />
        Thank you. <br /><br />
    `;
};

export const resetMail = (firstName: string, token: string) => {
  if (token.length < 5) {
    const errMessage = "token is not specified";
    throw new Error(errMessage);
  }
  const link = `${ENV.FRONTEND_URL}/reset-password/?token=${token}`;
  return `<!DOCTYPE html>
        <p>Hello ${firstName || "user"}</p>
        <a href="${link}">click here to reset your password</a>
        <br />
        Thank you. <br /><br />
    `;
};