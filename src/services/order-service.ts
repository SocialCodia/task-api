import { Request, Response, NextFunction } from "express";
import Order from "../models/order-model";

class OrderService {

    createOrder = async (data: any) => await Order.create({ ...data })


}

export default new OrderService;