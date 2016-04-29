var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")



var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp.gmail.com",
    secureConnection : false,
    port: 587,
    auth : {
        user : "your_mail@gmail.com",
        pass : "pass"
    }
}));








// // create reusable transport method (opens pool of SMTP connections)
// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "smtp.mail.ru",
//     auth: {
//         user: "ivan_madcat@mail.ru",
//         pass: "theonly"
//     }
// });

// setup e-mail data with unicode symbols
var mailOptions = {
    from: "shahid@reach1to1.com", // sender address
    to: "rwtc66@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world ", // plaintext body
    html: "<b>Hello world </b>" // html body
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
});
