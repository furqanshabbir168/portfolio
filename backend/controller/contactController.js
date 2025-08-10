// controllers/contactController.js
import { sendEmail } from '../utils/emailService.js';

const contactFormController = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;

    // Validate fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Store temporarily (optional)
    const contactData = { name, email, service, message };

    // Professional HTML Email Template
    const emailHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Consultation Request</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            max-width: 650px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #007bff, #00b4d8);
            color: #ffffff;
            padding: 25px;
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 22px;
          }
          .content {
            padding: 25px;
          }
          .field {
            margin-bottom: 18px;
          }
          .label {
            font-weight: 600;
            margin-bottom: 5px;
            color: #007bff;
          }
          .value {
            padding: 12px;
            background: #f8f9fa;
            border-radius: 8px;
            color: #444;
          }
          .footer {
            background: #f1f1f1;
            text-align: center;
            padding: 15px;
            font-size: 12px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📩 New Consultation Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">Service Requested:</div>
              <div class="value">${service}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message}</div>
            </div>
          </div>
          <div class="footer">
            This message was sent from your portfolio website's contact form.
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email with reply-to set to client
    await sendEmail(
      process.env.CONTACT_RECEIVER,
      'New Consultation Request',
      emailHTML,
      email // replyTo
    );

    res.status(200).json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
};

export { contactFormController };
