var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport")

exports.sendMail = function(req, res) {

  var contactData = req.body;
console.log(process.env.NODEMAILER_USER);
console.log(process.env.NODEMAILER_PASS);
  var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS
          // user: 'sbm.food.blog@gmail.com',
          // pass: 'kittycat123'
      }
  }));

  var mailOptions = {
      from: 'sbm.food.blog@gmail.com',
      to: 'sbm.food.blog@gmail.com',
      subject: 'Message from ' + contactData.name,
      text: contactData.msg
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(error, response){
      if(error){
          console.log(error);
          res.end("error");
      }else{
          console.log(response.response.toString());
          console.log("Message sent: " + response.message);
          res.end("sent");
      }
  });
};