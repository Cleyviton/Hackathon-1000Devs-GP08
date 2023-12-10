const express = require("express");

const consultaVacinaController = require("../controllers/consulta_vacina");

const routes = express.Router();
/**
 * @swagger
 * /consulta/vacina:
 *   get:
 *     summary: Consulta informações sobre vacinas aplicadas e redes associadas
 *     tags:
 *       - ConsultaVacina
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas e redes associadas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_vacina:
 *                     type: integer
 *                     description: ID da vacina
 *                   vacina:
 *                     type: string
 *                     description: Nome da vacina
 *                   sigla_vacina:
 *                     type: string
 *                     description: Sigla da vacina
 *                   doenca_protecao:
 *                     type: string
 *                     description: Doença para a qual a vacina oferece proteção
 *                   dose:
 *                     type: integer
 *                     description: Número da dose
 *                   id_rede:
 *                     type: integer
 *                     description: ID da rede relacionada à vacina
 *                   nome_rede:
 *                     type: string
 *                     description: Nome da rede
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
 *                 nome_rede: "Rede A"
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               mensagem: "Erro interno do servidor"
 */
routes.get("/consulta/vacina", consultaVacinaController.getConsultaVacina);

/**
 * @swagger
 * /consulta/vacina/idade/{idade}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes de uma determinada idade
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: idade
 *         description: Idade dos pacientes a serem consultados
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes de uma determinada idade
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_paciente:
 *                     type: integer
 *                     description: ID do paciente
 *                   nome:
 *                     type: string
 *                     description: Nome do paciente
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do paciente
 *                   idade:
 *                     type: integer
 *                     description: Idade do paciente
 *                   vacinas:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_vacina:
 *                           type: integer
 *                           description: ID da vacina
 *                         data_aplicacao:
 *                           type: string
 *                           format: date
 *                           description: Data de aplicação da vacina
 *                         vacina:
 *                           type: string
 *                           description: Nome da vacina
 *                         sigla_vacina:
 *                           type: string
 *                           description: Sigla da vacina
 *                         doenca_protecao:
 *                           type: string
 *                           description: Doença para a qual a vacina oferece proteção
 *                         dose:
 *                           type: integer
 *                           description: Número da dose
 *                         id_rede:
 *                           type: integer
 *                           description: ID da rede relacionada à vacina
 *             example:
 *               - id_paciente: 1
 *                 nome: "Paciente A"
 *                 data_nascimento: "1990-01-01"
 *                 idade: 33
 *                 vacinas:
 *                   - id_vacina: 1
 *                     data_aplicacao: "2023-01-01"
 *                     vacina: "Vacina A"
 *                     sigla_vacina: "VA"
 *                     doenca_protecao: "Doença X"
 *                     dose: 1
 *                     id_rede: 123
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               mensagem: "Erro interno do servidor"
 */
routes.get(
  "/consulta/vacina/idade/:idade",
  consultaVacinaController.getConsultaVacinaPorIdade
);

/**
 * @swagger
 * /consulta/vacina/mes/{mes}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes de um determinado mês de nascimento
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: mes
 *         description: Mês de nascimento dos pacientes a serem consultados
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes de um determinado mês de nascimento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_paciente:
 *                     type: integer
 *                     description: ID do paciente
 *                   nome:
 *                     type: string
 *                     description: Nome do paciente
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do paciente
 *                   idade:
 *                     type: integer
 *                     description: Idade do paciente
 *                   vacinas:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_vacina:
 *                           type: integer
 *                           description: ID da vacina
 *                         data_aplicacao:
 *                           type: string
 *                           format: date
 *                           description: Data de aplicação da vacina
 *                         vacina:
 *                           type: string
 *                           description: Nome da vacina
 *                         sigla_vacina:
 *                           type: string
 *                           description: Sigla da vacina
 *                         doenca_protecao:
 *                           type: string
 *                           description: Doença para a qual a vacina oferece proteção
 *                         dose:
 *                           type: integer
 *                           description: Número da dose
 *                         id_rede:
 *                           type: integer
 *                           description: ID da rede relacionada à vacina
 *             example:
 *               - id_paciente: 1
 *                 nome: "Paciente A"
 *                 data_nascimento: "1990-01-01"
 *                 idade: 33
 *                 vacinas:
 *                   - id_vacina: 1
 *                     data_aplicacao: "2023-01-01"
 *                     vacina: "Vacina A"
 *                     sigla_vacina: "VA"
 *                     doenca_protecao: "Doença X"
 *                     dose: 1
 *                     id_rede: 123
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               mensagem: "Erro interno do servidor"
 */
