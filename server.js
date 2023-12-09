require("dotenv").config();
const express = require("express");
const app = express();

const paciente = require("./src/routes/paciente");
const vacinaAplicada = require("./src/routes/vacinaAplicada");
const vacina = require("./src/routes/vacina");
const consultaVacina = require("./src/routes/consulta_vacina");
const PORT = 3000; // porta do app

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
