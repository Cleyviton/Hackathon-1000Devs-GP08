const express = require("express");

const consultaVacinaController = require("../controllers/consulta_vacina");

const routes = express.Router();

routes.get("/consulta/vacina", consultaVacinaController.getConsultaVacina);
routes.get(
    "/consulta/vacina/idade/:idade",
    consultaVacinaController.getConsultaVacinaPorIdade
);
routes.get(
    "/consulta/vacina/mes/:mes",
    consultaVacinaController.getConsultaVacinaPorMes
);
routes.get(
    "/consulta/vacina/range/idade/:idade",
    consultaVacinaController.getConsultaVacinaPorIdadeRange
);
routes.get(
    "/consulta/vacina/range/mes/:mes",
    consultaVacinaController.getConsultaVacinaPorMesRange
);
routes.get(
    "/consulta/vacina/paciente/:id_paciente",
    consultaVacinaController.getConsultaVacinaPorPaciente
);

module.exports = routes;
