const express = require("express");

const vacinaAplicadaController = require("../controllers/vacinaAplicada");

const routesVacinaAplicada = express.Router();

routesVacinaAplicada.get(
    "/vacina/aplicadas/:userId",
    vacinaAplicadaController.createVacinaAplicada
);

module.exports = routesVacinaAplicada;
