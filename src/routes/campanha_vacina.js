const express = require("express");

const campanhaVacinaController = require("../controllers/campanha_vacina");

const routes = express.Router();
/**
 * @swagger
 * /campanha/criar:
 *   post:
 *     summary: Cria uma nova campanha de vacinação
 *     tags:
 *       - Campanha
 *     parameters:
 *       - in: body
 *         name: campanha
 *         description: Dados da campanha e da vacina associada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina associada à campanha
 *             descricao:
 *               type: string
 *               description: Descrição da campanha
 *             data_inicio:
 *               type: string
 *               format: date
 *               description: Data de início da campanha (YYYY-MM-DD)
 *             data_fim:
 *               type: string
 *               format: date
 *               description: Data de término da campanha (YYYY-MM-DD)
 *     responses:
 *       201:
 *         description: Sucesso ao criar a campanha
 *         schema:
 *           type: object
 *           properties:
 *             id_campanha:
 *               type: integer
 *               description: ID da campanha criada
 *             descricao:
 *               type: string
 *               description: Descrição da campanha
 *             data_inicio:
 *               type: string
 *               format: date
 *               description: Data de início da campanha (YYYY-MM-DD)
 *             data_fim:
 *               type: string
 *               format: date
 *               description: Data de término da campanha (YYYY-MM-DD)
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina associada à campanha
 *       500:
 *         description: Erro interno do servidor
 */
routes.post("/camapanha/criar", campanhaVacinaController.createCampanha);

/**
 * @swagger
 * /camapanha/vacina/criar:
 *   post:
 *     summary: Adiciona uma vacina a uma campanha de vacinação
 *     tags:
 *       - Campanha
 *     parameters:
 *       - in: body
 *         name: dadosVacina
 *         description: Dados da associação entre campanha e vacina
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_campanha:
 *               type: integer
 *               description: ID da campanha à qual a vacina será associada
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina a ser associada à campanha
 *     responses:
 *       201:
 *         description: Sucesso ao associar a vacina à campanha
 *         schema:
 *           type: object
 *           properties:
 *             id_campanha:
 *               type: integer
 *               description: ID da campanha associada
 *             id_vacina:
 *               type: integer
 *               description: ID da vacina associada
 *       500:
 *         description: Erro interno do servidor
 */
routes.post(
  "/camapanha/vacina/criar",
  campanhaVacinaController.cadastroCampanhaVacina
);
/**
 * @swagger
 * /campanha/editar:
 *   put:
 *     summary: Edita uma campanha de vacinação existente
 *     tags:
 *       - Campanha
 *     parameters:
 *       - in: body
 *         name: campanha
 *         description: Dados da campanha a serem editados
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             descricao:
 *               type: string
 *               description: Nova descrição da campanha
 *             data_inicio:
 *               type: string
 *               format: date
 *               description: Nova data de início da campanha (YYYY-MM-DD)
 *             data_fim:
 *               type: string
 *               format: date
 *               description: Nova data de término da campanha (YYYY-MM-DD)
 *             id_campanha:
 *               type: integer
 *               description: ID da campanha a ser editada
 *     responses:
 *       200:
 *         description: Sucesso ao editar a campanha
 *         schema:
 *           type: object
 *           properties:
 *             id_campanha:
 *               type: integer
 *               description: ID da campanha editada
 *             descricao:
 *               type: string
 *               description: Descrição atualizada da campanha
 *             data_inicio:
 *               type: string
 *               format: date
 *               description: Data de início atualizada da campanha (YYYY-MM-DD)
 *             data_fim:
 *               type: string
 *               format: date
 *               description: Data de término atualizada da campanha (YYYY-MM-DD)
 *       500:
 *         description: Erro interno do servidor
 */
routes.put("/camapanha/editar", campanhaVacinaController.editarCampanha);

/**
 * @swagger
 * /camapanha/delete:
 *   delete:
 *     summary: Remove uma campanha de vacinação, desassociando as vacinas vinculadas
 *     tags:
 *       - Campanha
 *     parameters:
 *       - in: query
 *         name: id_campanha
 *         description: ID da campanha a ser removida
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Sucesso ao remover a campanha e desassociar as vacinas
 *       500:
 *         description: Erro interno do servidor
 */
routes.delete("/camapanha/delete", campanhaVacinaController.deleteCampanha);

/**
 * @swagger
 * /campanha/data:
 *   get:
 *     summary: Obtém campanhas de vacinação ativas para uma data específica
 *     tags:
 *       - Campanha
 *     parameters:
 *       - in: query
 *         name: data
 *         description: Data para a qual as campanhas ativas devem ser recuperadas (formato YYYY-MM-DD)
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Sucesso ao obter campanhas ativas para a data especificada
 *         content:
 *           application/json:
 *             example:
 *               - id_campanha: 1
 *                 descricao: "Campanha de Vacinação Influenza 2023"
 *                 data_inicio: "2023-01-01"
 *                 data_fim: "2023-12-31"
 *                 vacinas:
 *                   - id_vacina: 1
 *                     vacina: "Influenza"
 *                     sigla_vacina: "INF"
 *       500:
 *         description: Erro interno do servidor
 */
routes.get("/campanha/data", campanhaVacinaController.getDataCampanha);

module.exports = routes;
