const express = require("express");

const consultaVacinaController = require("../controllers/consulta_vacina");

const routes = express.Router();

routes.get("/consulta/vacina", consultaVacinaController.getConsultaVacina);

module.exports = routes;
