import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "36bfdd7ced18ae",
    pass: "5f2ed28c1b77b1",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Thallysson <sthallysson.dev@gmail.com>",
      subject,
      html: body,
    });
  }
}
