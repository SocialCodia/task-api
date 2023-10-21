import Joi from "joi";


class OrderValidator {

    addOrder = Joi.object({
        customerId: Joi.string().required(),
        comapanyId: Joi.string().required(),
        orderNumber: Joi.string().required(),
        orderDate: Joi.date().required(),
        shipmentDate: Joi.date().required(),
        customerNote: Joi.string().required().min(5).max(1000).messages({
            "string.min": "Note Should Be Minimum 5 Character Long",
            "string.max": "Note Should Less Than 1000 Character"
        }),
        total: Joi.number().required().min(1),
        taxes: Joi.number().required(), // What is taxes,Is it percentage or total tax amount on total.?
        grandTotal: Joi.number().required(),
        paymentStatus: Joi.bool().required(),
        packedStatus: Joi.bool().required(),
        shipStatus: Joi.bool().required(),
        deliveryStatus: Joi.bool().required(),
        fromQuotation: Joi.string().required(), // I don't know what is from quatation,
        items: Joi.object({
            productId: Joi.number().required(),
            quantity: Joi.number().required(),
            unitPrice: Joi.number().required(),
            tax: Joi.number().required(),
            amount: Joi.number().required(),
        }).required()
    });

}


export default new OrderValidator;