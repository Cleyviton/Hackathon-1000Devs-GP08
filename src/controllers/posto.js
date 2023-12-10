const pool = require("../../database");

module.exports = {
    async createPosto(req, res, next) {
        try {
            const { endereco, id_rede, nome } = req.body;
            const result = await pool.query(
                `INSERT INTO POSTO (nome, endereco, id_rede) 
                VALUES ($1, $2, $3)
                RETURNING *;`,
                [nome, endereco, id_rede]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
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
