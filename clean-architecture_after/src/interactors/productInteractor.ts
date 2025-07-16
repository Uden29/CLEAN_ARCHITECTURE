import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/IProductRepoistory";

export class ProductInteractor implements IProductInteractor {
  private repository: IProductRepository;
  private mailer: IMailer;
  private broker: IMessageBroker;

  constructor(
    repository: IProductRepository,
    mailer: IMailer,
    broker: IMessageBroker
  ) {
    this.repository = repository;
    this.mailer = mailer;
    this.broker = broker;
  }
  async createProduct(input: any) {
    const data = this.repository.create(input);
    //do some check
    await this.broker.NotifyToPromotionService(data);

    return data;
  }
  async updateStock(id: number, stock: number) {
    const data = await this.repository.update(id, stock);

    await this.mailer.SendEmail("someone@someone.com", data);

    return data;
  }
  async getProducts(limit: number, offset: number) {
    return this.repository.find(limit, offset);
  }
}
