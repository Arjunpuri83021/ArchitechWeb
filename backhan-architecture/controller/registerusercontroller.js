const RegisterUser = require('../modal/Registeruser');

exports.registeruserforedu = async (req, res) => {
    try {
        const { fname, email, address, mobNo, dob } = req.body;
        const profileImage = req.file ? req.file.path : null;

        const record = new RegisterUser({
            fname: fname,
            email: email,
            address: address,
            mobnumber: mobNo,
            dob: dob,
            profileImage: profileImage
        });

        await record.save();
        console.log(record);
        res.json({
            message: "User successfully registered the form",
            statusCode: 202,
            data: record
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



