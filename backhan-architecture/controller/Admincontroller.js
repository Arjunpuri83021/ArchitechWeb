 const admin=require('../modal/Admin')



 const transporter = nodemailer.createTransport({
    host: 'mtp.example.com',
    port: 587,
    secure: false, // or 'STARTTLS'
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  });