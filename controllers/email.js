'use strict';
const nodemailer = require('nodemailer');
const moment = require('moment-timezone');

function SendEmail(req, res) {
  const name = req.body.name;
  const emails =  req.body.email;
  const signal = req.body.signal;
  const date = new Date();
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'monitoring.app.info@gmail.com',
      pass: 'elmasgrandedeamerica'
    }
  });
  var mailOptions = {
    from: 'monitoring.app.info@gmail.com',
    to: emails,
    subject: 'Reporte de Actividad',
    html: `
      <h3>Reporte de Actividad Inusual</h3>
      <p>El Sr/a ${name}, tuvo una frecuencia inusual el dia de: 
        ${moment().tz("America/Bogota").format('DD/MM/YYYY')} a las
        ${moment().tz("America/Bogota").format('hh:mm:ss a')}
        con un pico de: <strong>${signal}</strong>
      </p>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ success: false, data: error });
    } else {
      res.json({ success: true, data: info });
    }
  });
}

module.exports = {
  SendEmail,
}