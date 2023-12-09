const pool  = require ("../../database")
module.exports = {
    async getConsultaVacinaProtecao(req, res, next) {
        try {
        const {doenca_protecao} = req.query;
        const result = await pool.query(`select  *  from VACINA where doenca_protecao  ilike '%$1%'`, [doenca_protecao]);
          return res.json(result.rows);
        } catch (error) {
          return res.json(error);
        }
    }
    }
