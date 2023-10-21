import { Sequelize } from "sequelize";

const DB_NAME: string = process.env.DB_NAME || '';
const DB_USER: string = process.env.DB_USER || '';
const DB_PASS: string = process.env.DB_PASS || '';
const DB_HOST: string = process.env.DB_HOST || '';

const sequilize = new Sequelize(
    DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql'
}
)

try {
    sequilize.authenticate();
    console.log("Successfully connected with Database Server")
}
catch (err) {
    console.log("Failed to connect with Databse Server")
}

sequilize.sync({ alter: true })

export default sequilize
