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
            console;
            const result = await pool.query(
                "SELECT ABS(EXTRACT(YEAR FROM AGE(NOW(), Data_nascimento))) as idade,* " +
                    "FROM PACIENTE INNER JOIN VACINAAPLICADA va ON PACIENTE.id_paciente = va.id_paciente " +
                    "INNER JOIN VACINA ON VACINA.Id_vacina = va.Id_vacina " +
                    "WHERE ABS(EXTRACT(YEAR FROM AGE(NOW(), Data_nascimento))) = $1 ",

                [idade]
            );

            const groupedByPatientId = result.rows.reduce((acc, row) => {
                const existingPatient = acc.find(
                    (patient) => patient.id_paciente === row.id_paciente
                );

                if (existingPatient) {
                    // Paciente já existe, adiciona a vacina ao array de vacinas
                    existingPatient.vacinas.push({
                        id_vacina: row.id_vacina,
                        data_aplicacao: row.data_aplicacao,
                        vacina: row.vacina,
                        sigla_vacina: row.sigla_vacina,
                        doenca_protecao: row.doenca_protecao,
                        dose: row.dose,
                        id_rede: row.id_rede,
                    });
                } else {
                    // Paciente não existe, cria um novo paciente
                    const newPatient = {
                        id_paciente: row.id_paciente,
                        nome: row.nome,
                        data_nascimento: row.data_nascimento,
                        idade: row.idade,
                        vacinas: [
                            {
                                id_vacina: row.id_vacina,
                                data_aplicacao: row.data_aplicacao,
                                vacina: row.vacina,
                                sigla_vacina: row.sigla_vacina,
                                doenca_protecao: row.doenca_protecao,
                                dose: row.dose,
                                id_rede: row.id_rede,
                            },
                        ],
                    };

                    acc.push(newPatient);
                }

                return acc;
            }, []);
            return res.json(groupedByPatientId);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorMes(req, res, next) {
        try {
            const { mes } = req.params;

            const result = await pool.query(
                "SELECT " +
                    "EXTRACT(MONTH FROM AGE(NOW(), p.Data_nascimento)) as meses, " +
                    "p.*, " +
                    "va.*, " +
                    "v.* " +
                    "FROM " +
                    "PACIENTE p " +
                    "INNER JOIN " +
                    "VACINAAPLICADA va ON p.id_paciente = va.id_paciente " +
                    "INNER JOIN " +
                    "VACINA v ON v.Id_vacina = va.Id_vacina " +
                    "WHERE " +
                    "EXTRACT(MONTH FROM AGE(NOW(), p.Data_nascimento)) = $1 ",
                [mes]
            );

            console.log(result.rows);

            const groupedByPatientId = result.rows.reduce((acc, row) => {
                const existingPatient = acc.find(
                    (patient) => patient.id_paciente === row.id_paciente
                );

                if (existingPatient) {
                    // Paciente já existe, adiciona a vacina ao array de vacinas
                    existingPatient.vacinas.push({
                        id_vacina: row.id_vacina,
                        data_aplicacao: row.data_aplicacao,
                        vacina: row.vacina,
                        sigla_vacina: row.sigla_vacina,
                        doenca_protecao: row.doenca_protecao,
                        dose: row.dose,
                        id_rede: row.id_rede,
                    });
                } else {
                    // Paciente não existe, cria um novo paciente
                    const newPatient = {
                        id_paciente: row.id_paciente,
                        nome: row.nome,
                        data_nascimento: row.data_nascimento,
                        idade: row.idade,
                        vacinas: [
                            {
                                id_vacina: row.id_vacina,
                                data_aplicacao: row.data_aplicacao,
                                vacina: row.vacina,
                                sigla_vacina: row.sigla_vacina,
                                doenca_protecao: row.doenca_protecao,
                                dose: row.dose,
                                id_rede: row.id_rede,
                            },
                        ],
                    };

                    acc.push(newPatient);
                }

                return acc;
            }, []);
            return res.json(groupedByPatientId);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorIdadeRange(req, res, next) {
        try {
            const { idade } = req.params;
            console;
            const result = await pool.query(
                "SELECT ABS(EXTRACT(YEAR FROM AGE(NOW(), Data_nascimento))) as idade,* " +
                    "FROM PACIENTE INNER JOIN VACINAAPLICADA va ON PACIENTE.id_paciente = va.id_paciente " +
                    "INNER JOIN VACINA ON VACINA.Id_vacina = va.Id_vacina " +
                    "WHERE ABS(EXTRACT(YEAR FROM AGE(NOW(), Data_nascimento))) BETWEEN 1 AND $1",

                [idade]
            );

            const groupedByPatientId = result.rows.reduce((acc, row) => {
                const existingPatient = acc.find(
                    (patient) => patient.id_paciente === row.id_paciente
                );

                if (existingPatient) {
                    // Paciente já existe, adiciona a vacina ao array de vacinas
                    existingPatient.vacinas.push({
                        id_vacina: row.id_vacina,
                        data_aplicacao: row.data_aplicacao,
                        vacina: row.vacina,
                        sigla_vacina: row.sigla_vacina,
                        doenca_protecao: row.doenca_protecao,
                        dose: row.dose,
                        id_rede: row.id_rede,
                    });
                } else {
                    // Paciente não existe, cria um novo paciente
                    const newPatient = {
                        id_paciente: row.id_paciente,
                        nome: row.nome,
                        data_nascimento: row.data_nascimento,
                        idade: row.idade,
                        vacinas: [
                            {
                                id_vacina: row.id_vacina,
                                data_aplicacao: row.data_aplicacao,
                                vacina: row.vacina,
                                sigla_vacina: row.sigla_vacina,
                                doenca_protecao: row.doenca_protecao,
                                dose: row.dose,
                                id_rede: row.id_rede,
                            },
                        ],
                    };

                    acc.push(newPatient);
                }

                return acc;
            }, []);
            return res.json(groupedByPatientId);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },

    async getConsultaVacinaPorMesRange(req, res, next) {
        try {
            const { mes } = req.params;

            const result = await pool.query(
                "SELECT " +
                    "EXTRACT(MONTH FROM AGE(NOW(), p.Data_nascimento)) as meses, " +
                    "p.*, " +
                    "va.*, " +
                    "v.* " +
                    "FROM " +
                    "PACIENTE p " +
                    "INNER JOIN " +
                    "VACINAAPLICADA va ON p.id_paciente = va.id_paciente " +
                    "INNER JOIN " +
                    "VACINA v ON v.Id_vacina = va.Id_vacina " +
                    "WHERE " +
                    "EXTRACT(MONTH FROM AGE(NOW(), p.Data_nascimento)) BETWEEN 0 AND $1;",
                [mes]
            );

            console.log(result.rows);

            const groupedByPatientId = result.rows.reduce((acc, row) => {
                const existingPatient = acc.find(
                    (patient) => patient.id_paciente === row.id_paciente
                );

                if (existingPatient) {
                    // Paciente já existe, adiciona a vacina ao array de vacinas
                    existingPatient.vacinas.push({
                        id_vacina: row.id_vacina,
                        data_aplicacao: row.data_aplicacao,
                        vacina: row.vacina,
                        sigla_vacina: row.sigla_vacina,
                        doenca_protecao: row.doenca_protecao,
                        dose: row.dose,
                        id_rede: row.id_rede,
                    });
                } else {
                    // Paciente não existe, cria um novo paciente
                    const newPatient = {
                        id_paciente: row.id_paciente,
                        nome: row.nome,
                        data_nascimento: row.data_nascimento,
                        idade: row.idade,
                        vacinas: [
                            {
                                id_vacina: row.id_vacina,
                                data_aplicacao: row.data_aplicacao,
                                vacina: row.vacina,
                                sigla_vacina: row.sigla_vacina,
                                doenca_protecao: row.doenca_protecao,
                                dose: row.dose,
                                id_rede: row.id_rede,
                            },
                        ],
                    };

                    acc.push(newPatient);
                }

                return acc;
            }, []);
            return res.json(groupedByPatientId);
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
};
