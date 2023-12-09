const pool = require("../../database");

module.exports = {
  async getPaciente(req, res, next) {
    try {
      const result = await pool.query("SELECT * from PACIENTE");
      return res.json(result.rows);
    } catch (error) {
      return res.json(error);
    }
  },
};
