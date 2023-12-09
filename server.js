const express = require("express");
const app = express();

const router = require("./src/routes/paciente");
const PORT = 3000; // porta do app

// Defina rotas e lógica de manipulação aqui
app.use(router);

//midleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
