const pool = require("../../database");
module.exports = {
    async getConsultaVacinaProtecao(req, res, next) {
        try {
            const { doenca_protecao } = req.query;
            const result = await pool.query(
                "SELECT * FROM VACINA WHERE doenca_protecao ILIKE $1",
                [`%${doenca_protecao}%`]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    },
};
