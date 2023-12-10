const express = require("express");

const postoController = require("../controllers/posto");
const routes = express.Router();
/**
 * @swagger
 * /posto/create:
 *   post:
 *     summary: Cria um novo posto.
 *     tags:
 *       - Posto
 *     description: Endpoint para criar um novo posto.
 *     parameters:
 *       - in: query
 *         name: endereco
 *         description: Endereço do posto.
 *         required: true
 *         type: string
 *       - in: query
 *         name: id_rede
 *         description: ID da rede associada ao posto.
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: novo posto criado com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *       400:
 *         description: Erro na requisição.
 *         content:
 *           application/json:
 *             example:
 *               - error: Mensagem de erro específica.
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
routes.post("/posto/create", postoController.createPosto);

/**
 * @swagger
 * /posto/busca/endereco:
 *   get:
 *     summary: Obtém postos filtrados por endereço.
 *     tags:
 *       - Posto
 *     description: Endpoint para buscar postos com base em um filtro de endereço.
 *     parameters:
 *       - in: query
 *         name: endereco
 *         description: Endereço a ser utilizado como filtro.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Postos encontrados com sucesso.
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 endereco: "Rua ABC, 123"
 *                 id_rede: 2
 *               - id: 2
 *                 endereco: "Avenida XYZ, 456"
 *                 id_rede: 1
 *       400:
 *         description: Erro na requisição.
 *         content:
 *           application/json:
 *             example:
 *               - error: Mensagem de erro específica.
 */
routes.get("/posto/busca/endereco", postoController.getEnderecoPosto);

module.exports = routes;
