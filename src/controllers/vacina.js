const pool = require("../../database");

module.exports = {
  async cadastroVacina(req, res, next) {
    try {
      const { vacina, sigla_vacina, doenca_protecao, dose, id_rede } = req.body;

      const count = await pool.query(
        "SELECT * FROM VACINA ORDER BY id_vacina DESC LIMIT 1"
      );
      const id_vacina = count.rows[0].id_vacina + 1;

      const result = await pool.query(
        //"SELECT * FROM VACINA";
        "INSERT INTO VACINA (id_vacina, vacina, sigla_vacina, doenca_protecao, dose, id_rede) VALUES ($1,$2, $3,$4,$5,$6) RETURNING *",
        [id_vacina, vacina, sigla_vacina, doenca_protecao, dose, id_rede]
      );
      return res.status(201).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async editarVacina(req, res, next) {
    try {
      const {
        vacina,
        sigla_vacina,
        doenca_protecao,
        dose,
        id_rede,
        id_vacina,
      } = req.body;

      const result = await pool.query(
        `UPDATE VACINA
        SET
            vacina = $1,
            sigla_vacina = $2,
            doenca_protecao = $3,
            dose = $4,
            id_rede = $5
        WHERE
            id_vacina = $6
    `,
        [vacina, sigla_vacina, doenca_protecao, dose, id_rede, id_vacina]
      );
      const update = await pool.query(
        "SELECT * FROm VACINA WHERE id_vacina = $1",
        [id_vacina]
      );
      return res.status(200).json(update.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async cadastroPeriodoAplicacaoAno(req, res, next) {
    try {
      const { id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano } = req.body;

      const count = await pool.query(
        "SELECT * FROM PERIODOAPLICACAOANO ORDER BY id DESC LIMIT 1"
      );
      const id = count.rows[0].id + 1;

      const result = await pool.query(
        "INSERT INTO PERIODOAPLICACAOANO (id, id_vacina, qtd_ano_inicial, Qtd_ano_final,desc_ano) VALUES ($1,$2, $3, $4, $5) RETURNING *",
        [id, id_vacina, qtd_ano_inicial, qtd_ano_final, desc_ano]
      );

      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async removerPeriodoAplicacaoAno(req, res, next) {
    try {
      const { id } = req.query;

      const result = await pool.query(
        "DELETE FROM PERIODOAPLICACAOANO WHERE id = $1",
        [id]
      );

      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async cadastroPeriodoAplicacaoMes(req, res, next) {
    try {
      const { id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses } =
        req.body;

      const count = await pool.query(
        "SELECT * FROM PERIODOAPLICACAOMES ORDER BY id DESC LIMIT 1"
      );
      const id = count.rows[0].id + 1;

      const result = await pool.query(
        "INSERT INTO PERIODOAPLICACAOMES (id, id_vacina, qtd_meses_inicial, qtd_meses_final,desc_meses) VALUES ($1,$2, $3, $4, $5) RETURNING *",
        [id, id_vacina, qtd_meses_inicial, qtd_meses_final, desc_meses]
      );

      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  async removerPeriodoAplicacaoMes(req, res, next) {
    try {
      const { id } = req.query;

      const result = await pool.query(
        "DELETE FROM PERIODOAPLICACAOMES WHERE id = $1",
        [id]
      );

      return res.status(200).json(result.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
