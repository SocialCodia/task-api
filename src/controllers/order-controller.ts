import { Request, Response, NextFunction } from "express";
import orderService from "../services/order-service";
import orderValidator from "../validators/order-validator";

class OrderController {

    async addOrder(req: Request, res: Response, next: NextFunction) {
        const body = await orderValidator.addOrder.validateAsync(req.body)
        const items = body.items;
        delete body.items;
        const response = await orderService.createOrder(body);
        console.log(response)
        return res.json(response)
    }

    async getOrder(req: Request, res: Response, next: NextFunction) {

    }

    async getOrders(req: Request, res: Response, next: NextFunction) {

    }


}

export default new OrderController;