const Projects = require('../modal/Regmodals');
const interior = require('../modal/Interior');
const contactquery = require('../modal/contactquery');

exports.Products = (req, res) => {
    res.send("hello manjeet");
};

// architecture page
exports.architecture = async (req, res) => {
    const { category, Address, desc, date, Area, status } = req.body;

    const imagePaths = req.files.map(file => file.filename);

    const record = new Projects({
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


exports.deletearchitectureprojects = async(req,res)=>{
    const id=req.params.id
    const record= await Projects.findByIdAndDelete(id)
    res.send(record)
    console.log(record)
}
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

// contact query
exports.contactquery = async (req, res) => {

  // console.log(req.body)
    try {
        const {email, subject, query } = req.body;

        const record = new contactquery({
            
            email: email,
            subject: subject,
            query: query
        });

        await record.save();
        console.log(record);
        res.json({
            message: "Your query has been submitted.",
            statusCode: 202,
            data: record
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// interior page (to be implemented)

// architecture page find projects (to be implemented)

// interior page find projects (to be implemented)
