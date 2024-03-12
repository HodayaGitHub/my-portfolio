import express from 'express';
import dotenv from 'dotenv';


import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import mailchimp from "@mailchimp/mailchimp_marketing";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.json());

dotenv.config();

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_PREFIX,
});

const listId = process.env.MAILCHIMP_LIST_ID;


app.get('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body
        console.log(email)
        await subscribeUser(email);
        res.status(200).json({ success: true, message: 'Function executed successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error executing function:', error);
        res.status(500).json({ success: false, message: 'Error executing function' });
    }
});




async function subscribeUser(email) {
    try {
        console.log('Attempting to add member to Mailchimp list:', listId);
        console.log(email);
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: email,
            status: "subscribed"
        });
        console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
    } catch (error) {
        console.error('Error adding member to Mailchimp list:', error);
    }
}





const port = process.env.PORT || 4000;
app.use(express.static(path.resolve(__dirname, 'public'), { type: 'module' }));

app.listen(port, () => console.log(`Server Running on port ${port}`));


// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "********@gmail.com",
//     pass: ""
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/contact", (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "********@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });
