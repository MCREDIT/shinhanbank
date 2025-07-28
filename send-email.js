const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nhmcredit@gmail.com', // Thay bằng email gửi của bạn
    pass: 'Zxc54321@'
  }
});

let mailOptions = {
  from: 'nhmcredit@gmail.com', // Thay bằng email gửi của bạn
  to: 'nhmcredit@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Nodemailer!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
