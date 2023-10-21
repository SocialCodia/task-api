import { Model, DataTypes } from "sequelize"
import sequelize from './index'
import Order from "./order-model";

class Customer extends Model {
    declare id: number;
    declare name: string;
}

Customer.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'customers',
    sequelize
});

Customer.hasMany(Order)

export default Customer