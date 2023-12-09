require("dotenv").config();
const express = require("express");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const paciente = require("./src/routes/paciente");
const vacinaAplicada = require("./src/routes/vacinaAplicada");
const vacina = require("./src/routes/vacina");
const consultaVacina = require("./src/routes/consulta_vacina");
const PORT = 3000; // porta do app

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Nome da Sua API",
      description: "Descrição da Sua API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/vacina.js"], // Substitua pelo caminho real para o arquivo com suas rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//midleware
app.use(express.json());
// Defina rotas e lógica de manipulação aqui
app.use(paciente);

app.use(vacinaAplicada);
app.use(consultaVacina);
app.use(vacina);

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
