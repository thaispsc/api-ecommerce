db = require("../database");
const {DataTypes} = require("sequelize");

const Departamento = db.define("Departamento", {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    }
}, {
    tableName: "departamento",
    timestamps: false
});

module.exports = Departamento;