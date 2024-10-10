const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post('/send-email', async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  // Create transporter using SMTP server (e.g., Gmail)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Your email address
      pass: process.env.PASSWORD, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: email, // Sender's email address (user filling the form)
    to: process.env.RECEIVER_EMAIL, // Your email address
    subject: `Contact Form Submission: ${subject}`,
    text: `
      You have a new contact form submission from:
      Name: ${fullName}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
