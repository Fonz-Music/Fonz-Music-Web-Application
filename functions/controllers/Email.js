'use strict';
const nodemailer = require('nodemailer');

const userEmail = 'contact@fonzmusic.com';
const userPassword = 'BlackBird20$';
// const transporter = nodemailer.createTransport(`smtps://${userEmail}:${userPassword}@smtp.zoho.eu`);
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: userEmail,
        pass: userPassword
    }
});

exports.sendEmail = (emailTo) => {
    return new Promise(async (resolve, reject) => {
        try {
            var mailOptions = {
                from: `"Fonz Music" <${userEmail}>`,    // sender address
                to: emailTo, // list of receivers
                subject: 'Thank you for your order', // Subject line
                text: 'You have ordered 1 Fonz Coaster',       // plaintext body
                html: 'You have ordered <b>1 Fonz Coaster</b>' // html body
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error) return reject(error);
                return resolve(info.response);
            });
        } catch(error) {
            console.error(error);
            reject(error);
        }
    });
}