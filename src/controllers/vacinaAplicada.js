const pool = require("../../database");

const getVacinaAplicada = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const vacinas = await pool.query(
            "SELECT * FROM VACINAAPLICADA AS VA WHERE VA.Id_paciente = $1",
            [userId]
        );

        return res.json(vacinas.rows);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createVacinaAplicada = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const { id_vacina, data_aplicacao } = req.body;

        const response = await pool.query(
            "INSERT INTO VACINAAPLICADA (id_paciente, id_vacina, data_aplicacao) VALUES ($1,$2, $3) RETURNING *",
            [userId, id_vacina, data_aplicacao]
        );
        return res.status(201).json(response.rows[0]);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const deleteVacinaAplicada = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const { id_vacina } = req.body;

        await pool.query(
            "DELETE FROM VACINAAPLICADA WHERE Id_paciente = $1 AND Id_vacina = $2",
            [userId, id_vacina]
        );
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getVacinaAplicada,
    createVacinaAplicada,
    deleteVacinaAplicada,
};
