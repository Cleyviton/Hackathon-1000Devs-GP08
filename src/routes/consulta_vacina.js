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
 *                   desc_ano:
 *                     type: string
 *                     description: Descrição do ano de aplicação da vacina
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
 *                 desc_ano: "Ano X"
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
 * /consulta/vacina/range/idade/{idade}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes em uma faixa etária específica
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: idade
 *         description: Idade dos pacientes a serem consultados (limite inferior da faixa etária)
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes em uma faixa etária específica
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
 *                   desc_ano:
 *                     type: string
 *                     description: Descrição do ano de aplicação da vacina
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
 *                 desc_ano: "Ano X"
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
 * /consulta/vacina/meses/{meses}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes em um determinado intervalo de meses
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: meses
 *         description: Número de meses a serem consultados (limite inferior do intervalo)
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes em um determinado intervalo de meses
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
 *                   desc_meses:
 *                     type: string
 *                     description: Descrição do mês de aplicação da vacina
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
 *                 desc_meses: "Mês X"
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
    "/consulta/vacina/meses/:meses",
    consultaVacinaController.getConsultaVacinaPorMes
);
/**
 * @swagger
 * /consulta/vacina/range/meses/{meses}:
 *   get:
 *     summary: Consulta vacinas aplicadas para pacientes em um intervalo de meses
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: meses
 *         description: Número de meses a serem consultados (intervalo entre Qtd_meses_inicial e Qtd_meses_final)
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para pacientes em um intervalo de meses
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
 *                   desc_meses:
 *                     type: string
 *                     description: Descrição do mês de aplicação da vacina
 *             example:
 *               - id_vacina: 1
 *                 vacina: "Vacina A"
 *                 sigla_vacina: "VA"
 *                 doenca_protecao: "Doença X"
 *                 dose: 1
 *                 id_rede: 123
 *                 desc_meses: "Mês X"
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
    "/consulta/vacina/range/meses/:meses",
    consultaVacinaController.getConsultaVacinaPorMesRange
);

/**
 * @swagger
 * /consulta/vacina/paciente/{id_paciente}:
 *   get:
 *     summary: Consulta informações sobre vacinas aplicadas para um paciente específico
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         description: ID do paciente para o qual deseja-se consultar as vacinas aplicadas
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso ao obter informações sobre vacinas aplicadas para o paciente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_paciente:
 *                   type: integer
 *                   description: ID do paciente
 *                 nome:
 *                   type: string
 *                   description: Nome do paciente
 *                 data_nascimento:
 *                   type: string
 *                   format: date
 *                   description: Data de nascimento do paciente
 *                 vacinasAplicadas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_vacina:
 *                         type: integer
 *                         description: ID da vacina
 *                       vacina:
 *                         type: string
 *                         description: Nome da vacina
 *                       sigla_vacina:
 *                         type: string
 *                         description: Sigla da vacina
 *                       doenca_protecao:
 *                         type: string
 *                         description: Doença para a qual a vacina oferece proteção
 *                       dose:
 *                         type: integer
 *                         description: Número da dose
 *                       id_rede:
 *                         type: integer
 *                         description: ID da rede relacionada à vacina
 *             example:
 *               id_paciente: 1
 *               nome: "Nome do Paciente"
 *               data_nascimento: "1990-01-01"
 *               vacinasAplicadas:
 *                 - id_vacina: 1
 *                   vacina: "Vacina A"
 *                   sigla_vacina: "VA"
 *                   doenca_protecao: "Doença X"
 *                   dose: 1
 *                   id_rede: 123
 *       404:
 *         description: Paciente não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Mensagem de erro
 *             example:
 *               msg: "Paciente não encontrado!"
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
    "/consulta/vacina/paciente/:id_paciente",
    consultaVacinaController.getConsultaVacinaPorPaciente
);

/**
 * @swagger
 * /consulta/vacina/pendente/{id_paciente}:
 *   get:
 *     summary: Consulta vacinas pendentes por paciente.
 *     description: Retorna as vacinas pendentes para um paciente com base na idade.
 *     tags:
 *       - ConsultaVacina
 *     parameters:
 *       - in: path
 *         name: id_paciente
 *         required: true
 *         description: ID do paciente para o qual deseja-se consultar as vacinas pendentes.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de vacinas pendentes.
 *         content:
 *           application/json:
 *             example:
 *               - id_vacina: 1
 *                 nome: Vacina A
 *                 desc_ano: 18-25
 *               - id_vacina: 2
 *                 nome: Vacina B
 *                 desc_ano: 18-25
 *       404:
 *         description: Paciente não encontrado.
 *         content:
 *           application/json:
 *             example:
 *               msg: Paciente não encontrado
 *       500:
 *         description: Erro interno do servidor.
 *         content:
 *           application/json:
 *             example:
 *               error: Erro interno ao processar a solicitação.
 */
routes.get(
    "/consulta/vacina/pendente/:id_paciente",
    consultaVacinaController.getConsultaVacinaPendentePorPaciente
);

module.exports = routes;
