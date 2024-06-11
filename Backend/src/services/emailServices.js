require('dotenv').config();
//const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';
let sendSimpleEmail = async(dataSend)=>{

    // send mail with defined transport object
  


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.EMAIL_APP,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

let info = await transporter.sendMail({
    from: '"BookingCare 👻" <19130245@st.hcmuaf.edu.vn>', // sender address
    to: dataSend.reciverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh", // Subject line
    //text: "xin chao pe iu cua anh hihi", // plain text body
    html:`
    <h3>Xin Chào ${dataSend.patientName}</h3>
    <p> Bạn nhận được email này vì đã đặt lịch khẩm bệnh online trên Booking Care</p>
    <p>Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

<pliểu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới

để xác nhận và hoàn tất thủ tục đặt lịch khẩm bệnh.

</p>
<div>

<a href=${dataSend.redirectLink} target="_blank">Click here</a>

</div>
<div>Xin chân thành cảm ơn </div>

    `, // html body
  });


}

module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
