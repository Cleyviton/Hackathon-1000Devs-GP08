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

/**
 * @swagger
 * /vacina/periodoano/create:
 *   post:
 *     summary: Cadastra um novo período de aplicação por ano
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: body
 *         name: vacina
 *         description:  Dados do período de aplicação por ano a ser cadastrado
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina associada ao período de aplicação por ano
 *             qtd_ano_inicial:
 *               type: integer
 *               description: Quantidade inicial de anos
 *             qtd_ano_final:
 *               type: integer
 *               description: Quantidade final de anos
 *             desc_ano:
 *               type: string
 *               description: Descrição do ano
 *           required:
 *             - id_vacina
 *             - qtd_ano_inicial
 *             - qtd_ano_final
 *             - desc_ano
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
 */ routes.post(
  "/vacina/periodoano/create",
  vacinaController.cadastroPeriodoAplicacaoAno
);

/**
 * @swagger
 * /vacina/periodomes/create:
 *   post:
 *     summary: Cadastra um novo período de aplicação por mês
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: body
 *         name: Vacina
 *         description: Dados do período de aplicação por mês a ser cadastrado
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina associada ao período de aplicação por mês
 *             qtd_meses_inicial:
 *               type: integer
 *               description: Quantidade inicial de meses
 *             qtd_meses_final:
 *               type: integer
 *               description: Quantidade final de meses
 *             desc_meses:
 *               type: string
 *               description: Descrição do mês
 *           required:
 *             - id_vacina
 *             - qtd_meses_inicial
 *             - qtd_meses_final
 *             - desc_meses
 *     responses:
 *       200:
 *         description: Sucesso ao cadastrar o período de aplicação por mês
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do período de aplicação por mês cadastrado
 *                   id_vacina:
 *                     type: integer
 *                     description: ID da vacina associada ao período de aplicação por mês
 *                   qtd_meses_inicial:
 *                     type: integer
 *                     description: Quantidade inicial de meses
 *                   qtd_meses_final:
 *                     type: integer
 *                     description: Quantidade final de meses
 *                   desc_meses:
 *                     type: string
 *                     description: Descrição do mês
 *             example:
 *               - id: 1
 *                 id_vacina: 123
 *                 qtd_meses_inicial: 3
 *                 qtd_meses_final: 6
 *                 desc_meses: "Período de Aplicação"
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
routes.post(
  "/vacina/periodomes/create",
  vacinaController.cadastroPeriodoAplicacaoMes
);

/**
 * @swagger
 * /vacina/update:
 *   put:
 *     summary: Edita uma vacina existente
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: body
 *         name: vacina
 *         description: Dados da vacina a serem editados
 *         required: true
 *         schema:
 *           type: object
 *           properties:
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
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina a ser editada
 *           required:
 *             - vacina
 *             - sigla_vacina
 *             - doenca_protecao
 *             - dose
 *             - id_rede
 *             - id_vacina
 *     responses:
 *       200:
 *         description: Sucesso ao editar a vacina
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
 *                 vacina: "Vacina Editada"
 *                 sigla_vacina: "VE"
 *                 doenca_protecao: "Nova Doença"
 *                 dose: 2
 *                 id_rede: 456
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
routes.put("/vacina/update", vacinaController.editarVacina);

/**
 * @swagger
 * /vacina/periodoano/delete:
 *   delete:
 *     summary: Remove um período de aplicação por ano
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID do período de aplicação por ano a ser removido
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao remover o período de aplicação por ano
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   mensagem:
 *                     type: string
 *                     description: Mensagem de sucesso
 *             example:
 *               - mensagem: "Período de aplicação por ano removido com sucesso"
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
routes.delete(
  "/vacina/periodoano/delete",
  vacinaController.removerPeriodoAplicacaoAno
);

/**
 * @swagger
 * /vacina/periodomes/delete:
 *   delete:
 *     summary: Remove um período de aplicação por mês
 *     tags:
 *       - Vacina
 *     parameters:
 *       - in: query
 *         name: id
 *         description: ID do período de aplicação por mês a ser removido
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao remover o período de aplicação por mês
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   mensagem:
 *                     type: string
 *                     description: Mensagem de sucesso
 *             example:
 *               - mensagem: "Período de aplicação por mês removido com sucesso"
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
routes.delete(
  "/vacina/periodomes/delete",
  vacinaController.removerPeriodoAplicacaoMes
);

module.exports = routes;
