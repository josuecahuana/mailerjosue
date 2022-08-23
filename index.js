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

let mailOptions = {
    from: "josuemmca29@gmail.com",
    to: "chispatriana29@gmail.com",
    subject: "Prueba",
    text: "Prueba"
}

transporter.sendMail(mailOptions, function(err, sucess){
    if (err){
        console.log(err)
    } else{
        console.log("Email sent")
    }
})