import express from "express";
import orderController from "../controllers/order-controller";
const router = express.Router()
const am = require('../middlewares/async-middleware')


// router.get('/order', orderController.addOrder)
// router.get('/orders', orderController.getOrders)
router.post('/order/add', am(orderController.addOrder))

export default router