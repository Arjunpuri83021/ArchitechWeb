const sketches=require("../modal/Sketches")









exports.Sketches = async (req, res) => {
  

    const imagePaths = req.files.map(file => file.filename);

    const record = await new sketches({
        image: imagePaths
        
    });
    const saveddata = await record.save();
    res.json({
        data: saveddata,
        message: "successfully saved data"
    });
};

exports.finddata = async (req, res) => {
    const projectdata = await sketches.find();
    res.json({
        data: projectdata
    });
};