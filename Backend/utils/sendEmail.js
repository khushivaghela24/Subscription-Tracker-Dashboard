const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({ to, subject, html, text }) {
  const mailOptions = {
    from: `Subscription Tracker <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
  };
  return transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
