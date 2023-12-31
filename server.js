require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const paciente = require("./src/routes/paciente");
const vacinaAplicada = require("./src/routes/vacinaAplicada");
const vacina = require("./src/routes/vacina");
const consultaVacina = require("./src/routes/consulta_vacina");
const consultaVacinaProtecao = require("./src/routes/consulta_vacina-protecao");
const campanhaVacina = require("./src/routes/campanha_vacina");
const posto = require("./src/routes/posto");
const PORT = 4000; // porta do app

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Hackthon vacina",
      description: "Sistema de vacinas",
      version: "1.0.0",
    },
  },
  apis: [
    "./src/routes/paciente.js",
    "./src/routes/vacina.js",
    "./src/routes/consulta_vacina.js",
    "./src/routes/consulta_vacina-protecao.js",
    "./src/routes/vacinaAplicada.js",
    "./src/routes/campanha_vacina.js",
    "./src/routes/posto.js",
  ], // Substitua pelo caminho real para o arquivo com suas rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//midleware
app.use(express.json());
app.use(cors());

// Defina rotas e lógica de manipulação aqui
app.use(paciente);

app.use(vacinaAplicada);
app.use(consultaVacina);
app.use(vacina);
app.use(consultaVacinaProtecao);
app.use(campanhaVacina);
app.use(posto);

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
