const RegisterUser = require('../modal/Registeruser');

exports.registeruserforedu = async (req, res) => {
    try {
      const { name, email, mobnumber, message } = req.body;
      const profileImage = req.files.profile ? req.files.profile[0].originalname : null;
      
const resume = req.files.resume ? req.files.resume[0].originalname : null;
  
      const record = new RegisterUser({
        name,
      email,
      mobnumber,
      message,
      image:profileImage,
      resume,
      });
  
      await record.save();
      console.log(record);
      res.json({
        message: "User successfully registered the form",
        statusCode: 202,
        data: record,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


exports.finddata= async (req,res)=>{
    const find= await  RegisterUser.find()
    res.json({
     data:find,
     message:"successfully find data"
    })
 
 
 }



