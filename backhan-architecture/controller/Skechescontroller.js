const sketches = require("../modal/Sketches");

exports.saveSketches = async (req, res) => {
    try {
        const imagePaths = req.files ? req.files.map(file => file.filename) : [];
        const record = new sketches({
            image: imagePaths
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

// Delete Sketch by ID
exports.deleteSketchById = async (req, res) => {
    try {
        const { id } = req.params;  // Correct way to get the ID from request parameters

        // Find and delete the sketch record by ID
        const deletedSketch = await sketches.findByIdAndDelete(id);

        // If the sketch was not found
        if (!deletedSketch) {
            return res.status(404).json({
                message: "Sketch not found"
            });
        }

        // If the sketch is found and deleted, return success message
        res.json({
            message: "Sketch deleted successfully",
            data: deletedSketch
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

exports.finddata = async (req, res) => {
    try {
        // Fetch project data (sketches) from the database
        const projectData = await sketches.find();

        // Check if no data is found
        if (!projectData || projectData.length === 0) {
            return res.status(404).json({ message: "No data found" });
        }

        // Respond with the found data
        res.status(200).json({
            data: projectData
        });
    } catch (error) {
        // Send error response in case of failure
        console.error('Error fetching sketches:', error); // Log the error for debugging purposes
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
