const { Pool } = require("pg");

const pool = new Pool({
  user: "pearl",
  host: "itcpostgresql.postgres.database.azure.com",
  database: "db008",
  password: "%&unsas_aew27008",
  port: 5432,
  ssl: true,
});

(async () => {
  try {
    await pool.query(`
        CREATE TABLE POSTO (
          id SERIAL PRIMARY KEY,
          endereco VARCHAR(255),
          id_rede INT,
          FOREIGN KEY (id_rede) REFERENCES REDE(id_rede)
        )
      `);
    console.log("Tabela POSTO criada com sucesso.");
  } catch (error) {
    console.error("Erro ao criar tabela POSTO:", error);
  } finally {
    console.log("rodou");
  }
})();

const showVacinasCount = async () => {
  const result = await pool.query(
    "SELECT * FROM VACINA ORDER BY data_insercao DESC LIMIT 1"
  );
  console.log(result.rows);
};
console.log(pool.options.user);
console.log(pool.options.database);
showVacinasCount();
