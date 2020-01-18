const Contact = require('../models/contact');
const nodemailer = require("nodemailer");
const sendgrid = require("nodemailer-sendgrid-transport");
const path = require('path');

const transporter = nodemailer.createTransport(sendgrid({
    auth: {
        api_key: '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'
    }
}));

exports.savecontact = (req, res, next) => {
    const email = req.body.email;
    const message = req.body.message;

    const contact = new Contact({
        email: email,
        message: message
    });
    contact.save()
        .then(result => {
            console.log(result);
            transporter.sendMail({
                to: 'creinoso@lean-tech.io',
                from: email,
                subject: 'New contact from you BarNebraska website',
                html: message
            });
            return res.status(201).json({
                message: 'Contact entry saved correctly'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getIndex = (req, res, next) => {
    res.status(201).sendFile(path.join(__dirname, '../views/201.html'));
};