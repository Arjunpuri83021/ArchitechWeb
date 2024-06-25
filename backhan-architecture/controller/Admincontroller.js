
 const Admin = require('../modal/Admin')




 
 
 exports.adminregister = async (req, res) => {
  
  
    // 
    const { password,email } = req.body;
    
  
    const userCheck = await Admin.findOne({email:email});
  
    if (userCheck !== null) {
  
      console.log(req.body);
      
      res.json({
        message: "email already registered",
        status: "202",
      });
    } else {
      const record = new Admin({
        
        password: password,
        email: email
    
      });
  
      await record.save();
  
      res.json({
        message: "Successfully registered",
        status: "200",
        data: record,
      });
    }
  };
  

  exports.adminlogin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if there's a user with the provided email
      const user = await Admin.findOne({ email: email });
      if (user !== null) {
        if (user.password === password) {
          res.json({
            message: "Successfully login",
            status: 202,
            data: user
          });
        } else {
          res.json({
            message: "Password not matched",
            status: 404,
            data: user
          });
        }
      } else {
        res.json({
          message: "Email not correct",
          status: 404
        });
      }
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


