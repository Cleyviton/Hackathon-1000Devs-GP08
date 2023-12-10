const pool = require("../../database");

module.exports = {
  async createPosto(req, res, next) {
    try {
      const { endereco, id_rede, nome } = req.query;
      const result = await pool.query(
        `INSERT INTO POSTO (endereco, id_rede,nome) VALUES ($1, $2, $3) RETURNING id`,
        [endereco, id_rede, nome]
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
