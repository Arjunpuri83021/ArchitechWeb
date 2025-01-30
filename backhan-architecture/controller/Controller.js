const Projects = require('../modal/Regmodals');
const interior = require('../modal/Interior');
const contactquery = require('../modal/contactquery');

exports.Products = (req, res) => {
    res.send("hello manjeet");
};

// architecture page
exports.architecture = async (req, res) => {
    const { category, address, desc, date, area, status } = req.body;

    const imagePaths = req.files.map(file => file.filename);

    const record = new Projects({
        category: category,
        image: imagePaths,
        address,
        desc: desc,
        date: date,
        area,
        status: status
    });
    const saveddata = await record.save();
    res.json({
        data: saveddata,
        message: "successfully saved data"
    });
};
// Update project by ID
exports.updateArchitecture = async (req, res) => {
    const { id } = req.params; // Get the project ID from the params
    const { category, address, desc, date, area, status } = req.body;  // Get updated fields from the body

    try {
        // Find the project by ID and update it
        const updatedProject = await Projects.findByIdAndUpdate(
            id, // Project ID from params
            { category, address, desc, date, area, status }, // Fields to update
            { new: true } // Return the updated project
        );

        // If the project is not found
        if (!updatedProject) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Handle file uploads (if any)
        if (req.files && req.files.length > 0) {
            const imagePaths = req.files.map(file => file.filename); // Get new image paths

            // Update image paths in the project
            updatedProject.image = imagePaths;

            // Save the updated project again after image change
            await updatedProject.save();
        }

        res.json({
            data: updatedProject,
            message: "Project successfully updated"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating project", error });
    }
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
