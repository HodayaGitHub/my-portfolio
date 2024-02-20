import http from 'http';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const expressApp = express();
const expressRouter = express.Router();

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

// const server = http.createServer(expressApp);
const port = process.env.PORT || 4000;


expressApp.get('/', (req, res) => {
  res.send('Hello World!')
})

// expressApp.get('/**', (req, res) => {
//   console.log('Request received for index.html');
//   res.sendFile(path.resolve('dist/index.html'), (err) => {
//     if (err) {
//       console.error('Error sending index.html:', err);
//     } else {
//       console.log('Index.html sent successfully');
//     }
//   });
// });



expressApp.listen(port, () => console.log(`Server Running on port ${port}`));