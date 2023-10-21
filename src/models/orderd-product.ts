import { Model, DataTypes, ForeignKey } from 'sequelize'
import sequelize from './index';
import Order from './order-model';

class OrderdProduct extends Model {
    declare quantity: string;
    declare unitPrice: string;
    declare tax: string;
    declare amount: string;
    declare orderId: ForeignKey<Order['id']>
}

OrderdProduct.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unitPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tax: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        tableName: 'orderd-products',
        sequelize
    })

export default OrderdProduct;