import nodemailer from "nodemailer";
import {ENV} from "../../config";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.GMAIL_USER,
    pass: ENV.GMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (recipient: string, subject: string, html: string) => {
  try {
    if(recipient.length<5 || subject.length<1 || html.length<1){
      const errorMessage = recipient.length<5 ? "recipient(recipient) not specified" : subject.length<1  ? "subject not specified" : "html template not specified"
      throw new Error(errorMessage)
    }
    const response = await transport.sendMail({
      from: ENV.FROM_ADMIN_EMAIL,
      to: recipient,
      subject,
      html,
    });
    return response;
  } catch (error) {
    throw(error);
  }
};
