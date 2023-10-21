import {Model,DataTypes} from "sequelize"
import sequelize from "./index";

class Product extends Model{
    declare name:string;
    declare price:string;
    declare qauntity:string;
    declare description:string;
}

Product.init({
    name:{
        type: DataTypes.STRING(128),
        allowNull:false
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    qauntity:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize,
    tableName:'products',
})

export default Product