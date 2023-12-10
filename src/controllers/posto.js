const pool = require("../../database");

module.exports = {
  async createPosto(req, res, next) {
    try {
      const { endereco, id_rede } = req.query;
      const result = await pool.query(
        `INSERT INTO POSTO (endereco, id_rede) VALUES ($1, $2) RETURNING id`,
        [endereco, id_rede]
      );
      return res.json(result.rows);
    } catch (error) {
      return res.json(error);
    }
  },

  async getEnderecoPosto(req, res, next) {
    try {
      const { endereco } = req.query;
      const result = await pool.query(
        `SELECT * FROM POSTO WHERE endereco ILIKE $1`,
        [`%${endereco}%`]
      );
      return res.json(result.rows);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  },
};
