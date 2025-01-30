const HomeImages = require("../modal/Homeimagesmodal"); // Import the HomeImages model

// Save Home Images
exports.saveHomeImages = async (req, res) => {
    try {
        const imagePaths = req.files ? req.files.map(file => file.filename) : [];
        
        // Create a new record for HomeImages
        const record = new HomeImages({
            image: imagePaths
        });
        
        // Save the record in the database
        const savedData = await record.save();

        // Return success response
        res.json({
            data: savedData,
            message: "Successfully saved data"
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

// Delete Home Image by ID
exports.deleteHomeImageById = async (req, res) => {
    try {
        const { id } = req.params;  // Get the ID from request parameters

        // Find and delete the home image record by ID
        const deletedHomeImage = await HomeImages.findByIdAndDelete(id);

        if (!deletedHomeImage) {
            return res.status(404).json({
                message: "Home image not found"
            });
        }

        res.json({
            message: "Home image deleted successfully",
            data: deletedHomeImage
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Fetch all Home Images
exports.findHomeImages = async (req, res) => {
    try {
        // Fetch home images data from the database
        const homeImagesData = await HomeImages.find();

        // If no home images are found
        if (!homeImagesData || homeImagesData.length === 0) {
            return res.status(404).json({ message: "No home images found" });
        }

        // Return the found home images data
        res.status(200).json({
            data: homeImagesData
        });
    } catch (error) {
        console.error('Error fetching home images:', error); // Log the error for debugging purposes
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};
