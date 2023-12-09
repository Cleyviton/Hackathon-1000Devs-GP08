const express = require("express");

const vacinaAplicadaController = require("../controllers/vacinaAplicada");

const routesVacinaAplicada = express.Router();

routesVacinaAplicada.get(
    "/vacina/aplicadas/:userId",
    vacinaAplicadaController.getVacinaAplicada
);

routesVacinaAplicada.post(
    "/vacina/aplicadas/:userId",
    vacinaAplicadaController.createVacinaAplicada
);

routesVacinaAplicada.delete(
    "/vacina/aplicadas/:userId",
    vacinaAplicadaController.deleteVacinaAplicada
);

module.exports = routesVacinaAplicada;
