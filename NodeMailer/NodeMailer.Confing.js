import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_USER, // generated ethereal user
      pass: process.env.NEXT_PUBLIC_PASS, // generated ethereal password
    },
});

export default transporter;