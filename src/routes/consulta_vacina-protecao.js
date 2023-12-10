const express = require("express");

const consulta_vacinaProtecaoController = require("../controllers/consulta_vacina-protecao");

const routes = express.Router();

/**
 * @swagger
 * /consulta/vacina/protecao:
 *   get:
 *     summary: Consulta vacinas por doença de proteção
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: query
 *         name: doenca_protecao
 *         description: Doença para a qual a vacina oferece proteção (filtro)
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso ao obter vacinas com base na doença de proteção
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
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
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
  "/consulta/vacina/protecao",
  consulta_vacinaProtecaoController.getConsultaVacinaProtecao
);

module.exports = routes;
