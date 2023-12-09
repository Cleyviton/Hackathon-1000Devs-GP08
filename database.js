const { Pool } = require("pg");

const pool = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASS,
  port: 5432,
  ssl: true,
};

module.exports = new Pool(pool);
