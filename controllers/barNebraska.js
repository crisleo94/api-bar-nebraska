const Contact = require('../models/contact')
const nodemailer = require("nodemailer")
const sendgrid = require("nodemailer-sendgrid-transport")
const path = require('path')

const transporter = nodemailer.createTransport(sendgrid({
    auth: {
        api_key: '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'
    }
}));

exports.savecontact = (req, res, next) => {
    const email = req.body.email
    const message = req.body.message
    const subjectSend = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Success!!</title>
        </head>
        <body>
            <h1>Nueva Respuesta Registrada</h1>
            <p>El usuario ${ email } ha dejado una opinión en su sitio web</p>
            <p> ${ message } </p>
        </body>
        </html>
`
    const contact = new Contact({
        email: email,
        message: message
    });
    contact.save()
        .then(result => {
            transporter.sendMail({
                to: 'cristianreinoso.mgvc@gmail.com',
                from: email,
                subject: 'Han dejado una opinión en tu BarNebraska',
                html: subjectSend
            })
            return res.status(201).sendFile(path.join(__dirname, '../views/201.html'))
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500
            }
            next(err)
        })
}

exports.getIndex = (req, res, next) => {
    return res.sendFile(path.join(__dirname, '../views/201.html'))
}
