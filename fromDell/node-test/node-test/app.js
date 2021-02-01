const nodemailer = require("nodemailer");

// config สำหรับของ gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "smy.lmmkd@gmail.com", // your email
    pass: "04092541saminya", // your email password
  },
});

let mailOptions = {
  // sender
  to: "smy.lmmkd@gmail.com", // list of receivers
  subject: "Hello from sender", // Mail subject
  html: `<div>ddd</div>`, // HTML body
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) console.log(err);
  else console.log(info);
});
