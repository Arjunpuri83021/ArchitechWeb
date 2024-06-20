const Projects = require('../modal/Regmodals');



exports.Products = (req, res) => {
    res.send("hello manjeet");
};

// architecture page
exports.architecture = async (req, res) => {
    const { category, Address, desc, date, Area, status } = req.body;

    const imagePaths = req.files.map(file => file.filename);

    const record = await new Projects({
        category: category,
        image: imagePaths,
        Address: Address,
        desc: desc,
        date: date,
        Area: Area,
        status: status
    });
    const saveddata = await record.save();
    res.json({
        data: saveddata,
        message: "successfully saved data"
    });
};

exports.finddata = async (req, res) => {
    const projectdata = await Projects.find();
    res.json({
        data: projectdata
    });
};

exports.findbyid = async (req, res) => {
    const id = req.params.id;

    try {
        const project = await Projects.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// delete project
exports.deletearchitectureprojects= async (req,res)=>{


    try{
  
      const id=req.params.id
     await  Projects.deleteOne({_id:id})
     return res.json({
      message:"user delete successfully",
      status:200
     })
  
  
  
    }
    catch (error){
      next(error)
  
  
    }
   
  
  
  
  
  
  
  }

// contact query

// interior page (to be implemented)

// architecture page find projects (to be implemented)

// interior page find projects (to be implemented)
