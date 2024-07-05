const sketches = require("../modal/Sketches");

exports.saveSketches = async (req, res) => {
    try {
        const image = req.files.map(file => file.filename) || [];
        const record = new sketches({
            image: image
        });
        const savedData = await record.save();
        res.json({
            data: savedData,
            message: "Successfully saved data"
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

exports.finddata = async (req, res) => {
    try {
        const projectData = await sketches.find();
        res.json({
            data: projectData
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};
