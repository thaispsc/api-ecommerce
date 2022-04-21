const express = require("express");
const DepartamentoController = require("../controllers/departamento.controller");
const routes = express.Router();

routes.get("/departamento", DepartamentoController.listar);
routes.post("/departamento/adicionar", DepartamentoController.adicionar);
routes.put("/departamento/atualizar/:codigo", DepartamentoController.atualizar);
routes.delete("/departamento/deletar/:codigo", DepartamentoController.deletar);


module.exports = routes;