const express = require("express");

const vacinaController = require("../controllers/vacina");

const routes = express.Router();

routes.post("/vacina/create", vacinaController.cadastroVacina);
routes.put("/vacina/update", vacinaController.editarVacina);
routes.post(
  "/vacina/periodoano/create",
  vacinaController.cadastroPeriodoAplicacaoAno
);
routes.delete(
  "/vacina/periodoano/delete",
  vacinaController.removerPeriodoAplicacaoAno
);
routes.post(
  "/vacina/periodomes/create",
  vacinaController.cadastroPeriodoAplicacaoMes
);
routes.delete(
  "/vacina/periodomes/delete",
  vacinaController.removerPeriodoAplicacaoMes
);

module.exports = routes;
