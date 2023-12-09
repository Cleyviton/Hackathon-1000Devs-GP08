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

  async createPaciente(req, res, next) {
    try {
      console.log(req.body);
      const { nome, Data_nascimento } = req.body;
      const count = await pool.query(
        "SELECT * FROM PACIENTE ORDER BY id_paciente DESC LIMIT 1"
      );
      const id_paciente = count.rows[0].id_paciente + 1;
      const result = await pool.query(
        "INSERT INTO PACIENTE (id_paciente, nome, Data_nascimento) VALUES ($1,$2, $3) RETURNING *",
        [id_paciente, nome, Data_nascimento]
      );

      return res.json(result.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async updatePaciente(req, res, next) {
    try {
      console.log(req.body);
      const { nome, Data_nascimento, id_paciente } = req.body;
      const result = await pool.query(
        "UPDATE PACIENTE SET nome = $2, Data_nascimento = $3 WHERE id_paciente = $1 RETURNING *",
        [id_paciente, nome, Data_nascimento]
      );

      return res.json(result.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },
};
