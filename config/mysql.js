const {Sequelize} = require("sequelize");


const NODE_DEV = process.env.NODE_DEV;

const database =(NODE_DEV=== 'test')?  process.env.MYSQL_DATABASE_TEST : process.env.MYSQL_DATABASE_TEST;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect:"mysql"
    }
)

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log("MYSQL CONEXION")
    } catch (e) {
        console.log("MYSQL ERROR" , e)
    }
};


module.exports = {sequelize , dbConnectMySQL}