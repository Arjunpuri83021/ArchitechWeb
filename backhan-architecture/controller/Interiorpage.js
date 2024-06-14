const Interior=require('../modal/Interior')





exports.interior=async(req,res)=>{

    const {category,Address,desc,date,Area,status}=req.body
    

    const imagePaths = req.files.map(file => file.filename);

    const record= await new Interior ({
        category:category,
        image:imagePaths,
        Address:Address,
        desc:desc,
        date:date,
        Area:Area,
        status:status




    })
    const saveddata= await record.save()
    res.json({
        data:saveddata,
        message:"sucefully saved data"
    })


    

}

exports.finddatainterior= async(req,res)=>{


    const projectdata= await  Interior.find()
    res.json({
        data:projectdata
  
  
  
    })
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