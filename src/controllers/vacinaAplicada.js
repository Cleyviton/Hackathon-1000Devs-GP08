const pool = require("../../database");

const getVacinaAplicada = async (req, res, next) => {
    try {
        const userId = req.params.userId;

        const paciente = await pool.query(
            "SELECT * FROM PACIENTE WHERE Id_paciente = $1",
            [userId]
        );

        const vacinas = await pool.query(
            "SELECT * FROM VACINA JOIN VACINAAPLICADA AS VA ON VACINA.Id_vacina = VA.Id_vacina WHERE VA.Id_paciente = $1",
            [userId]
        );

        return res.json({
            ...paciente.rows[0],
            vacinasAplicadas: vacinas.rows,
        });
    } catch (error) {
        return res.json(error);
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
        console.log(error);
        return res.status(409).json(error);
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
        console.log(error);
        return res.status(409).json(error);
    }
};

module.exports = {
    getVacinaAplicada,
    createVacinaAplicada,
    deleteVacinaAplicada,
};