routes.get(
  "/consulta/vacina/mes/:mes",
  consultaVacinaController.getConsultaVacinaPorMes
);

/**
 * @swagger
 * /consulta/vacina/range/idade/{idade}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes de um determinado intervalo de meses de nascimento
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: mes
 *         description: Intervalo de meses de nascimento dos pacientes a serem consultados (0 a {mes})
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes de um determinado intervalo de meses de nascimento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_paciente:
 *                     type: integer
 *                     description: ID do paciente
 *                   nome:
 *                     type: string
 *                     description: Nome do paciente
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do paciente
 *                   idade:
 *                     type: integer
 *                     description: Idade do paciente
 *                   vacinas:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_vacina:
 *                           type: integer
 *                           description: ID da vacina
 *                         data_aplicacao:
 *                           type: string
 *                           format: date
 *                           description: Data de aplicação da vacina
 *                         vacina:
 *                           type: string
 *                           description: Nome da vacina
 *                         sigla_vacina:
 *                           type: string
 *                           description: Sigla da vacina
 *                         doenca_protecao:
 *                           type: string
 *                           description: Doença para a qual a vacina oferece proteção
 *                         dose:
 *                           type: integer
 *                           description: Número da dose
 *                         id_rede:
 *                           type: integer
 *                           description: ID da rede relacionada à vacina
 *             example:
 *               - id_paciente: 1
 *                 nome: "Paciente A"
 *                 data_nascimento: "1990-01-01"
 *                 idade: 33
 *                 vacinas:
 *                   - id_vacina: 1
 *                     data_aplicacao: "2023-01-01"
 *                     vacina: "Vacina A"
 *                     sigla_vacina: "VA"
 *                     doenca_protecao: "Doença X"
 *                     dose: 1
 *                     id_rede: 123
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               mensagem: "Erro interno do servidor"
 */
routes.get(
  "/consulta/vacina/range/idade/:idade",
  consultaVacinaController.getConsultaVacinaPorIdadeRange
);

/**
 * @swagger
 * /consulta/vacina/range/mes/{mes}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes de um determinado intervalo de meses de nascimento
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: mes
 *         description: Intervalo de meses de nascimento dos pacientes a serem consultados (0 a {mes})
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes de um determinado intervalo de meses de nascimento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_paciente:
 *                     type: integer
 *                     description: ID do paciente
 *                   nome:
 *                     type: string
 *                     description: Nome do paciente
 *                   data_nascimento:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do paciente
 *                   idade:
 *                     type: integer
 *                     description: Idade do paciente
 *                   vacinas:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id_vacina:
 *                           type: integer
 *                           description: ID da vacina
 *                         data_aplicacao:
 *                           type: string
 *                           format: date
 *                           description: Data de aplicação da vacina
 *                         vacina:
 *                           type: string
 *                           description: Nome da vacina
 *                         sigla_vacina:
 *                           type: string
 *                           description: Sigla da vacina
 *                         doenca_protecao:
 *                           type: string
 *                           description: Doença para a qual a vacina oferece proteção
 *                         dose:
 *                           type: integer
 *                           description: Número da dose
 *                         id_rede:
 *                           type: integer
 *                           description: ID da rede relacionada à vacina
 *             example:
 *               - id_paciente: 1
 *                 nome: "Paciente A"
 *                 data_nascimento: "1990-01-01"
 *                 idade: 33
 *                 vacinas:
 *                   - id_vacina: 1
 *                     data_aplicacao: "2023-01-01"
 *                     vacina: "Vacina A"
 *                     sigla_vacina: "VA"
 *                     doenca_protecao: "Doença X"
 *                     dose: 1
 *                     id_rede: 123
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               mensagem: "Erro interno do servidor"
 */
routes.get(
  "/consulta/vacina/range/mes/:mes",
  consultaVacinaController.getConsultaVacinaPorMesRange
);
routes.get(
  "/consulta/vacina/paciente/:id_paciente",
  consultaVacinaController.getConsultaVacinaPorPaciente
);

module.exports = routes;
