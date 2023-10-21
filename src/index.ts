import express, { Application, Request, Response, NextFunction } from "express"
require("dotenv").config()
import orderRoute from './routes/order-route'
import ErrorMiddleware from "./middlewares/error-middleware"
import ErrorHandler from "./utils/error-hanlder"
require('./models/index')
import Order from "./models/order-model"
import Product from "./models/product-model"
import OrderdProduct from "./models/orderd-product"
import Customer from "./models/customer-model"
import Company from "./models/company-model"

// Temprory synchronizing the table from here
Product.sync({ alter: true })
Customer.sync({ alter: true })
Company.sync({ alter: true })
Order.sync({ alter: true })
OrderdProduct.sync({ alter: true })

const app: Application = express()
const PORT: Number = Number(process.env.PORT || 5000)

//Body Parser Middleware
app.use(express.json())

//Api Routes
app.use('/api/v1/', orderRoute)

//Not Found Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
    return next(ErrorHandler.notFound())
});

// Error Middleware
app.use(ErrorMiddleware)

//Starting Server
app.listen(PORT, () => console.log(`Servce is listining on PORT ${PORT}`))