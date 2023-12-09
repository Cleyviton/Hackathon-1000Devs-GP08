const pool = require("../../database");

module.exports = {
  async getConsultaVacina(req, res, next) {
    try {
      const result = await pool.query(
        "SELECT * FROM VACINA INNER JOIN VACINAAPLICADA VA ON VACINA.Id_vacina = VA.Id_vacina " +
          "INNER JOIN REDE R ON VACINA.Id_rede = R.Id_rede"
      );

      return res.json(result.rows);
    } catch (error) {
      return res.json(error);
    }
  },
};
