const nodemailer = require("nodemailer");

exports.sendMail = async function main(req,res,next) {

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  transporter.sendMail({
    from: '"Siva Ranjini" <sivaranjini1808@gmail.com>', // sender address
    to: "sivaranjini1808@gmail.com", // list of receivers
    subject: "Medium @edigleyssonsilva ✔", // Subject line
    text: "There is a new article. It's about sending emails, check it out!", // plain text body
    html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  }).then(info => {
    console.log({info});
    res.send(nodemailer.getTestMessageUrl(info));
  }).catch(console.error);
}

