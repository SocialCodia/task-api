

# ADD ORDER :

*ENDPONT* 

http://localhost:5000/api/v1/order/add

*BODY*

```
{
    "customerId":"1",
    "comapanyId":"1",
    "orderDate":"12-12-2020",
    "orderNumber":"345678",
    "shipmentDate":"12-12-2020",
    "customerNote":"This is customer note",
    "total":"12",
    "taxes":"12",
    "grandTotal":"12",
    "paymentStatus":true,
    "packedStatus":true,
    "shipStatus":true,
    "deliveryStatus":true,
    "fromQuotation":"I don't know what is this?",
    "items":[
        {
        "productId":"1",
        "quantity":1,
        "unitPrice":100,
        "tax":10,
        "amount":110
    },
    {   
        "productId":"1",
        "quantity":1,
        "unitPrice":100,
        "tax":10,
        "amount":110
    }
    ]
}
```