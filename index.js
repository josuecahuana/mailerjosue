const express = require("express")

const app = express()

const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "josuemmca29@gmail.com",
        pass: "dfyrvqjstalsanrb"
    }
})

app.post('/sendEMail',function(req,res){
    let mailOptions = {
        from: "josuemmca29@gmail.com",
        to: req.body.reciever,
        subject: req.body.titulo,
        text: req.body.text
    }
    transporter.sendMail(mailOptions, function(err, sucess){
        if (err){
            console.log(err)
        } else{
            console.log("Email sent")
        }
    })



})

app.listen(36989, function(){
    console.log("Started on PORT 3000")
})