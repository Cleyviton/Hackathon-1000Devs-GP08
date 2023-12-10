const express = require("express");

const pacienteController = require("../controllers/paciente");

const routes = express.Router();
/**
 * @swagger
 * /pacientes/create:
 *   post:
 *     summary: Cria um novo paciente
 *     tags:
 *       - Pacientes
 *     parameters:
 *       - in: body
 *         name: vacina
 *         description: Dados da vacina a ser cadastrada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *               description: Nome do paciente
 *             Data_nascimento:
 *               type: string
 *               format: date
 *               description: Data de nascimento do paciente (YYYY-MM-DD)
 *           required:
 *             - nome
 *             - Data_nascimento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do paciente
 *               Data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do paciente (no formato YYYY-MM-DD)
 *             required:
 *               - nome
 *               - Data_nascimento
 *           example:
 *             nome: "João Silva"
 *             Data_nascimento: "1990-01-01"
 *     responses:
 *       200:
 *         description: Paciente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_paciente:
 *                   type: integer
 *                   description: ID do paciente criado
 *                 nome:
 *                   type: string
 *                   description: Nome do paciente
 *                 Data_nascimento:
 *                   type: string
 *                   format: date
 *                   description: Data de nascimento do paciente (no formato YYYY-MM-DD)
 *               example:
 *                 id_paciente: 1
 *                 nome: "João Silva"
 *                 Data_nascimento: "1990-01-01"
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
routes.post("/pacientes/create", pacienteController.createPaciente);

/**
 * @swagger
 * /pacientes/update:
 *   put:
 *     summary: Atualiza as informações de um paciente existente
 *     tags:
 *       - Pacientes
 *     parameters:
 *       - in: body
 *         name: vacina
 *         description: Dados da vacina a ser cadastrada
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id_paciente:
 *               type: integer
 *               description: Id do paciente
 *             nome:
 *               type: string
 *               description: Nome do paciente
 *             Data_nascimento:
 *               type: string
 *               format: date
 *               description: Data de nascimento do paciente (YYYY-MM-DD)
 *           required:
 *             - nome
 *             - Data_nascimento
 *             - id_paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_paciente:
 *                 type: integer
 *                 description: ID do paciente a ser atualizado
 *               nome:
 *                 type: string
 *                 description: Novo nome do paciente
 *               Data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Nova data de nascimento do paciente (no formato YYYY-MM-DD)
 *             required:
 *               - id_paciente
 *               - nome
 *               - Data_nascimento
 *           example:
 *             id_paciente: 1
 *             nome: "Novo Nome"
 *             Data_nascimento: "1995-02-15"
 *     responses:
 *       200:
 *         description: Informações do paciente atualizadas com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_paciente:
 *                   type: integer
 *                   description: ID do paciente atualizado
 *                 nome:
 *                   type: string
 *                   description: Novo nome do paciente
 *                 Data_nascimento:
 *                   type: string
 *                   format: date
 *                   description: Nova data de nascimento do paciente (no formato YYYY-MM-DD)
 *               example:
 *                 id_paciente: 1
 *                 nome: "Novo Nome"
 *                 Data_nascimento: "1995-02-15"
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
routes.put("/pacientes/update", pacienteController.updatePaciente);

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Consulta todos os pacientes
 *     tags:
 *       - Pacientes
 *     responses:
 *       200:
 *         description: Sucesso ao obter a lista de pacientes
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
 *                     description: Data de nascimento do paciente (no formato YYYY-MM-DD)
 *
 *             example:
 *               - id_paciente: 1
 *                 nome: "João Silva"
 *                 data_nascimento: "1990-01-01"
 *               - id_paciente: 2
 *                 nome: "Maria Oliveira"
 *                 data_nascimento: "1985-05-15"
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
routes.get("/pacientes", pacienteController.getPaciente);

module.exports = routes;
