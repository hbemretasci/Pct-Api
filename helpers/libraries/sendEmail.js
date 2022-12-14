const nodemailer = require('nodemailer');

const sendEmail = async(mailOptions) => {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        secure: false,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: {
          rejectUnauthorized: false,
        }
    });

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail