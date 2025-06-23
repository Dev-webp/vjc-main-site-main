const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const gmailEmail = "vjcbangalore@gmail.com";
const gmailAppPassword = "wirgofubrbiqcvlq";
const notificationRecipient = "vjcbangalore@gmail.com"; // send to yourself

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailAppPassword,
  },
});

exports.notifyNewMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // Optional: Log for debugging
    console.log("Function triggered, message data:", data);

    const mailOptions = {
      from: `Chatbot Notification <${gmailEmail}>`,
      to: notificationRecipient,
      subject: "New Chatbot Message Received",
      html: `
        <h2>New message from chatbot</h2>
        <p><strong>Sender:</strong> ${data.sender || "(unknown)"}</p>
        <p><strong>Text:</strong> ${data.text}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Notification email sent!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
    return null;
  });