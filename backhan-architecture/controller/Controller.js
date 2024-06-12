
const Projects=require('../modal/Regmodals')
const interior=require('../modal/Interior')


exports.Products=(req,res)=>{
    

    res.send("hello manjeet")
}
exports.architecture=async(req,res)=>{

    const {category,Address,desc,date,Area,status}=req.body
    

    const imagePaths = req.files.map(file => file.filename);
    const record= await new Projects({
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



// interior page


exports.interior=async(req,res)=>{

  const {category,Address,desc,date,Area,status}=req.body
  

  const imagePaths = req.files.map(file => file.filename);
  const record= await new interior({
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

// architecture page find projects

exports.finddata= async(req,res)=>{


    const projectdata= await  Projects.find()
    res.json({
        data:projectdata



    })
}

// interior page find projects

exports.finddata= async(req,res)=>{


  const projectdata= await  interior.find()
  res.json({
      data:projectdata



  })
}



exports.findbyid = async (req, res) => {
    const id  = req.params.id;
  
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