import http from 'http'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'


const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')))
  console.log('__dirname: ', __dirname)
} else {
  const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5174'],
    credentials: true
  }
  app.use(cors(corsOptions))
}




console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);



const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "********@gmail.com",
    pass: ""
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "********@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});


app.get('/**', (req, res) => {
  console.log('Request received for index.html');
  res.sendFile(path.resolve('dist/index.html'), (err) => {
    if (err) {
      console.error('Error sending index.html:', err);
    } else {
      console.log('Index.html sent successfully');
    }
  });
});


server.listen(port, () => console.log(`Server Running on port ${port}`));