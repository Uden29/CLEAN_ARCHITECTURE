import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {
  private interactor: IProductInteractor;
  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }

  //Use Cases - Business Logic

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      // validate logic

      const data = await this.interactor.createProduct(body);
      //   await NotifyToPromotionService(product.rows[0]);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(`${req.query.offset}`) || 0;
      const limit = parseInt(`${req.query.limit}`) || 10;

      const data = await this.interactor.getProducts(limit, offset);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const stock = req.body.stock;

      const data = await this.interactor.updateStock(id, stock);

      //   await SendSendGridEmail(product.rows[0]);

      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
