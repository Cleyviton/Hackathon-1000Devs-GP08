require("dotenv").config();
const express = require("express");
const app = express();

const paciente = require("./src/routes/paciente");
const PORT = 3000; // porta do app

//midleware
app.use(express.json());
// Defina rotas e lógica de manipulação aqui
app.use(paciente);

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
