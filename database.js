const { Pool } = require("pg");

const pool = {
  user: "pearl",
  host: "itcpostgresql.postgres.database.azure.com",
  database: "db008",
  password: "%&unsas_aew27008",
  port: 5432,
  ssl: true,
};

module.exports = new Pool(pool);
