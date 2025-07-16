import { IMailer } from "../interfaces/IMailer";

export class Mailer implements IMailer {
  SendEmail(to: string, product: unknown) {
    //logic
    console.log("sending email");
    return true;
  }
}
