const Sequelize = require("sequelize");

const DB_NAME = "ecommerce";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

let db = {};

try {db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch(error) {
    console.log("Error ao tentar uma conexão com banco dados");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    }  catch(error) {
        console.log("Erro ao tentar se conectar ao banco de dados!");
    }
}

Object.assign(db, {
    hasConnection,
  });

module.exports = db;