const express = require("express");

const vacinaController = require("../controllers/vacina");

const routes = express.Router();

/**
 * @swagger
 * /vacina/create:
 *   post:
 *     summary: Cadastra uma nova vacina
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: body
 *         name: vacina
 *         description: Dados da vacina a ser cadastrada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina
 *             vacina:
 *               type: string
 *               description: Nome da vacina
 *             sigla_vacina:
 *               type: string
 *               description: Sigla da vacina
 *             doenca_protecao:
 *               type: string
 *               description: Doença para a qual a vacina oferece proteção
 *             dose:
 *               type: integer
 *               description: Número da dose
 *             id_rede:
 *               type: integer
 *               description: ID da rede relacionada à vacina
 *           required:
 *             - id_vacina
 *             - vacina
 *             - sigla_vacina
 *             - doenca_protecao
 *             - dose
 *             - id_rede
 *     responses:
 *       201:
 *         description: Sucesso ao cadastrar a vacina
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   description: Mensagem de sucesso
 *                 dados:
 *                   type: object
 *                   description: Dados da vacina cadastrada
 *                   properties:
 *                     id_vacina:
 *                       type: integer
 *                       description: ID da vacina
 *                     Vacina:
 *                       type: string
 *                       description: Nome da vacina
 *                     Sigla_vacina:
 *                       type: string
 *                       description: Sigla da vacina
 *                     Doenca_protecao:
 *                       type: string
 *                       description: Doença para a qual a vacina oferece proteção
 *                     Dose:
 *                       type: integer
 *                       description: Número da dose
 *                     Id_rede:
 *                       type: integer
 *                       description: ID da rede relacionada à vacina
 *             examples:
 *               success:
 *                 value:
 *                   mensagem: "Vacina cadastrada com sucesso"
 *                   dados:
 *                     id_vacina: 1
 *                     Vacina: "Vacina A"
 *                     Sigla_vacina: "VA"
 *                     Doenca_protecao: "Doença X"
 *                     Dose: 1
 *                     Id_rede: 123
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
