const replymodal=require('../modal/Reply')
const contactmodal=require('../modal/contactquery')
const nodemailer=require('nodemailer')




exports.Adminreply=(req,res)=>{
    const paramsid=req.params.queryid
    const {email,concern,reply}=req.body
    
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "manjeetkatariya2000@gmail.com",
      pass: "ukqu xcos ticp mgmv",
    },
  });
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Manjeet 👻" <manjeetkatariya2000@gmail.com>', // sender address
      to: email, // list of receivers
      subject: concern, // Subject line
      text: reply, // plain text body
      html: `<b>${reply}</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>

    await contactmodal.findByIdAndUpdate(paramsid, { status: "read" }, { new: true });
  }
  
  
  main().catch(console.error);


}