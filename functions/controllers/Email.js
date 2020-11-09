'use strict';
const nodemailer = require('nodemailer');

const userEmail = 'contact@fonzmusic.com';
const userPassword = 'BlackBird20$';
const transporter = nodemailer.createTransport(`smtps://${userEmail}:${userPassword}@smtp.zoho.eu`);

exports.sendEmail = (emailTo) => {
    return new Promise(async (resolve, reject) => {
        try {
            var mailOptions = {
                from: userEmail,    // sender address
                to: emailTo, // list of receivers
                subject: 'Thank you for your error', // Subject line
                text: 'Hello world from Node.js',       // plaintext body
                html: '<b>Hello world from Node.js</b>' // html body
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error) return reject(error);
                return resolve(info.response);
            });
        } catch(error) {
            reject(error);
        }
    });
}