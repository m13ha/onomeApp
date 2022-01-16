"use strict";
require('dotenv').config()
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const mailer = async (number, email) => {
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_USER, // generated ethereal user
          pass: process.env.GMAIL_PSWD, // generated ethereal password
        },
      });

      let msg = {
        from: '"Onome Team" <noreply@noreply.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Confirmation Code", // Subject line
        text: `This is your code to confirm your account ${number}`, // plain text body
      }
    
      // send mail with defined transport object
      let info = await transporter.sendMail(msg, (error, info) => {
          if(error){
              console.log(error)
          }else {
            return ("Message sent: %s", info.messageId);
          }
      });
    
      
}

module.exports = mailer;
