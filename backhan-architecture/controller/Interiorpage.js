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

exports.updateInterior = async (req, res) => {
  const { id } = req.params; // Get the interior project ID from the params
  const { category, address, desc, date, Area, status } = req.body; // Get updated fields from the body

  try {
    // Find the interior project by ID and update it
    const updatedInterior = await Interior.findByIdAndUpdate(
      id, // Interior project ID from params
      { category, address, desc, date, Area, status }, // Fields to update
      { new: true } // Return the updated interior project
    );

    // If the interior project is not found
    if (!updatedInterior) {
      return res.status(404).json({ message: "Interior project not found" });
    }

    // Handle file uploads (if any)
    if (req.files && req.files.length > 0) {
      const imagePaths = req.files.map(file => file.filename); // Get new image paths

      // Update image paths in the interior project
      updatedInterior.image = imagePaths;

      // Save the updated interior project again after image change
      await updatedInterior.save();
    }

    res.json({
      data: updatedInterior,
      message: "Interior project successfully updated"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating interior project", error });
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