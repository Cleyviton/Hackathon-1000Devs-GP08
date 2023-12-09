const express = require("express");

const consulta_vacinaProtecaoController = require("../controllers/consulta_vacina-protecao");


const routes = express.Router();

routes.get("/consulta/vacina/protecao", consulta_vacinaProtecaoController.getConsultaVacinaProtecao);

module.exports = routes;