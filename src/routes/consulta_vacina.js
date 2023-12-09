const express = require("express");

const consultaVacinaController = require("../controllers/consulta_vacina");

const routes = express.Router();

routes.get("/consulta/vacina", consultaVacinaController.getConsultaVacina);
routes.get(
  "/consulta/vacina/idade/:idade",
  consultaVacinaController.getConsultaVacinaPorIdade
);

module.exports = routes;
