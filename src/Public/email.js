const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.HostMail,
    port: process.env.PortMail,
    auth: {
        user: process.env.usernameMail,
        pass: process.env.passwordMail,
    },
});

const enviarEmail = (configuracoes) => {
    return transporter.sendMail(configuracoes, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

module.exports = enviarEmail;

/* const configuracoes = {
    from: "<seu_email@gmail.com>",
    to: "<destinatario@email.com>",
    subject: "Assunto do e-mail",
    html: "Corpo do e-mail",
}; */

/* enviarEmail(configuracoes); */
