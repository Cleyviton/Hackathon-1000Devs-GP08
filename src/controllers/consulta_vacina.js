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
                "SELECT V.*, PA.desc_ano FROM VACINA AS V JOIN PERIODOAPLICACAOANO AS PA ON V.Id_vacina = PA.Id_vacina WHERE $1 = PA.Qtd_ano_inicial AND $1 = PA.Qtd_ano_final",
                [idade]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorIdadeRange(req, res, next) {
        try {
            const { idade } = req.params;

            const result = await pool.query(
                "SELECT V.*, PA.desc_ano FROM VACINA AS V JOIN PERIODOAPLICACAOANO AS PA ON V.Id_vacina = PA.Id_vacina WHERE $1 BETWEEN PA.Qtd_ano_inicial AND PA.Qtd_ano_final",
                [idade]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorMes(req, res, next) {
        try {
            const { meses } = req.params;

            const result = await pool.query(
                "SELECT V.*, PM.desc_meses FROM VACINA AS V JOIN PERIODOAPLICACAOMES AS PM ON V.Id_vacina = PM.Id_vacina WHERE $1 = PM.Qtd_meses_inicial AND $1 = PM.Qtd_meses_final",
                [meses]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorMesRange(req, res, next) {
        try {
            const { meses } = req.params;

            const result = await pool.query(
                "SELECT V.*, PM.desc_meses FROM VACINA AS V JOIN PERIODOAPLICACAOMES AS PM ON V.Id_vacina = PM.Id_vacina WHERE $1 BETWEEN PM.Qtd_meses_inicial AND PM.Qtd_meses_final",
                [meses]
            );
            return res.json(result.rows);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorPaciente(req, res, next) {
        try {
            const { id_paciente } = req.params;

            const paciente = await pool.query(
                "SELECT * FROM PACIENTE WHERE Id_paciente = $1",
                [id_paciente]
            );

            if (paciente.rowCount <= 0) {
                return res.status(404).json({
                    msg: "Paciente não encontado!",
                });
            }

            const vacinas = await pool.query(
                "SELECT * FROM VACINA JOIN VACINAAPLICADA AS VA ON VACINA.Id_vacina = VA.Id_vacina WHERE VA.Id_paciente = $1",
                [id_paciente]
            );

            return res.json({
                ...paciente.rows[0],
                vacinasAplicadas: vacinas.rows,
            });
        } catch (error) {
            return res.json(error);
        }
    },

    async getConsultaVacinaPendentePorPaciente(req, res, next) {
        try {
            const { id_paciente } = req.params;
        } catch (error) {
            return res.json(error);
        }
    },
};