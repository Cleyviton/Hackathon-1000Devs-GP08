const pool = require("../../database");

module.exports = {
  async createCampanha(req, res, next) {
    try {
      console.log(req.body);
      const { descricao, data_inicio, data_fim } = req.body;
      const count = await pool.query(
        "SELECT * FROM CAMPANHA  ORDER BY id_campanha DESC LIMIT 1"
      );
      const id_campanha = count.rows[0].id_campanha + 1;
      const resultCampanha = await pool.query(
        "INSERT INTO CAMPANHA (id_campanha, descricao, data_inicio, data_fim) VALUES ($1,$2, $3,$4) RETURNING *",
        [id_campanha, descricao, data_inicio, data_fim]
      );

      return res.status(201).json(resultCampanha.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async editarCampanha(req, res, next) {
    try {
      const { descricao, data_inicio, data_fim, id_campanha } = req.body;
      const result = await pool.query(
        `UPDATE CAMPANHA
        SET
        
        descricao = $1,
        data_inicio = $2,
        data_fim = $3
        WHERE
        id_campanha = $4
    `,
        [descricao, data_inicio, data_fim, id_campanha]
      );
      const update = await pool.query(
        "SELECT * FROM CAMPANHA WHERE id_campanha = $1",
        [id_campanha]
      );

      return res.json(update.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async cadastroCampanhaVacina(req, res, next) {
    try {
      const resultCampanhaVacina = await pool.query(
        "INSERT INTO CAMPANHAVACINA (id_campanha, id_vacina) VALUES ($1,$2) RETURNING *",
        [id_campanha, id_vacina]
      );
      return res.status(201).json(resultCampanhaVacina.rows[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async deleteCampanha(req, res, next) {
    try {
      const { id_campanha } = req.query;
      await pool.query("DELETE FROM CAMPANHAVACINA WHERE id_campanha = $1", [
        id_campanha,
      ]);
      return res.status(204).json();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async getDataCampanha(req, res, next) {
    try {
      const { data } = req.query;
      const result = await pool.query(
        `
        SELECT c.*, v.*
        FROM campanha c
        JOIN campanhavacina cv ON cv.id_campanha = c.id_campanha
        JOIN vacina v ON v.id_vacina = cv.id_vacina
        WHERE c.data_inicio <= TO_DATE($1, 'YYYY-MM-DD')
          AND c.data_fim >= TO_DATE($1, 'YYYY-MM-DD');
      `,
        [data]
      );
      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },

  async getDataCampanhaProtecao(req, res, next) {
    try {
      const { data, protecao } = req.query;
      const result = await pool.query(
        `
        SELECT c.*, v.*
        FROM campanha c
        JOIN campanhavacina cv ON cv.id_campanha = c.id_campanha
        JOIN vacina v ON v.id_vacina = cv.id_vacina
        WHERE c.data_inicio <= TO_DATE($1, 'YYYY-MM-DD')
          AND c.data_fim >= TO_DATE($1, 'YYYY-MM-DD') 
          AND doenca_protecao ILIKE $2
      `,
        [data, `%${protecao}%`]
      );
      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: error.message });
    }
  },
};
