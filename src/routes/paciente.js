const express = require("express");

const pacienteController = require("../controllers/paciente");

const routes = express.Router();

routes.get("/pacientes", pacienteController.getPaciente);

module.exports = routes;
