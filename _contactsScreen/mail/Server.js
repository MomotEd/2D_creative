var express=require('express');
var nodemailer = require("nodemailer");
var app=express();
var path = require('path');
var smtpTransport = require("nodemailer-smtp-transport")
// var sendmail = require('sendmail')();

/*
	Here we are configuring our SMTP Server details.
	STMP is mail server which is responsible for sending and recieving email.
*/

var smtpTransport = nodemailer.createTransport(smtpTransport({
    host : "smtp.gmail.com",
    secureConnection : true,
    port: 587,
    auth : {
        user : "your_mail@gmail.com",
        pass : "set_pass"
    }
}));

/*var smtpTransport = nodemailer.createTransport("SMTP",{
    host: 'mail.ru',
    port: 587,
    auth: {
        user: 'ivan_madcat@mail.ru',
        pass: 'theonly'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});*/


/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname + '/\\/index.html'));
});
app.get('/send',function(req,res){
	var mailOptions={
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
   	 if(error){
        	console.log(error);
		res.end("error");
	 }else{
        	console.log("Message sent: " + response.message);
		res.end("sent");
    	 }
});
});



// app.get('/',function(req,res){
// 	res.sendFile(path.join(__dirname + '/\\/index.html'));
// });
// app.get('/send',function(req,res){
// sendmail({
//     from: req.query.to,
//     to: 'iv.y.magda@gmail.com',
//     subject: req.query.subject,
//     content: req.query.text,
//   }, function(err, reply) {
//     console.log(err && err.stack);
//     console.dir(reply);
// });
// });

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
	console.log("Express Started on Port 3000");
});
