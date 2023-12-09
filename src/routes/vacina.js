const express = require("express");

const vacinaController = require("../controllers/vacina");

const routes = express.Router();

/**
 * @swagger
 * /vacina/cadastro:
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
 *             Id_vacina:
 *               type: integer
 *               description: ID da vacina
 *             Vacina:
 *               type: string
 *               description: Nome da vacina
 *             Sigla_vacina:
 *               type: string
 *               description: Sigla da vacina
 *             Doenca_protecao:
 *               type: string
 *               description: Doença para a qual a vacina oferece proteção
 *             Dose:
 *               type: integer
 *               description: Número da dose
 *             Id_rede:
 *               type: integer
 *               description: ID da rede relacionada à vacina
 *           required:
 *             - Id_vacina
 *             - Vacina
 *             - Sigla_vacina
 *             - Doenca_protecao
 *             - Dose
 *             - Id_rede
 *     responses:
 *       204:
 *         description: Sucesso ao cadastrar a vacina
 *       500:
 *         description: Erro interno do servidor

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
