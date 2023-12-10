const express = require("express");

const vacinaAplicadaController = require("../controllers/vacinaAplicada");

const routesVacinaAplicada = express.Router();

/**
 * @swagger
 * /vacina/aplicadas/{userId}:
 *   post:
 *     summary: Registra a aplicação de uma nova vacina para um paciente
 *     tags:
 *       - Vacinas Aplicadas
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do paciente ao qual a vacina será aplicada
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Dados da vacina a ser aplicada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina a ser aplicada
 *             data_aplicacao:
 *               type: string
 *               format: date
 *               description: Data de aplicação da vacina (no formato YYYY-MM-DD)
 *     responses:
 *       201:
 *         description: Vacina aplicada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_vacina_aplicada:
 *                   type: integer
 *                   description: ID da vacina aplicada
 *                 id_paciente:
 *                   type: integer
 *                   description: ID do paciente ao qual a vacina foi aplicada
 *                 id_vacina:
 *                   type: integer
 *                   description: ID da vacina aplicada
 *                 data_aplicacao:
 *                   type: string
 *                   format: date
 *                   description: Data de aplicação da vacina (no formato YYYY-MM-DD)
 *               example:
 *                 id_vacina_aplicada: 1
 *                 id_paciente: 456
 *                 id_vacina: 123
 *                 data_aplicacao: "2023-01-15"
 *       409:
 *         description: Conflito ao tentar registrar a vacina aplicada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem informativa
 *             example:
 *               mensagem: "Conflito ao tentar registrar a vacina aplicada"
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
routesVacinaAplicada.post(
  "/vacina/aplicadas/:userId",
  vacinaAplicadaController.createVacinaAplicada
);

/**
 * @swagger
 * /vacina/aplicadas/{userId}:
 *   delete:
 *     summary: Remove a aplicação de uma vacina para um paciente
 *     tags:
 *       - Vacinas Aplicadas
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do paciente do qual a vacina será removida
 *         schema:
 *           type: integer
 *       - in: body
 *         name: body
 *         description: Dados da vacina a ser removida
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina a ser removida
 *     responses:
 *       204:
 *         description: Vacina removida com sucesso
 *       409:
 *         description: Conflito ao tentar remover a vacina aplicada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem informativa
 *             example:
 *               mensagem: "Conflito ao tentar remover a vacina aplicada"
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
routesVacinaAplicada.delete(
  "/vacina/aplicadas/:userId",
  vacinaAplicadaController.deleteVacinaAplicada
);

/**
 * @swagger
 * /vacina/aplicadas/{userId}:
 *   get:
 *     summary: Obtém as vacinas aplicadas a um paciente específico
 *     tags:
 *       - Vacinas Aplicadas
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID do paciente para o qual as vacinas foram aplicadas
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista das vacinas aplicadas ao paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_vacina_aplicada:
 *                     type: integer
 *                     description: ID da vacina aplicada
 *                   id_vacina:
 *                     type: integer
 *                     description: ID da vacina associada
 *                   id_paciente:
 *                     type: integer
 *                     description: ID do paciente ao qual a vacina foi aplicada
 *                   data_aplicacao:
 *                     type: string
 *                     format: date
 *                     description: Data de aplicação da vacina (no formato YYYY-MM-DD)
 *               example:
 *                 - id_vacina_aplicada: 1
 *                   id_vacina: 123
 *                   id_paciente: 456
 *                   data_aplicacao: "2023-01-15"
 *                 - id_vacina_aplicada: 2
 *                   id_vacina: 124
 *                   id_paciente: 456
 *                   data_aplicacao: "2023-02-20"
 *       404:
 *         description: Nenhuma vacina aplicada encontrada para o paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem informativa
 *             example:
 *               mensagem: "Nenhuma vacina aplicada encontrada para o paciente"
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
routesVacinaAplicada.get(
  "/vacina/aplicadas/:userId",
  vacinaAplicadaController.getVacinaAplicada
);

module.exports = routesVacinaAplicada;
