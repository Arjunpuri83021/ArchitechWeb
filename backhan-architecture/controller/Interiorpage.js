const Interior=require('../modal/Interior')





exports.interior = async (req, res) => {
  try {
    const { category, address, desc, date, Area, status } = req.body;

    // Handle file uploads
    const imagePaths = req.files ? req.files.map(file => file.filename) : [];

    // Save the record in the database
    const record = new Interior({
      category,
      image: imagePaths,
      address,
      desc,
      date,
      Area,
      status,
    });

    const savedData = await record.save();

    res.json({
      data: savedData,
      message: "Successfully saved data",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};


exports.finddatainterior= async(req,res)=>{


    const projectdata= await  Interior.find()
    res.json({
        data:projectdata
  
  
  
    })
  }


  exports.interiorDelete= async(req,res)=>{
    console.log(req.params.id)
    const id = req.params.id
    const record= await Interior.findByIdAndDelete(id)
    res.send(record)
    console.log(record)
  }
  
  exports.findbyidinterior = async (req, res) => {
    const id  = req.params.id;
  
    try {
      const project = await Interior.findById(id);
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project);
    } catch (error) {
      console.error('Error fetching project by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };