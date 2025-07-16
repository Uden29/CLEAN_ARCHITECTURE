import { IMessageBroker } from "../interfaces/IMessageBroker";

export class MessageBroker implements IMessageBroker {
  NotifyToPromotionService(product: unknown) {
    //logic
    console.log("notify");
    return true;
  }
}
