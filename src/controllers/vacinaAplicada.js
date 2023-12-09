const pool = require("../../database");

const createVacinaAplicada = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const paciente = await pool.query(
            "SELECT * FROM PACIENTE WHERE Id_paciente = $1",
            [userId]
        );

        const response = await pool.query(
            "SELECT * FROM VACINA JOIN VACINAAPLICADA AS VA ON VACINA.Id_vacina = VA.Id_vacina WHERE VA.Id_paciente = $1",
            [userId]
        );

        return res.json({
            ...paciente.rows[0],
            vacinasAplicadas: response.rows,
        });
    } catch (error) {
        return res.json(error);
    }
};

module.exports = { createVacinaAplicada };
