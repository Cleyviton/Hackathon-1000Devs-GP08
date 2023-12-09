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

  async getConsultaVacinaPorIdade(req, res, next) {
    try {
      const { idade } = req.params;
      const result = await pool.query(
        "SELECT * FROM PACIENTE WHERE EXTRACT(YEAR FROM AGE(NOW(), Data_nascimento)) = $1",
        [idade]
      );

      return res.json(result.rows);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  },
};
